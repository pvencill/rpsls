const InvalidMoveError = require('../errors/invalid-move-error');

const MOVES = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
];

const COMBOS = {
  'paper-rock': { win: 'paper', text: 'Paper covers Rock' },
  'paper-scissors': { win: 'scissors', text: 'Scissors cut Paper' },
  'paper-spock': { win: 'paper', text: 'Paper disproves Spock' },
  'lizard-paper': { win: 'lizard', text: 'Lizard eats Paper' },
  'rock-scissors': { win: 'rock', text: 'Rock crushes Scissors' },
  'rock-spock': { win: 'spock', text: 'Spock vaporizes Rock' },
  'lizard-rock': { win: 'rock', text: 'Rock crushes Lizard' },
  'scissors-spock': { win: 'spock', text: 'Spock smashes Scissors' },
  'lizard-spock': { win: 'lizard', text: 'Lizard poisons Spock' },
  'lizard-scissors': { win: 'scissors', text: 'Scissors decapitates Lizard' },
};

function inValidMove(move) {
  return MOVES.indexOf(move) === -1;
}

function checkForfeit(move1, move2) {
  if (inValidMove(move1) && inValidMove(move2)) {
    throw new InvalidMoveError(`${move1} and ${move2} are both invalid moves`);
  }

  if (inValidMove(move1)) {
    return { winner: 'player2', win: move2, text: `${move2} beats ${move1} because ${move1} is cheating.` };
  }

  if (inValidMove(move2)) {
    return { winner: 'player1', win: move1, text: `${move1} beats ${move2} because ${move2} is cheating.` };
  }

  return false;
}

module.exports = function evaluate(move1, move2) {
  move1 = move1.toLowerCase();
  move2 = move2.toLowerCase();

  const winner = checkForfeit(move1, move2);
  if (winner) return winner;

  const combo = [move1, move2].sort().join('-');

  const result = COMBOS[combo];
  if (result) {
    result.winner = result.win === move1 ? 'player1' : 'player2';
  }

  return result;
};
