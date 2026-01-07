import http from "node:http";
import fs from "node:fs/promises";

import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 8000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith("/api")) {
    if (req.method === "GET") {
      handleGet(res);
    }
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(__dirname, res, req);
  }
});

server.listen(PORT, () => console.log(`Server listening at Port ${PORT}`));
