import { inject, bindable } from 'aurelia-framework';
import AuthenticationService from './services/authentication';

@inject(AuthenticationService)
export class NavBar {
  @bindable router = null;

  constructor(auth) {
    this.auth = auth;
  }

  get routes() {
    if (this.auth.currentUser) {
      return this.router.navigation;
    }
    return this.router.navigation.filter(r => !r.settings.auth);
  }
}