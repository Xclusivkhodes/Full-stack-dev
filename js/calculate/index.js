let num1 = 8;
let num2 = 4;
let sum = 0;
let sumText = document.getElementById("sum");

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

function add() {
  sumText.textContent = "Sum: ";
  sum = num1 + num2;
  sumText.textContent += sum;
}

function subtract() {
  sumText.textContent = "Sum: ";
  sum = num1 - num2;
  sumText.textContent += sum;
}

function multiply() {
  sumText.textContent = "Sum: ";
  sum = num1 * num2;
  sumText.textContent += sum;
}

function divide() {
  sumText.textContent = "Sum: ";
  sum = num1 / num2;
  sumText.textContent += sum;
}
