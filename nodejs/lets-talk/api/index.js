import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { serveStatic } from "../utils/serveStatic.js";
import { handleGet, handlePost } from "../handlers/routeHandlers.js";
import { handleNews } from "../handlers/routeHandlers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The root is two levels up from api/index.js
const ROOT_DIR = path.join(__dirname, "..");

// Export as a default handler for Vercel
export default async (req, res) => {
  try {
    // Normalize URL
    let url = req.url || "/";
    if (url.includes("?")) {
      url = url.split("?")[0];
    }

    if (url === "/api" || url.startsWith("/api/")) {
      if (url === "/api") {
        if (req.method === "GET") {
          handleGet(res);
        } else if (req.method === "POST") {
          handlePost(req, res);
        }
      } else if (url === "/api/news") {
        return await handleNews(res);
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Not Found");
      }
    } else {
      // Serve static files, treating root and missing files as index.html requests
      const urlToServe = url === "/" ? "/index.html" : url;
      const modifiedReq = { ...req, url: urlToServe };
      return await serveStatic(ROOT_DIR, res, modifiedReq);
    }
  } catch (error) {
    console.error("Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
};
