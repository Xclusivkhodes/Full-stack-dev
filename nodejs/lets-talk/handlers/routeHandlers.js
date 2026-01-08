import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeObject } from "../utils/sanitizeHtml.js";
import { sendResposne } from "../utils/sendResponse.js";

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
    addNewSighting(data);
  } catch (err) {
    sendResposne(res, "application/json", JSON.stringify({ err: err }), 400);
  }
};
