import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';
import { LoggedIn, LoggedOut, AuthenticationError } from './events/authentication';

@inject(EventAggregator)
export class FlashNotice {
  constructor(events) {
    this.clear();
    
    events.subscribe(LoggedIn, msg => {
      this.flash('success', msg.user.displayName, 'is now logged in', 3000);
    });

    events.subscribe(LoggedOut, msg => {
      this.flash('info', msg.user.displayName, 'is now logged out');
    });

    events.subscribe(AuthenticationError, msg => {
      this.flash('danger', 'Login Failed', msg.response.content);
    });
  }

  flash(severity, message, detail, duration) {
    this.show = true;
    this.severity = severity;
    this.message = message;
    this.detail = detail;
    if (duration) {
      setTimeout(this.clear.bind(this), duration);
    }
  } 

  clear() {
    this.show = false;
    this.severity = null;
    this.message = null;
    this.detail = null;
  }
}
