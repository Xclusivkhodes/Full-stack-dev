export const SOURCES = [
  {
    id: "world-bank-briefs",
    name: "World Bank Funding",
    url: "https://www.worldbank.org/en/about/corporate-procurement/business-opportunities/administrative-procurement",
    type: "Grant",
    region: ["Global"],
    enabled: true,
    selector: ".lp-content-area ul li", // Example selector
  },
  {
    id: "nigeria-education-fund",
    name: "TetFund Nigeria",
    url: "https://tetfund.gov.ng/index.php/category/scholarships/",
    type: "Scholarship",
    region: ["Africa", "Nigeria"],
    enabled: true,
    selector: "article",
  },
];
