import { getData } from "../utils/getData.js";
import { sendResposne } from "../utils/sendResponse.js";

export const handleGet = async (res) => {
  const rawData = await getData();
  const data = JSON.stringify(rawData);
  sendResposne(res, "application/JSON", data, 200);
};
