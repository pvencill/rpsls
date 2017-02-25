import AuthenticationService from './services/authentication';
import { inject } from 'aurelia-framework';

@inject(AuthenticationService)
export default class Login {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
    this.username = '';
    this.password = '';
  }

  login() {
    this.authenticationService.login(this.username, this.password);
  }
}
