import { generateId, cleanText } from "./utils.js";

export function normalizeData(rawItem, sourceConfig) {
  const title = cleanText(rawItem.rawTitle);

  // Default schema structure
  return {
    id: generateId(title, sourceConfig.name),
    title: title,
    type: sourceConfig.type || "Grant", // Default from source config
    provider: sourceConfig.name,
    amount: {
      min: null,
      max: null,
      currency: null,
    },
    deadline: null, // To be refined by regex or AI
    region: sourceConfig.region || ["Global"],
    eligibility: {
      education_level: [],
      fields: [],
      other: null,
    },
    application_url: rawItem.rawLink,
    source_url: sourceConfig.url,
    ai_summary: "",
    confidence_score: 0.5, // Initial discovery score
    last_verified: new Date().toISOString(),
  };
}

/**
 * Basic Regex-based Date Extraction
 * (Runs before AI to save tokens)
 */
export function extractBasicDate(text) {
  const dateRegex =
    /\b\d{4}-\d{2}-\d{2}\b|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}\b/i;
  const match = text.match(dateRegex);
  if (match) {
    const d = new Date(match[0]);
    return isNaN(d.getTime()) ? null : d.toISOString();
  }
  return null;
}
