import fs from "node:fs/promises";

import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";
import { handleNews } from "./handlers/routeHandlers.js";

const __dirname = process.cwd();

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
      return await serveStatic(__dirname, res, req);
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

// Local development fallback
if (import.meta.url === `file://${process.argv[1]}`) {
  const http = await import("node:http");
  const PORT = process.env.PORT || 8000;
  
  const server = http.createServer((req, res) => {
    const handler = (await import("./server.js")).default;
    return handler(req, res);
  });
  
  server.listen(PORT, () => console.log(`Server listening at Port ${PORT}`));
}
