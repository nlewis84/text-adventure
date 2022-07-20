function rollDice(numDice, sides) {
  var result = 0;
  for (let i = 0; i < numDice; i++) {
    var diceRoll = Math.floor(Math.random() * sides) + 1;
    result += diceRoll;
  };
  return result;
}

export default rollDice;