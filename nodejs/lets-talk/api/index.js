import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { serveStatic } from "../utils/serveStatic.js";
import { handleGet, handlePost } from "../handlers/routeHandlers.js";
import { handleNews } from "../handlers/routeHandlers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Export as a default handler for Vercel
export default async (req, res) => {
  try {
    if (req.url === "/api") {
      if (req.method === "GET") {
        handleGet(res);
      } else if (req.method === "POST") {
        handlePost(req, res);
      }
    } else if (req.url === "/api/news") {
      return await handleNews(res);
    } else if (!req.url.startsWith("/api")) {
      const rootDir = path.join(__dirname, "..");
      return await serveStatic(rootDir, res, req);
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("404 Not Found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
};
