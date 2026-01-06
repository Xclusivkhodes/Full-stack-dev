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

// const playerGuess = 1;
// const correctAnswer = 6;

// const message =
//   playerGuess === correctAnswer
//     ? "Correct"
//     : playerGuess < correctAnswer
//     ? "Too Low"
//     : playerGuess > correctAnswer
//     ? "Too High"
//     : "Wrong";

// console.log(message);

// function selectItem(item) {
//   let price = 0;
//   switch (item) {
//     case "cofee":
//       price = 2;
//       break;
//     case "sandwiches":
//       price = 5;
//       break;
//     case "salad":
//       price = 4;
//       break;
//     case "Lemon Cake":
//       price = 3;
//       break;
//     default:
//       return "Sorry we dont sell that item";
//   }
//   return `You selected ${item}. That will be $${price}`;
// }

// console.log(selectItem("food"));

// const favoriteMovie = {
//   title: "Gran Turismo",
//   year: 2019,
//   genre: "race",
//   star: "Him",
//   director: "Him",
// };

// const { title, year, genre, star, director } = favoriteMovie;

// console.log(
//   `My favorite movie is ${title}, it was shot in ${year}, its genre is ${genre}, ${star} stared in it and it was directed by ${director}`
// );

// const dreamHoliday = {
//   destination: "Keta",
//   activity: "eat food",
//   acommodation: "Keta Hotel",
//   companion: "my wife",
// };

// const { destination, activity, acommodation, companion } = dreamHoliday;

// console.log(
//   `I would love to go to ${destination} to ${activity}, at ${acommodation} with ${companion}`
// );

// function logAnswer(answer, points) {
//   console.log(
//     `The answer is ${answer}, and if you got that right, give yourself ${points} points`
//   );
// }

// console.log("What is the capital for Peru");

// setTimeout(logAnswer, 3000, "Lima", 10);

// const dateSnapShot = new Date();

// console.log(dateSnapShot.getFullYear().toString());

//Arrow Function

// const getSpendAlert = (amount) => `Warning! You have spent $${amount}`;

// console.log(getSpendAlert(150));

// const speedWarning = (speed, speedLimit) => {
//   if (speed > speedLimit) {
//     return `You are going ${speed}mph whish is faster than ${speedLimit}mph and which is too fast`;
//   }
// };

// console.log(speedWarning(500, 100));

// let arr = [3, 6, 9, 12, 15];

// let mapArr = arr.map((array) => (array * 1.9).toFixed(2));

// console.log(mapArr);

// const giveAdminAccess = (permisionLevel, ...names) => {
//   names.forEach((name) =>
//     console.log(`${name} has been given ${permisionLevel} level access`)
//   );
// };
// giveAdminAccess("admin", "Felix", "Paulina", "Nina", "Grandvillia");

// let price = [3, 7, 8, 9];

// const sum = (acc, cur) => acc + cur;

// let total = price.reduce(sum, 0);

// console.log(total);
