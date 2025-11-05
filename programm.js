function rollDice() {
  const numDice = document.getElementById("numDice").value;

  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const minNumber = 1;
    const maxNumber = 6;
    const value =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    values.push(value);
    images.push(`<img src="images/dice${value}.png" alt="Dice ${value}">`);
  }

diceResult.textContent = `dice: ${values.join(", ")}`;
diceImages.innerHTML = images.join(" ");
}
