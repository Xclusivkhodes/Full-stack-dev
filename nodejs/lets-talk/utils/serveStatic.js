import path from "node:path";
import fs from "node:fs/promises";
import { sendResposne } from "./sendResponse.js";
import { mimeConverter } from "./mimeConverter.js";

export const serveStatic = async (basePath, res, req) => {
  const publicDir = path.join(basePath, "public");
  const filePath = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url
  );
  const ext = path.extname(filePath);
  const errFile = path.join(publicDir, "404.html");
  try {
    const content = await fs.readFile(filePath);
    sendResposne(res, mimeConverter(ext), content, 200);
  } catch (err) {
    const content = await fs.readFile(errFile);
    if (err.code === "ENOENT") {
      sendResposne(res, "text/html", content, 404);
    }
    console.log(err);
  }
};
