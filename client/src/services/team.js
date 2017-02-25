import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import AuthenticationService from './authentication';

@inject(HttpClient, AuthenticationService)
export default class TeamService {
  constructor(httpClient, authenticationService) {
    this.auth = authenticationService;
    this.client = httpClient.configure(x => {
      x.withHeader('Accept', 'application/json');
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Authorization', `Bearer ${authenticationService.currentUser.token}`);
    });
  }

  list() {
    return this.client.get('/api/teams');
  }

  listForUser() {
    const user = this.auth.currentUser;
    return this.client.get(`/api/teams?userId=${user.employeeNumber}`);
  }

  detail(id) {
    return this.client.get(`/api/teams/${id}`);
  }

  addBot(id, bot) {
    return this.client.post(`/api/teams/${id}/bots`, bot);
  }
}
