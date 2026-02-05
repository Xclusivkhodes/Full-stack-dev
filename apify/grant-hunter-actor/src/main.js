import { Actor } from "apify";
import { validateInput } from "./validate.js";
import { SOURCES } from "./config.js";
import { scrapeGovernmentSources } from "./sources/government.js";
import { normalizeData } from "./normalize.js";
import { enrichWithAI } from "./ai.js";

await Actor.init();

try {
  const input = await Actor.getInput();
  const validatedInput = validateInput(input);
  if (!validatedInput) throw new Error("Invalid input.");

  const { regions, types, maxItems, useAI } = validatedInput;
  const dataset = await Actor.openDataset();
  let totalProcessed = 0;

  for (const source of SOURCES) {
    if (totalProcessed >= maxItems) break;

    // Filter logic
    const matchesRegion = source.region.some((r) => regions.includes(r));
    const matchesType = types.includes(source.type);
    if (!source.enabled || !matchesRegion || !matchesType) continue;

    // 1. Scrape
    const rawResults = await scrapeGovernmentSources(
      source,
      maxItems - totalProcessed,
    );

    // 2. Normalize & Enrich
    for (const raw of rawResults) {
      let item = normalizeData(raw, source);

      // 3. Optional AI Enrichment
      if (useAI && process.env.OPENAI_API_KEY) {
        Actor.log.info(`🤖 Enriching: ${item.title}`);
        item = await enrichWithAI(item);
      }

      // 4. Save to Dataset
      await dataset.pushData(item);
      totalProcessed++;
    }
  }

  Actor.log.info(`✅ Successfully processed ${totalProcessed} opportunities.`);
} catch (error) {
  Actor.log.error(`Actor failed: ${error.message}`);
  await Actor.fail(error.message);
} finally {
  await Actor.exit();
}
