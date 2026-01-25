import http from "node:http";
import path from "nodeLpath";
import { handleFiles } from "./handleFiles.js";

const PORT = 9000;
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (!req.url === "/temp/live") {
    return await handleFiles(res, req, __dirname);
  }
});
