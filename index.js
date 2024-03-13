const diceRandomNumber1 = Math.floor(Math.random() * 6) + 1;
const diceRandomNumber2 = Math.floor(Math.random() * 6) + 1;
// document.querySelector("img").setAttribute("src", "./dice1.png");
document.querySelector(".img1").setAttribute("src", `./images/dice${diceRandomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${diceRandomNumber2}.png`);
if (diceRandomNumber1 > diceRandomNumber2) {
  // player 1 wins
  document.querySelector("h1").textContent = "Player 1";
}else if (diceRandomNumber1 < diceRandomNumber2) {
  // player 2 wins
  document.querySelector("h1").textContent = "Player 2";
} else {
  //draw
  document.querySelector("h1").textContent = "DRAW";
}