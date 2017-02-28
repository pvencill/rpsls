export class LoggedIn {
  constructor(user) {
    this.user = user;
  }
}

export class LoggedOut {
  constructor(user) {
    this.user = user;
  }
}

export class AuthenticationError {
  constructor(username, response) {
    this.username = username;
    this.response = response.content;
  }
}
