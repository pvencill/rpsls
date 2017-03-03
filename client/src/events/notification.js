export class Message {
  constructor(message, detail, duration) {
    this.message = message;
    this.detail = detail;
    this.duration = duration;
  }
}

export class Success extends Message {}

export class Info extends Message {
}

export class Warning extends Message {
}

export class Danger extends Message {
}
