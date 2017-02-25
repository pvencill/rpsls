/* eslint import/prefer-default-export: 0 */
import BotService from '../../services/bot';
import { inject } from 'aurelia-framework';

@inject(BotService)
export class BotList {
  constructor(botService) {
    this.service = botService;
    this.bots = [];
    this.loading = false;
  }

  activate() {
    this.loading = true;
    this.service.list().then(t => {
      this.bots = t.content
      this.loading = false;
    });
  }
}
