/* eslint import/prefer-default-export: "off" */
import AuthenticationService from './services/authentication';

export class UserStatusCustomElement {
  static inject() { return [AuthenticationService]; }

  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }
}
