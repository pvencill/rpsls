import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export default class UserService {
  constructor(httpClient) {
    this.client = httpClient.configure(x => {
      x.withHeader('Accept', 'application/json');
      x.withHeader('Content-Type', 'application/json');
    });
  }

  async queryByName(fragment) {
    return new Promise((resolve, reject) => {
      return this.client.jsonp(`http://answers.mitre.org/answers/api/typeahead/people?q=${fragment}&format=jsonp`, 'callback')
        .then(m => {
          resolve(m.content.records.record);
        }).catch(r => reject(r));
    });
  }
}
