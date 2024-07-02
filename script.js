"use strict";

let score = 20;
let Highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let secritNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(" ⛔ Not Number");
  } else if (guess === secritNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = secritNumber;
    document.querySelector("body").style.backgroundColor = "rgb(247, 116, 192)";
    document.querySelector(".number").style.width = "30rem";
    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".highscore").textContent = Highscore;
    }
  } else if (guess !== secritNumber) {
    if (score > 1) {
      displayMessage(guess > secritNumber ? "📈 Too High" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🎇You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.width = "15rem";
  });
});
