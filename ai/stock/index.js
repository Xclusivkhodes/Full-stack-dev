import { dates } from "./utils/dates";
import OpenAI from "openai";

const ticksArr = [];
const massiveApiKey = import.meta.env.VITE_MASSIVE_API_KEY;
const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
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
const errState = (message = "An error occured at our end") => {
  emEl.textContent = message;
  return `
  <div id="loading-animation-container">
    <div class="bar-container">
      <svg version="1.1" id="preloader" x="0px" y="0px" width="240px" height="120px" viewBox="0 0 240 120">

      <style type="text/css" >
        <![CDATA[
      
          #plug,
          #socket { fill:hsl(210 100% 55%) }
      
          #loop-normal { fill: none; stroke: hsl(210 100% 55%); stroke-width: 12 }
          #loop-offset { display: none }
      
        ]]>
      </style>
      
      <path id="loop-normal" class="st1" d="M120.5,60.5L146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5
      L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0z">
        <animate attributeName="stroke-dasharray" attributeType="XML"
            from="500, 50"  to="450 50"
            begin="0s" dur="4s"
            repeatCount="indefinite"/>
        <animate attributeName="stroke-dashoffset" attributeType="XML"
            from="-40"  to="-540"
            begin="0s" dur="4s"
            repeatCount="indefinite"/>  
      </path>
        
      <path id="loop-offset" d="M146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5
      L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0L120.5,60.5
      L146.48,87.02z"/>
        
      <path id="socket" d="M7.5,0c0,8.28-6.72,15-15,15l0-30C0.78-15,7.5-8.28,7.5,0z"/>  
        
      <path id="plug" d="M0,9l15,0l0-5H0v-8.5l15,0l0-5H0V-15c-8.29,0-15,6.71-15,15c0,8.28,6.71,15,15,15V9z"/>
        
      <animateMotion
        xlink:href="#plug"
          dur="4s"
        rotate="auto"
        repeatCount="indefinite"
        calcMode="linear"
        keyTimes="0;1"    
        keySplines="0.42, 0, 0.58, 1">
        <mpath xlink:href="#loop-normal"/>
      </animateMotion>
        
      <animateMotion             
        xlink:href="#socket"
          dur="4s"
        rotate="auto"
        repeatCount="indefinite"
        calcMode="linear"
        keyTimes="0;1"
        keySplines="0.42, 0, 0.58, 1">
        <mpath xlink:href="#loop-offset"/>
      </animateMotion>  
      </svg>
    </div>
  </div>`;
};
const errText = (message, color = "red") => {
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
        <div class="bar-container" style="margin: 0px;">
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

tickerBtn.addEventListener("click", () => {
  const newTicker = tickerEl.value.toUpperCase().trim();

  if (ticksArr.length === 3) {
    errText("You can only add 3 stock tickers");
    return;
  }

  if (newTicker === "") {
    errText("You need to input a stock ticker");
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

generateBtn.addEventListener("click", fetchStockData);

async function fetchStockData() {
  loadEl.innerHTML = loadingHTML("We are querying the API");
  try {
    const stockData = await Promise.all(
      ticksArr.map(async (ticker) => {
        const url = `https://api.massive.com/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${massiveApiKey}`;
        const response = await fetch(url);
        const data = await response.text();
        const status = response.status;
        if (status === 200) {
          loadEl.innerHTML = loadingHTML("We are creating the report for you");
          return data;
        } else {
          loadEl.innerHTML = errState();
        }
      })
    );
    fetchReport(stockData.join(""));
  } catch (err) {
    loadEl.innerHTML = errState();
    throw Error(`Failed to fetch ticker data: ${err}`);
  }
}

async function fetchReport(data) {
  console.log(data);
  const openai = new OpenAI({
    apiKey: geminiApiKey,
    baseURL: "https://google-api/v1beta/openai/",
    dangerouslyAllowBrowser: true,
  });

  const messages = [
    {
      role: "system",
      content:
        "You are an experienced stock roker who can predict the stock market even when your eyes are closed without seeing the graphs and just knowing prices of the stocks from the past three days and giving accurate investment advice that could get someone to become a billionaire by just listening to your advice about the stock ticker they give",
    },
    {
      role: "user",
      content: `In the last three days, this is the json report of stcoks Iwant to buy can you analyze it anduse your big brain to give help me know whether to buy it or sell it ${data}`,
    },
  ];
  try {
    const request = openai.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: messages,
    });
    console.log(request.choices[0].message.content);
  } catch (err) {
    throw Error(`Failed to fetch response: ${err}`);
  }
}
