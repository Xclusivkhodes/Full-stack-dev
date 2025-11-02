let scoreHome = 0;
let scoreGuest = 0;
let scoreHomeText = document.getElementById("score-home");
let scoreGuestText = document.getElementById("score-guest");

function addOne() {
  scoreHome += 1;
  scoreHomeText.textContent = scoreHome;
}

function addTwo() {
  scoreHome += 2;
  scoreHomeText.textContent = scoreHome;
}

function addThree() {
  scoreHome += 3;
  scoreHomeText.textContent = scoreHome;
}

function addOneGuest() {
  scoreGuest += 1;
  scoreGuestText.textContent = scoreGuest;
}

function addTwoGuest() {
  scoreGuest += 2;
  scoreGuestText.textContent = scoreGuest;
}

function addThreeGuest() {
  scoreGuest += 3;
  scoreGuestText.textContent = scoreGuest;
}

function reset() {
  scoreGuest = 0;
  scoreHome = 0;
  scoreGuestText.textContent = 0;
  scoreHomeText.textContent = 0;
}
