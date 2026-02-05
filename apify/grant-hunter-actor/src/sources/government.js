import axios from "axios";
import * as cheerio from "cheerio";
import { Actor } from "apify";

export async function scrapeGovernmentSources(config, maxItems) {
  const { url, id, selector } = config;
  const results = [];

  try {
    Actor.log.info(`Scraping government source: ${id} at ${url}`);

    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      timeout: 10000,
    });

    const $ = cheerio.load(response.data);
    const elements = $(selector).slice(0, maxItems);

    elements.each((_, el) => {
      const title = $(el).find("h2, h3, a").first().text().trim();
      const link = $(el).find("a").first().attr("href");

      if (title && link) {
        results.push({
          rawTitle: title,
          rawLink: new URL(link, url).href,
          sourceId: id,
          discoveredAt: new Date().toISOString(),
        });
      }
    });
  } catch (error) {
    Actor.log.error(`Failed to scrape ${id}: ${error.message}`);
  }

  return results;
}
