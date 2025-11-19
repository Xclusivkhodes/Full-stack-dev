let emoji = [
  "🦍 ",
  "🐉 ",
  "🐍 ",
  "🐕 ",
  "🐊 ",
  "🦀 ",
  "🐸",
  "🦁 ",
  "🦆 ",
  "🐤 ",
  "🤖 ",
];

let fight = document.getElementById("fight");
let stage = document.getElementById("stage");

fight.addEventListener("click", function () {
  let ran1 = Math.floor(Math.random() * emoji.length);
  let ran2 = Math.floor(Math.random() * emoji.length);
  stage.textContent = `${emoji[ran1]} VS ${emoji[ran2]}`;
});
