import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getData = async () => {
  try {
    // Build absolute path from utils directory up to data/data.json
    const dataPath = path.join(__dirname, "..", "data", "data.json");
    const file = await fs.readFile(dataPath, "utf8");
    const data = JSON.parse(file);
    return data;
  } catch (err) {
    console.log(`There was a problem retrieving the data: ${err}`);
    return [
      {
        error: "There was an error fetching the data",
        message: err,
      },
    ];
  }
};
