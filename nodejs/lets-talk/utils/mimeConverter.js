export const mimeConverter = (ext) => {
  const mimeTypes = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".html": "text/html",
    ".txt": "text/plain",
    ".pdf": "application/pdf",
    ".svg": "image/svg+xml",
    // Add more as needed
  };

  return mimeTypes[ext] || mimeTypes[".html"];
};
