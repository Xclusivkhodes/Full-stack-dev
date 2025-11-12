let num1 = 0;
let num2 = 0;
let sum = 0;
let money = 0;
let stake = 0;
let dealerMoney = 0;
let errorText = document.getElementById("error");
let sumText = document.getElementById("sum");
let num1Text = document.getElementById("card-num1");
let num2Text = document.getElementById("card-num2");
let moneyText = document.getElementById("money");
let stakeText = document.getElementById("stake");
let button = document.getElementById("active");
let dealersTurn = document.getElementById("dealers-turn");
let btn = document.getElementById("hidden");
let btn2 = document.getElementById("hidden2");
let btn3 = document.getElementById("hidden3");
let dialog = document.getElementById("dialog");
let dialogClose = document.getElementById("close");
let dialogText = document.getElementById("dialog-text");
let dialoText = document.getElementById("dialo-text");
let dialText = document.getElementById("dial-text");
let botMoney = document.getElementById("bot-money");
let startBtn = document.getElementById("start");
let parent = document.getElementById("score-cont");
let moneyFinish = document.getElementById("money-finish");
let moneyNotEnough = document.getElementById("money-not-enough");
let resumeBtn = document.getElementById("resume");
let userName = document.getElementById("name");

userNameInputed = prompt("What is your name?");

userName.textContent = userNameInputed;

function tie() {
  dialog.showModal();
  dialogText.textContent = "Its A Tie!!!!";
  dialogText.style.color = "blue";
  dialogText.style.fontSize = "10vw";
  money += Number(stake);
  moneyText.textContent = Number(money);
  stake = 0;
  stakeText.textContent = Number(stake);
  btn.disabled = false;
}

function lost() {
  dialog.showModal();
  dialogText.textContent = "You Lost!!!!";
  dialogText.style.color = "red";
  dialogText.style.fontSize = "10vw";
  dealerMoney += Number(stake);
  botMoney.textContent = Number(dealerMoney);
  stake = 0;
  stakeText.textContent = Number(stake);
  btn.disabled = false;
}

function won() {
  dialog.showModal();
  dialogText.textContent = "You Won!!!!";
  dialogText.style.color = "Green";
  dialogText.style.fontSize = "10vw";
  money += 2 * stake;
  moneyText.textContent = Number(money);
  stake = 0;
  stakeText.textContent = Number(stake);
  btn.disabled = false;
}

function reset() {
  sumText.textContent = 0;
  num2Text.textContent = 0;
  num1Text.textContent = 0;
  num1 = 0;
  num2 = 0;
  num3 = "";
}

function blackJack() {
  dialog.showModal();
  dialogText.textContent = "You Got BlackJack!!!!";
  dialogText.style.color = "Green";
  dialogText.style.fontSize = "10vw";
  money += 3 * Number(stake);
  moneyText.textContent = Number(money);
  stake = 0;
  stakeText.textContent = Number(stake);
  btn.disabled = false;
}

function span() {
  container.remove(container);
  container = document.createElement("span");
  container.id = "contern";
  parent.insertBefore(container, num2Text.nextSibling);
  span = document.createElement("span");
  span.textContent = Number(num3) + " ";
  container.appendChild(span);
}

function newCard() {
  let num1 = Number(Math.floor(Math.random() * (10 - 2 + 1) + 2));
  let num2 = Number(Math.floor(Math.random() * (10 - 2 + 1) + 2));
  sum = Number(num1) + Number(num2);
  num1Text.textContent = Number(num1);
  num2Text.textContent = Number(num2);
  sumText.textContent = Number(sum);
  btn.disabled = true;
}

function start() {
  money = Number(prompt("How much money do you have?"));
  stake = Number(prompt("How much do you want to stake from your balance"));
  money -= stake;
  startBtn.style.display = "none";
  resumeBtn.style.display = "none";
  btn.style.display = "block";
  btn2.style.display = "block";
  btn3.style.display = "block";
  if (stake > money) {
    moneyNotEnough.showModal();
    dialText.textContent = "You do not have enough funds to stake this much.";
    dialText.style.color = "Red";
    dialText.style.fontSize = "10vw";
    if (btn.style.display === "block") {
      btn.style.display = "none";
      btn2.style.display = "none";
      btn3.style.display = "none";
      resumeBtn.style.display = "block";
      num1Text.textContent = 0;
      num2Text.textContent = 0;
      sumText.textContent = 0;
    }
  } else {
    errorText.textContent = "";
    sumText.textContent = 0;
    num1Text.textContent = 0;
    num2Text.textContent = 0;
    num1 = 0;
    num2 = 0;
    moneyText.textContent = Number(money);
    stakeText.textContent = Number(stake);
  }
}

