let count = 0;
let saveEl = document.getElementById("saved");

function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

function save() {
  let countStr = " - " + count;
  saveEl.innerText += countStr;
  count = document.getElementById("count-el").innerText = 0;
}
