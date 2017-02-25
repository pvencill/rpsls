import AuthenticationService from './services/authentication';
import { inject } from 'aurelia-framework';
import { Redirect } from 'aurelia-router';

@inject(AuthenticationService)
export class App {
  constructor(auth) {
    this.auth = auth;
  }

  configureRouter(config, router) {
    config.title = 'RPSLS';
    const step = new AuthenticatedStep(this.auth);
    config.addAuthorizeStep(step);
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
      { route: 'teams', name: 'teams', moduleId: './components/teams/my', nav: true, title: 'Teams', settings: { auth: true } },
      { route: 'teams/create', name: 'createTeam', moduleId: './components/teams/create', nav: false, title: 'Create a Team', settings: {auth: true } },
      { route: 'teams/:id', name: 'teamDetail', moduleId: './components/teams/detail', nav: false, title: 'Create a Team', settings: {auth: true } },
      { route: 'bots', name: 'bots', moduleId: './components/bots/list', nav: true, title: 'Bots', settings: { auth: true } },
      { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Login' },
    ]);

    this.router = router;
  }
}

class AuthenticatedStep {
  constructor(auth) {
    this.auth = auth;
  }

  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
      if (!this.auth.currentUser) {
        return next.cancel(new Redirect('login'));
      }
    }

    return next();
  }
}
