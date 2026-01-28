import path from "node:path";
import fs from "node:fs/promises";
import ejs from "ejs"; // Import EJS
import { sendResposne } from "./sendResponse.js";
import { mimeConverter } from "./mimeConverter.js";

export const serveStatic = async (basePath, res, req) => {
  const publicDir = path.join(basePath, "public");
  const urlPath = req.url === "/" ? "index.html" : req.url;
  const filePath = path.join(publicDir, urlPath);
  const ext = path.extname(filePath);
  const errFile = path.join(publicDir, "404.html");

  try {
    // Check if file exists first
    await fs.access(filePath);

    // If the file is HTML, render it via EJS
    if (ext === ".html") {
      // Pass any dynamic data you want in the second argument
      const renderedHtml = await ejs.renderFile(filePath, {
        title: "My Dynamic Page",
        user: "Guest",
      });
      sendResposne(res, "text/html", renderedHtml, 200);
    } else {
      // Otherwise serve as normal static file (CSS, JS, Images)
      const content = await fs.readFile(filePath);
      sendResposne(res, mimeConverter(ext), content, 200);
    }
  } catch (err) {
    if (err.code === "ENOENT" || err.code === "EACCES") {
      try {
        await fs.access(errFile);
        const errorContent = await ejs.renderFile(errFile, {
          error: "404 Not Found",
        });
        sendResposne(res, "text/html", errorContent, 404);
      } catch (ejsErr) {
        sendResposne(res, "text/plain", "404 Not Found", 404);
      }
    } else {
      console.error("ServeStatic error:", err);
      sendResposne(res, "text/plain", "500 Internal Server Error", 500);
    }
  }
};
