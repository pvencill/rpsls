/* eslint import/prefer-default-export: 0 */
import { inject, NewInstance } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import TeamService from '../../services/team';
import UserService from '../../services/users';

@inject(TeamService, EventAggregator, NewInstance.of(ValidationController), UserService)
export class TeamCreate {
  constructor(teamService, events, validator, userService) {
    this.team = { name: '', members: [] };
    this.service = teamService;
    this.events = events;
    this.validator = validator;
    this.users = userService;
    this.suggestedMembers = [];
    // this.autocompleteComponent = null;
  }

  bind() {
    this.reset();
  }

  reset() {
    this.team = { name: '', members: [] };
    ValidationRules
      .ensure(t => t.name).required()
      .on(this.team);
  }

  async getUsers($event) {
    this.suggestedMembers = await this.users.queryByName($event.detail);
  }

  addMember() {
    console.log(this);
    this.team.members.push(this.autocompleteComponent.selectedValue);
  }

  clearNewMember() {
    this.autocompleteComponent.clear();
  }
}
