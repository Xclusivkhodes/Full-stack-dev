import sanitize from "sanitize-html";

export const sanitizeObject = (obj) => {
  const sanitizeOptions = {
    allowedTags: ["b", "em", "i", "a", "p"],
    allowedAttributes: {},
  };
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      // Sanitize string values
      obj[key] = sanitize(obj[key], sanitizeOptions);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      // Recurse into nested objects or arrays
      sanitizeObject(obj[key]);
    }
  }
  return obj;
};
