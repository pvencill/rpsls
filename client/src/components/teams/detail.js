import { inject } from 'aurelia-framework';
import TeamService from '../../services/team';

@inject(TeamService)
export class TeamDetail {
  constructor(teamService) {
    this.service = teamService;
    this.team = null;
    this.loading = false;
    this.saving = false;
    this.showForm = false;
    this.newBot = {};
  }

  activate(params) {
    this.loading = true; // todo: there's probably a cleaner way to do this via pub/sub
    this.service.detail(params.id).then(t => {
      this.loading = false;
      this.team = t.content;
    });
  }

  createBot() {
    this.saving = true;
    this.service.addBot(this.team._id, this.newBot).then(b => {
      this.showForm = false;
      this.saving = false;
      this.team.bots.push(b.content);
      this.newBot = {};
    })
    
  }
}