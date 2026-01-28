try {
  const data = await fetch("/api");
  const response = await data.json();
  console.log("API Response:", response);

  if (response && Array.isArray(response)) {
    renderCards(response);
  } else {
    console.error("Invalid response format:", response);
    renderError("Failed to load sightings");
  }
} catch (err) {
  console.error("Fetch error:", err);
  renderError("Error loading sightings");
}

function renderError(message) {
  const container = document.querySelector(".cards-container");
  if (container) {
    container.innerHTML = `<p style="color: red; padding: 20px;">${message}</p>`;
  }
}

function renderCards(cardsData) {
  const container = document.querySelector(".cards-container");
  if (!container) {
    console.error("Cards container not found");
    return;
  }

  let cardsHTML = "";

  cardsData.forEach((card, i) => {
    cardsHTML += `
  <article class="sighting-card" aria-labelledby="sighting-title-${i}">
    <p class="card-details">${card.timeStamp || "Unknown time"}, ${card.location || "Unknown location"}</p>
    <h3 id="sighting-title-${i}">${card.title || "Untitled"}</h3>
    <div class="sighting-text-wrapper">
      <p class="sighting-text">${card.text || "No description"}</p>
    </div>
    <button class="read-more-btn" aria-expanded="false">Read in full</button>
  </article>
    `;
  });

  container.innerHTML = cardsHTML;
}

// handle card expand/collapse
document.querySelector(".cards-container").addEventListener("click", (e) => {
  if (!e.target.classList.contains("read-more-btn")) return;

  const button = e.target;
  const sightingCard = button.closest(".sighting-card");
  const isExpanded = sightingCard.classList.toggle("expanded");

  button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  button.textContent = isExpanded ? "Show less" : "Read in full";
});
