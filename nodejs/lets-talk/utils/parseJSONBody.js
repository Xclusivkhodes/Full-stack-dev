export const parseJSONBody = async (req) => {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
  }
  try {
    const bodyObj = JSON.parse(body);
    return bodyObj;
  } catch (err) {
    throw new Error(`Invalid JSON format: ${err}`);
  }
};
