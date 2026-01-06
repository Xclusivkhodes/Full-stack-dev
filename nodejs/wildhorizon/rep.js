import http from "node:http";

const PORT = 9000;

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);
  console.log(urlObj);
  console.log(queryObj);
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
