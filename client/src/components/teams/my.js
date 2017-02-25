import TeamService from '../../services/team';
import { inject } from 'aurelia-framework';

@inject(TeamService)
export class MyTeams {
  constructor(teamService) {
    this.teamService = teamService;
    this.loading = false;
    this.teams = [];
  }

  activate() {
    this.loading = true;
    console.log(`Loading: ${this.loading}`);
    this.teamService.listForUser().then(t => {
      this.teams = t.content
      this.loading = false;
    });
  }
}
