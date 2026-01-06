import { data } from "./data.js";
console.log(data);

export async function getDataFromDB() {
  return data;
}
