import { OpenAI } from "openai";
import { Actor } from "apify";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function enrichWithAI(item) {
  const prompt = `
        Analyze the following funding opportunity and extract structured data.
        Title: ${item.title}
        Source: ${item.source_url}
        
        Return ONLY a JSON object matching this schema:
        {
          "amount": { "min": number, "max": number, "currency": "string" },
          "deadline": "ISO-8601 string",
          "eligibility": { "education_level": [], "fields": [], "other": "" },
          "ai_summary": "2-sentence max summary",
          "confidence_score": 0.0-1.0
        }
    `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Cost-effective for classification
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const enrichment = JSON.parse(response.choices[0].message.content);
    return { ...item, ...enrichment };
  } catch (error) {
    Actor.log.error(`AI Enrichment failed for ${item.title}: ${error.message}`);
    return item; // Fallback to normalized data
  }
}
