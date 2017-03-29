import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import Storage from './storage';
import { EventAggregator } from 'aurelia-event-aggregator'
import { LoggedIn, LoggedOut, AuthenticationError } from '../events/authentication';

function extractUser(token) {
  const rawData = token.split('.')[1];
  const base64 = rawData.replace('-','+').replace('_','/');
  const user = JSON.parse(window.atob(base64));
  user.token = token;
  return user;
}

@inject(HttpClient, Router, EventAggregator)
export default class AuthenticationService {
  constructor(httpClient, router, events) {
    httpClient.configure(x => {
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Accepts', 'application/json');
    });

    this.client = httpClient;
    this.router = router;
    this.storage = new Storage('localStorage');
    this.currentUser = this.storage.get('user');
    this.events = events;
  }

  login(username, password) {
    this.client.post('/api/login', JSON.stringify({ username, password })).then(message => {
      this.currentUser = extractUser(message.response);
      const expiresInMinutes = (this.currentUser.exp - this.currentUser.iat) / 60;
      this.storage.set('user', this.currentUser, expiresInMinutes);
      this.events.publish(new LoggedIn(this.currentUser));
      this.router.navigate('');
    }).catch(message => this.events.publish(new AuthenticationError(username, message)));
  }
}
