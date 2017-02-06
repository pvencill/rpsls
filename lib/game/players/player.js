/**
  Abstract Class for defining the player interface
**/
class Player {
  constructor() {
    if (this.constructor === 'Player') {
      throw new TypeError('Cannot construct an abstract class');
    }

    if (this.getMove === Player.prototype.getMove) {
      throw new TypeError('Derived classes must implement the "getMove" method');
    }
  }

  getMove(history, callback) {
    throw new TypeError('Do not call the abstract method getMove');
  }
}

module.exports = Player;
