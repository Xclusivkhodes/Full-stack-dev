export const validateInput = (input) => {
  const {
    regions = ["Global"],
    types = ["Grant", "Scholarship"],
    maxItems = 50,
    useAI = true,
  } = input || {};

  // Basic validation
  if (!Array.isArray(regions) || !Array.isArray(types)) return null;

  return {
    regions,
    types,
    maxItems: Math.min(maxItems, 500), // Safety cap
    useAI,
  };
};

import { Actor } from "apify";

/**
 * Ensures the object strictly matches the mandatory 3.0 schema.
 */
export function validateOpportunity(item) {
  const requiredFields = [
    "id",
    "title",
    "type",
    "provider",
    "application_url",
    "source_url",
  ];

  // Check missing fields
  for (const field of requiredFields) {
    if (!item[field]) {
      Actor.log.warning(`Item discarded: Missing required field "${field}"`, {
        title: item.title,
      });
      return false;
    }
  }

  // Validate type enum
  const validTypes = [
    "Scholarship",
    "Grant",
    "Tender",
    "Accelerator",
    "Fellowship",
  ];
  if (!validTypes.includes(item.type)) {
    Actor.log.warning(`Item discarded: Invalid type "${item.type}"`, {
      title: item.title,
    });
    return false;
  }

  // Validate confidence score
  if (item.confidence_score < 0 || item.confidence_score > 1) {
    item.confidence_score = 0.5; // Default to neutral if AI fails logic
  }

  return true;
}
