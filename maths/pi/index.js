const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let angle = 0;
const radius1 = 150;
const radius2 = 100;
const PI_RATIO = Math.PI;

// 1. Create variables to remember the last position
let lastX, lastY;

function draw() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate the NEW position
  let x =
    centerX + radius1 * Math.cos(angle) + radius2 * Math.cos(angle * PI_RATIO);
  let y =
    centerY + radius1 * Math.sin(angle) + radius2 * Math.sin(angle * PI_RATIO);

  // 2. Only draw if we have a "last" position to connect from
  if (lastX !== undefined && lastY !== undefined) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    ctx.beginPath(); // Take the cap off the pen
    ctx.moveTo(lastX, lastY); // Put the pen at the OLD spot
    ctx.lineTo(x, y); // Drag the pen to the NEW spot
    ctx.stroke(); // Make the ink appear!
  }

  // 3. Save the current position to be used as the OLD spot next time
  lastX = x;
  lastY = y;

  angle += 0.02;
  requestAnimationFrame(draw);
}
