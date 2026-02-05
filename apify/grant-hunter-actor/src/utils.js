import { createHash } from "crypto";

export const generateId = (title, source) => {
  return createHash("md5")
    .update(`${title.toLowerCase()}-${source.toLowerCase()}`)
    .digest("hex");
};

export const cleanText = (text) => {
  return text?.replace(/\s+/g, " ").trim() || "";
};
