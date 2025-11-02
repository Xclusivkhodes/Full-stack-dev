let name = "Linda";
let greeting = "Hi there, ";
let fullGreeting = greeting + name;

function greet() {
  document.getElementById("greet").innerText = fullGreeting;
}

greet();

let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

document.getElementById("points").innerText =
  "These are your points " + myPoints;
