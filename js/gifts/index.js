const containerEl = document.getElementById("labels-container");
const text = "Thank you for all your hardword throughout this year 😄";
const sender = "Felix";

const getLabelsHTML = (message, sender, ...names) =>
  names
    .map(
      (name) => `
      <div class="label">
          <p class="ttl">Dear ${name},</p>
          <p class="text">
              ${message}
          </p>
          <p>Best wishes,</p>
          <p>${sender}</p>
      </div>
      `
    )
    .join("");

containerEl.innerHTML = getLabelsHTML(
  text,
  sender,
  "Grandvillia",
  "Paulina",
  "Nina",
  "Martha",
  "Nella"
);
