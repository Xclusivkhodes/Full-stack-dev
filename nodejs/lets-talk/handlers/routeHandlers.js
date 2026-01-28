import { sightingEvent } from "../events/sightingEvents.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeObject } from "../utils/sanitizeHtml.js";
import { sendResposne } from "../utils/sendResponse.js";
import { stories } from "../data/story.js";

export const handleGet = async (res) => {
  const rawData = await getData();
  const data = JSON.stringify(rawData);
  sendResposne(res, "application/JSON", data, 200);
};

export const handlePost = async (req, res) => {
  try {
    const parsedBody = await parseJSONBody(req);
    const data = sanitizeObject(parsedBody);
    sendResposne(res, "application/json", JSON.stringify(data), 201);
    sightingEvent.emit("sighting-added", data);
    addNewSighting(data);
  } catch (err) {
    sendResposne(res, "application/json", JSON.stringify({ err: err }), 400);
  }
};

export async function handleNews(res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length);

    res.write(
      `data: ${JSON.stringify({
        event: "news-update",
        story: stories[randomIndex],
      })}\n\n`,
    );
  }, 3000);
}
