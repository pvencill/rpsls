/* eslint import/prefer-default-export: 0 */
import io from 'socket.io-client';
import { inject } from 'aurelia-framework';
import AuthenticationService from '../../services/authentication';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Danger } from '../../events/notification';
import { Router } from 'aurelia-router'

@inject(io, AuthenticationService, EventAggregator, Router)
export class Battle {
  MOVES = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

  constructor(socket, auth, events, router) {
    this.socket = socket;
    this.battleLog = [];
    this.currentUser = auth.currentUser;
    this.match = {};
    this.events = events;
    this.router = router;
    this.scores = {};
  }
// TODO: manage connection state and UI notice of said state
  activate(params) {
    this.socket.emit('authenticate', { authorization: this.currentUser.token });
    this.socket.on('result', this.updateBattleLog.bind(this));
    this.socket.emit('battle', { bot: params.botId, user: this.currentUser.token });
    this.socket.on('match', (match) => {
      this.match = match;
      this.updateBattleLog(match);
    });
    this.socket.on('winner', (result) => {
      this.updateBattleLog(result.match);
      this.updateScores(result.score);
    });
    this.socket.on('battle error', (e) => {
      if (e.code === 409) {
        this.updateBattleLog(e.match);
        this.updateScores(e.score);
      } else {
        this.events.publish(new Danger(e.message, '', 3000));
      }
    });
    this.socket.on('authorization failure', (e) => {
      this.router.navigate('login');
    });
  }

  updateBattleLog(result) {
    console.log(result);
    this.match = result;
  }

  updateScores(scores) {
    console.log(scores);
    this.scores = scores;
  }

  move(move) {
    this.socket.emit('make move', move);
  }
}