function addMore() {
  let num3 = Number(Math.floor(Math.random() * (10 - 2 + 1) + 2));
  container = document.getElementById("contern");
  span = document.createElement("span");
  span.textContent = " " + Number(num3) + " ";
  container.appendChild(span);
  sum += Number(num3);
  sumText.textContent = Number(sum);
  if (sum === 21) {
    blackJack();
    reset();
    span();
  }
  if (sum > 21) {
    lost();
    reset();
    span();
  }
}

function logic() {
  if (sum === 21) {
    dialog.showModal();
    dialogText.textContent = "You Got BlackJack!!!!";
    dialogText.style.color = "Green";
    dialogText.style.fontSize = "10vw";
    money += 3 * Number(stake);
    moneyText.textContent = Number(money);
    stake = 0;
    stakeText.textContent = Number(stake);
    btn.disabled = false;
  }

  if (sum < dealerSum) {
    lost();
  } else if (sum > dealerSum) {
    won();
  } else if (sum === dealerSum) {
    tie();
  }
}

function closeDialog() {
  dialog.setAttribute("closing", "");
  dialog.addEventListener(
    "animationend",
    () => {
      dialog.removeAttribute("closing");
      dialog.close();
      if (money === 0) {
        moneyFinish.showModal();
        dialoText.textContent = "You Do Not Have Enough Funds";
        dialoText.style.color = "Red";
        dialoText.style.fontSize = "10vw";
        if (btn.style.display === "block") {
          btn.style.display = "none";
          btn2.style.display = "none";
          btn3.style.display = "none";
          startBtn.style.display = "block";
          num1Text.textContent = 0;
          num2Text.textContent = 0;
          sumText.textContent = 0;
        }
      } else {
        stake = Number(
          prompt("How much do you want to stake from your balance")
        );
        if (stake > money) {
          moneyNotEnough.showModal();
          dialText.textContent =
            "You do not have enough funds to stake this much.";
          dialText.style.color = "Red";
          dialText.style.fontSize = "10vw";
          if (btn.style.display === "block") {
            btn.style.display = "none";
            btn2.style.display = "none";
            btn3.style.display = "none";
            resumeBtn.style.display = "block";
            num1Text.textContent = 0;
            num2Text.textContent = 0;
            sumText.textContent = 0;
          }
        } else {
          errorText.textContent = "";
          money -= Number(stake);
          sumText.textContent = 0;
          num1Text.textContent = 0;
          num2Text.textContent = 0;
          num1 = 0;
          num2 = 0;
          moneyText.textContent = Number(money);
          stakeText.textContent = Number(stake);
        }
      }
    },
    { once: true }
  );
}

function restart() {
  moneyFinish.setAttribute("closing", "");
  moneyFinish.addEventListener(
    "animationend",
    () => {
      moneyFinish.removeAttribute("closing");
      moneyFinish.close();
      startBtn.style.display = "block";
    },
    { once: true }
  );
}

function dealerTurn() {
  let num4 = Number(Math.floor(Math.random() * (10 - 2 + 1) + 2));
  let num5 = Number(Math.floor(Math.random() * (10 - 2 + 1) + 2));
  dealerSum = Number(num5) + Number(num4);
  num1Text.textContent = Number(num4);
  num2Text.textContent = Number(num5);
  sumText.textContent = Number(dealerSum);
  btn3.disabled = false;
  logic();
}

function resume() {
  stake = Number(prompt("How much do you want to stake from your balance"));
  money -= stake;
  startBtn.style.display = "none";
  resumeBtn.style.display = "none";
  btn.style.display = "block";
  btn2.style.display = "block";
  btn3.style.display = "block";
  if (stake > money) {
    moneyNotEnough.showModal();
    dialText.textContent = "You do not have enough funds to stake this much.";
    dialText.style.color = "Red";
    dialText.style.fontSize = "10vw";
    if (btn.style.display === "block") {
      btn.style.display = "none";
      btn2.style.display = "none";
      btn3.style.display = "none";
      resumeBtn.style.display = "block";
      num1Text.textContent = 0;
      num2Text.textContent = 0;
      sumText.textContent = 0;
    }
  } else {
    errorText.textContent = "";
    sumText.textContent = 0;
    num1Text.textContent = 0;
    num2Text.textContent = 0;
    num1 = 0;
    num2 = 0;
    moneyText.textContent = Number(money);
    stakeText.textContent = Number(stake);
  }
}

function contine() {
  moneyNotEnough.close();
}
