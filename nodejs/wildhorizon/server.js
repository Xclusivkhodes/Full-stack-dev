import http from "node:http";
import { getDataFromDB } from "./db.js";
import { JSONData, filter, filterByQueryParams } from "./utils.js";

const PORT = 8000;

const errObj = {
  error: "not found",
  message: "the requested route does not exist",
};

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  console.log(urlObj);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  if (urlObj.pathname === "/api" && req.method === "GET") {
    let filteredDestinations = destinations;

    console.log(queryObj);
    if (queryObj) {
      filteredDestinations = filterByQueryParams(destinations, queryObj);
    }
    JSONData(res, 200, filteredDestinations);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const contenent = req.url.split("/").pop();
    filter(res, destinations, "continent", contenent, errObj);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    filter(res, destinations, "country", country, errObj);
  } else {
    JSONData(res, 404, errObj);
  }
});

server.listen(PORT, () => console.log(`Server listening at ${PORT}`));
