let hands = ["Rock", "Paper", "Scissors"];

for (
  let determinor = Math.floor(Math.random() * 3);
  determinor < 3;
  determinor
) {
  if (determinor === 0) {
    console.log(hands[0]);
  } else if (determinor === 1) {
    console.log(hands[1]);
  } else {
    console.log(hands[2]);
  }
}
