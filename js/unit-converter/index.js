const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const input = document.querySelectorAll(".input");
const feet = document.getElementById("feet");
const meters = document.getElementById("meters");
const gallons = document.getElementById("gallons");
const litres = document.getElementById("litres");
const pounds = document.getElementById("pounds");
const kilos = document.getElementById("kilos");
const convFeet = 3.281;
const convGallon = 0.264;
const convPounds = 2.204;
let val = inputEl.value;
feet.textContent = Number(val * convFeet).toFixed(3);
meters.textContent = Number(val / convFeet).toFixed(3);
gallons.textContent = Number(val * convGallon).toFixed(3);
litres.textContent = Number(val / convGallon).toFixed(3);
pounds.textContent = Number(val * convPounds).toFixed(3);
kilos.textContent = Number(val / convPounds).toFixed(3);

for (let i = 0; i < input.length; i++) {
  input[i].textContent = val;
}

convertBtn.addEventListener("click", function () {
  val = inputEl.value;
  feet.textContent = Number(val * convFeet).toFixed(3);
  meters.textContent = Number(val / convFeet).toFixed(3);
  gallons.textContent = Number(val * convGallon).toFixed(3);
  litres.textContent = Number(val / convGallon).toFixed(3);
  pounds.textContent = Number(val * convPounds).toFixed(3);
  kilos.textContent = Number(val / convPounds).toFixed(3);

  for (let i = 0; i < input.length; i++) {
    input[i].textContent = val;
  }
});
