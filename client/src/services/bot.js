import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import AuthenticationService from './authentication';

@inject(HttpClient, AuthenticationService)
export default class BotService {
  constructor(httpClient, authenticationService) {
    this.client = httpClient.configure(x => {
      x.withHeader('Accept', 'application/json');
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Authorization', `Bearer ${authenticationService.currentUser.token}`);
    });
  }

  list() {
    return this.client.get('/api/bots');
  }
}
