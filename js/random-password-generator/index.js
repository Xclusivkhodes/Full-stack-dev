const generateBtn = document.getElementById("generate");
const customizeBtn = document.getElementById("customize-btn");
const passwordOutput1 = document.getElementById("pass1");
const passwordOutput2 = document.getElementById("pass2");
const slider = document.getElementById("myRange");
const smallLetter = document.getElementById("low-case");
const bigLetter = document.getElementById("up-case");
const symbol = document.getElementById("symbol");
const number = document.getElementById("number");
const tooltip = document.getElementById("tooltip");
const passLen = document.getElementById("pass-length");
const customizeSection = document.getElementById("customize-group");
let val = slider.value;

passLen.textContent = slider.value;
const CHARSETS = {
  lowercase: [..."abcdefghijklmnopqrstuvwxyz"],
  uppercase: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  numbers: [..."0123456789"],
  special: [..."!@#$%^&*()_+-={}[]|:;\"'<>,.?/`~"],
};

slider.oninput = function () {
  val = passLen.textContent = this.value;
};

const password = {
  smallChar: true,
  bigChar: true,
  symbols: true,
  numbers: true,
};

function getPool() {
  let pool = [];

  const optionMap = {
    smallChar: "lowercase",
    bigChar: "uppercase",
    symbols: "special",
    numbers: "numbers",
  };

  for (let key in optionMap) {
    if (password[key]) {
      pool.push(...CHARSETS[optionMap[key]]);
    }
  }
  return pool;
}

function genrateRandomPassword() {
  let password1 = [];
  for (let i = 0; i < val; i++) {
    let random = Math.floor(Math.random() * getPool().length);
    password1.push(getPool()[random]);
  }
  let passwords = [];
  for (let i = 0; i < val; i++) {
    let random = Math.floor(Math.random() * getPool().length);
    passwords.push(getPool()[random]);
  }
  result1 = passwords.join("");
  result2 = password1.join("");
}

generateBtn.addEventListener("click", function () {
  genrateRandomPassword();
  passwordOutput1.value = result1;
  passwordOutput2.value = result2;
  tooltip.classList.add("show");
  tooltip.textContent = "Password Generated";
  passwordOutput1.style.background =
    "light-dark(var(--bg-light-semi-transparent), var(--bg-dark-semi-transparent))";
  setTimeout(() => {
    tooltip.classList.remove("show");
    passwordOutput1.style.background = "";
  }, 1500);
});

passwordOutput1.addEventListener("click", function () {
  const text = passwordOutput1.value;
  tooltip.textContent = "Copied!";
  navigator.clipboard.writeText(text);
  tooltip.classList.add("show");
  passwordOutput1.style.background =
    "light-dark(var(--bg-light-semi-transparent), var(--bg-dark-semi-transparent))";
  setTimeout(() => {
    tooltip.classList.remove("show");

    passwordOutput1.style.background = "";
  }, 1500);
});

passwordOutput2.addEventListener("click", function () {
  const text = passwordOutput2.value;
  navigator.clipboard.writeText(text);
  tooltip.textContent = "Copied!";
  tooltip.classList.add("show");
  passwordOutput2.style.background =
    "light-dark(var(--bg-light-semi-transparent), var(--bg-dark-semi-transparent))";
  setTimeout(() => {
    tooltip.classList.remove("show");

    passwordOutput2.style.background = "";
  }, 1500);
});

smallLetter.addEventListener("click", function () {
  if (smallLetter.checked === false) {
    password.smallChar = false;
  } else {
    password.smallChar = true;
  }
});

bigLetter.addEventListener("click", function () {
  if (bigLetter.checked === false) {
    password.bigChar = false;
  } else {
    password.bigChar = true;
  }
});

symbol.addEventListener("click", function () {
  if (symbol.checked === false) {
    password.symbols = false;
  } else {
    password.symbols = true;
  }
});

number.addEventListener("click", function () {
  if (number.checked === false) {
    password.numbers = false;
  } else {
    password.numbers = true;
  }
});

customizeBtn.addEventListener("click", function () {
  if (customizeSection.style.display === "none") {
    customizeSection.style.display = "block";
  } else {
    customizeSection.style.display = "none";
  }
});
