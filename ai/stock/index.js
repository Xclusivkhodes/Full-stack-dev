const ticksArr = [];
const generateBtn = document.getElementById("generate-el");
const tickerEl = document.getElementById("ticker-el");
const ticklstEl = document.getElementById("ticker-lst");
const tickerBtn = document.getElementById("ticker-btn");
const errEl = document.getElementById("err");
const loadEl = document.getElementById("load-el");
const mainEl = document.getElementById("main");
const emEl = document.getElementById("em-el");
const orrEm = emEl.textContent;
const orrText = errEl.textContent;
const errText = (message, color) => {
  errEl.textContent = message;
  errEl.style.color = color;
  tickerEl.value = "";
};
const reset = () => {
  errEl.textContent = orrText;
  errEl.style.color = "";
  tickerEl.value = "";
};
const isLoading = false;
const loadingHTML = (message) => {
  emEl.textContent = message;
  return `
    <div id="loading-animation-container">
        <div class="bar-container">
            <div class="loading-bar bar-1"></div>
            <div class="loading-bar bar-2"></div>
            <div class="loading-bar bar-3"></div>
        </div>
    </div>
    
`;
};
const reportBox = (report, message) => {
  emEl.textContent = message;
  return `
  <section id="report-output" aria-live="polite">
  <p class="report-text">
    ${report}
  </p>
</section>
  `;
};

// Use this in your JS: document.querySelector('main').innerHTML = loadingHTML;
tickerBtn.addEventListener("click", () => {
  const newTicker = tickerEl.value.toUpperCase().trim();

  if (ticksArr.length === 3) {
    errText("You can only add 3 stock tickers", "red");
    return;
  }

  if (newTicker === "") {
    errText("You need to input a stock ticker", "red");
    errEl.style.color = "red";
    return;
  }

  if (ticksArr.includes(newTicker)) {
    errText(`${tickerEl.value.toUpperCase()} has already been added`, "red");
    return;
  }

  ticksArr.push(tickerEl.value.toUpperCase());
  ticklstEl.textContent = ticksArr.join(", ");
  reset();
  generateBtn.disabled = false;
});

generateBtn.addEventListener("click", () => {
  loadEl.innerHTML = loadingHTML("We are querying the API");
  setTimeout(() => {
    loadEl.innerHTML = loadingHTML("We are creating the report for you");
    setTimeout(() => {
      loadEl.innerHTML = reportBox(
        "We are creating the report for you",
        "Here you go 🥳"
      );
    }, 4000);
  }, 2000);
});
