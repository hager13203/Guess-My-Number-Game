const secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);
let message = document.querySelector(".message");
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    message.textContent = "No Number!!";
  } else if (guess > secretNumber) {
    message.textContent = "Too High !!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = "Too LoW !!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    message.textContent = "🎉🎉 Congratulations! 🎉🎉";
    document.querySelector(".number").textContent = secretNumber;
  }
});
