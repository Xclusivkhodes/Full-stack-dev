import http from "node:http";
import fs from "node:fs/promises";

import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";
import { handleNews } from "./handlers/routeHandlers.js";

const __dirname = process.cwd();

// Vercel calls this default export for every incoming request
export default async function handler(req, res) {
  if (req.url === "/api") {
    if (req.method === "GET") {
      handleGet(res);
    }
    if (req.method === "POST") {
      handlePost(req, res);
    }
  } else if (req.url === "/api/news") {
    return await handleNews(res);
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(__dirname, res, req);
  } else {
    res.statusCode = 404;
    return await serveStatic(__dirname, res, req);
  }
}
