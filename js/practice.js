// let hands = ["Rock", "Paper", "Scissors"];

// for (
//   let determinor = Math.floor(Math.random() * 3);
//   determinor < 3;
//   determinor
// ) {
//   if (determinor === 0) {
//     console.log(hands[0]);
//   } else if (determinor === 1) {
//     console.log(hands[1]);
//   } else {
//     console.log(hands[2]);
//   }
// }

// const excersiceTimeMins = 20;

// // let message = "";

// // if (excersiceTimeMins < 30) {
// //   message = "You need to do better";
// // } else {
// //   message = "You're doing great";
// // }

// const message =
//   excersiceTimeMins < 30 ? "You need to do better" : "You're doing great";

// console.log(message);

const playerGuess = 8;
const correctAnswer = 6;

const message = playerGuess === correctAnswer ? "Correct" : "Wrong";
playerGuess < correctAnswer ? "Too Low" : "Too high";

console.log(message);
