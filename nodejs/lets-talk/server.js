import http from "node:http";
import fs from "node:fs/promises";

import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";
import { handleNews } from "./handlers/routeHandlers.js";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
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
    serveStatic(__dirname, res, req);
  }
});

server.listen(PORT, () => console.log(`Server listening at Port ${PORT}`));
