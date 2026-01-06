export const JSONData = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

export const filter = (res, data, place, t, err) => {
  const filteredDestinations = data.filter(
    (obj) => obj[place].toLowerCase() === decodeURIComponent(t.toLowerCase())
  );
  if (filteredDestinations.length) {
    JSONData(res, 200, filteredDestinations);
  }
  if (!filteredDestinations.length) {
    err.message = `${t} is not a continent or is not in our database`;
    JSONData(res, 404, err);
  }
};

export const filterByQueryParams = (data, queryObj) => {
  const { country, continent, is_open_to_public } = queryObj;

  if (country) {
    data = data.filter(
      (obj) =>
        obj.country.toLowerCase() === decodeURIComponent(country).toLowerCase()
    );
  }
  if (continent) {
    data = data.filter(
      (obj) =>
        obj.continent.toLowerCase() ===
        decodeURIComponent(continent).toLowerCase()
    );
  }
  if (is_open_to_public) {
    data = data.filter(
      (obj) =>
        obj.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
    );
  }
  return data;
};
