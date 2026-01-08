import path from "node:path";
import fs from "node:fs/promises";

export const getData = async () => {
  try {
    const dirName = path.join("data", "data.json");
    const file = await fs.readFile(dirName, "utf8");
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
