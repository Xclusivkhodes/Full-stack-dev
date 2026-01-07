export const sendResposne = (res, type, data, statusCode) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", type);
  res.end(data);
};
