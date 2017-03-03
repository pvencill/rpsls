import { inject, NewInstance, bindable } from 'aurelia-framework';
import TeamService from '../../services/team';
import { Success, Danger } from '../../events/notification';
import { EventAggregator } from 'aurelia-event-aggregator';
import { BotCleared, BotSaved } from '../../events/bots';

@inject(TeamService, EventAggregator)
export class TeamDetail {
  @bindable teamId;

  constructor(teamService, events) {
    this.service = teamService;
    this.team = null;
    this.clear();
    this.events = events;
    this.newBot = null;
    this.createBot = false;
    this.events.subscribe(BotCleared, b => this.createBot = false);
    this.events.subscribe(BotSaved, b => {
      this.createBot = false;
      this.team.bots.push(b.bot);
      this.clear();
      this.events.publish(new Success('Saved:', b.bot.name, 1000));
    })
  }

  activate(params) {
    this.loading = true; // todo: there's probably a cleaner way to do this via pub/sub
    this.teamId = params.id;
    this.service.detail(params.id).then(t => {
      this.loading = false;
      this.team = t.content;
    }).catch(e => {
      this.events.publish(new Danger(data.message));
      this.loading = false;
    });
  }

  clear() {
    this.loading = false;
    this.newBot = null;
  }
}