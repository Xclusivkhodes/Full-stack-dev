import path from "node:path";
import fs from "node:fs/promises";

import { getData } from "./getData.js";

export const addNewSighting = async (newSighting) => {
  try {
    const data = await getData();
    data.push(newSighting);
    const filePath = path.join("data", "data.json");
    fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
