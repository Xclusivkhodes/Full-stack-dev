import { Actor } from "apify";
import { playwrightUtils } from "apify";

export async function scrapeUniversitySources(config, maxItems, browser) {
  const { url, id, selector } = config;
  const results = [];

  const page = await browser.newPage();

  try {
    Actor.log.info(`Scraping university (Playwright): ${id} at ${url}`);
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

    // Wait for the specific list container to appear
    await page.waitForSelector(selector, { timeout: 10000 });

    const opportunities = await page.$$eval(
      selector,
      (elements, max) => {
        return elements.slice(0, max).map((el) => ({
          rawTitle: el.innerText || el.textContent,
          rawLink: el.querySelector("a")?.href || window.location.href,
        }));
      },
      maxItems,
    );

    results.push(
      ...opportunities.map((opt) => ({
        ...opt,
        sourceId: id,
        discoveredAt: new Date().toISOString(),
      })),
    );
  } catch (error) {
    Actor.log.error(`Playwright failed for ${id}: ${error.message}`);
  } finally {
    await page.close();
  }

  return results;
}
