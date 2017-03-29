/* eslint import/prefer-default-export: 0 */
import io from 'socket.io-client';
import { inject } from 'aurelia-framework';
import AuthenticationService from '../../services/authentication';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Danger } from '../../events/notification';

@inject(io, AuthenticationService, EventAggregator)
export class Battle {
  MOVES = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

  constructor(socket, auth, events) {
    this.socket = socket;
    this.battleLog = [];
    this.currentUser = auth.currentUser;
    this.match = null;
    this.events = events;
  }
// TODO: manage connection state and UI notice of said state
  activate(params) {
    this.socket.emit('authenticate', { authorization: this.currentUser.token });
    this.socket.on('result', this.updateBattleLog);
    this.socket.emit('battle', { bot: params.botId, user: this.currentUser.token });
    this.socket.on('match', (match) => {
      this.match = match;
      this.updateBattleLog(match);
    });
    this.socket.on('winner', (result) => {
      this.match = result.match;
      this.updateBattleLog(this.match);
      // TODO: something flashy to announce the winner
    });
    this.socket.on('battle error', (e) => {
      this.events.publish(new Danger(e.message, '', 3000));
    });
  }

  updateBattleLog(result) {
    this.battleLog = result.history;
  }

  move(move) {
    this.socket.emit('make move', move);
  }
}
