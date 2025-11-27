import { getStockData } from "./fakeStockAPI.js";

const stockName = document.getElementById("name");
const stockSymbol = document.getElementById("symbol");
const stockPrice = document.getElementById("price");
const stockTime = document.getElementById("time");

const { name, sym, price, time } = getStockData;

stockName.innerText = name;
stockSymbol.innerText = sym;
stockPrice.textContent = price;
stockTime.textContent = time;

console.log(name);
