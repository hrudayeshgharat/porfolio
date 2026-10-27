export type Project = {
 id: string; slug: string; title: string; category: string; question: string; focus: string;
 description: string; tags: string[]; method: string[]; outcome: string; stack: string;
 link: string; linkLabel: string; color: string;
 imageFolder?: string;
 images?: { src: string; alt: string; caption: string }[];
};
// Add one entry per project. Images auto-load from public/projects/<title>/.
// Optional imageFolder overrides the folder name; images is an optional fallback gallery.
export const PROJECTS: Project[] = [
  {
    id: 'signal-feedback',
    slug: 'signal-feedback',
    title: 'Signal — Feedback Intelligence',
    category: 'AI · CUSTOMER ANALYTICS',
    question: 'What are customers telling us, and which issues deserve a closer look?',
    focus: 'Interactive app · Real Amazon reviews',
    description: 'A working customer feedback analysis app with CSV import, sentiment and topic classification, review-level evidence, product comparisons, and evaluation against reference labels. Includes a transparent local keyword baseline and an optional Gemini AI analysis mode.',
    tags: ['Gemini AI', 'Text Analytics', 'Next.js', 'TypeScript'],
    method: [
      'Validate review CSVs, remove exact duplicates, and calculate sentiment distributions, product comparisons, and monthly proportions.',
      'Compare a local keyword baseline with structured Gemini classifications. Inspect explanations and source reviews behind each topic count.',
      'Evaluate predictions with accuracy, macro F1, a confusion matrix, and a list of disagreements. Export filtered reviews and an evidence-backed report.'
    ],
    outcome: 'An end-to-end portfolio demo that connects review analysis to inspectable evidence. The default includes 120 real Amazon reviews with source attribution; an optional fictional labeled sample demonstrates evaluation without claiming benchmark performance.',
    stack: 'An independent Next.js and TypeScript application. Gemini runs through a server-side endpoint; API keys stay on the server, and local baseline analysis works without an AI connection.',
    link: 'https://signal-feedback-ochre.vercel.app/',
    linkLabel: 'Open feedback app',
    color: 'from-emerald-500 to-teal-500',
    images: [{src: '/projects/signal-feedback.png', alt: 'Signal customer feedback app showing sentiment distribution, topic breakdowns, and review metrics', caption: 'Working app · real Amazon review sample · local baseline analysis'}]
  },
  {
    "id": "superstore",
    "slug": "superstore",
    "title": "Superstore Dashboard",
    "category": "DATA ANALYTICS · POWER BI",
    "question": "How do sales, products, and customers shape business performance?",
    "focus": "3 report pages",
    "description": "A three-page Power BI report built around the Global Superstore dataset. The Overview, Product, and Customers pages bring sales performance, profitability, product mix, and customer behavior into one navigable report.",
    "tags": [
      "Power BI",
      "Data Visualization",
      "Business Intelligence"
    ],
    "method": [
      "Build an executive overview with Total Sales, Total Profit, Total Orders, and Total Quantity; compare sales by market and category, sales and profit by year, and profit by sub-category.",
      "Explore product performance through Profit Margin, Average Discount, Average Order Value, a category and sub-category treemap, a sales-versus-profit scatter chart, and a product detail table.",
      "Analyze customers with Total Customers, Sales per Customer, Profit per Customer, segment sales, top countries, and a top-customer table. Use Year, Market, Category, and Region slicers across the report pages."
    ],
    "outcome": "A report that supports exploration from executive KPIs to product and customer detail, with page navigation and targeted slicers.",
    "stack": "Power BI combines measure-driven KPI cards, interactive slicers, charts, and detailed tables in a single report.",
    "link": "/projects/Superstore-Dashboard.pbix",
    "linkLabel": "Download Power BI report",
    "color": "from-blue-500 to-cyan-500",
    "images": [
      {
        "src": "/projects/superstore-overview.svg",
        "alt": "Superstore overview report layout diagram, without data values",
        "caption": "Overview · layout diagram from PBIX; not a screenshot"
      },
      {
        "src": "/projects/superstore-product.svg",
        "alt": "Superstore product report layout diagram, without data values",
        "caption": "Product · layout diagram from PBIX; not a screenshot"
      },
      {
        "src": "/projects/superstore-customers.svg",
        "alt": "Superstore customers report layout diagram, without data values",
        "caption": "Customers · layout diagram from PBIX; not a screenshot"
      }
    ]
  },
  {
    id: 'bangkok-airbnb-market-analysis',
    slug: 'bangkok-airbnb-market-analysis',
    title: 'Bangkok Airbnb Market Analysis',
    category: 'DATA ANALYTICS · SQL',
    question: 'How do room type, neighbourhood, host status, ratings, and availability relate to listing prices?',
    focus: '30,922 Bangkok listings · September 2026 snapshot',
    description: 'A PostgreSQL analysis of Inside Airbnb listing data for Bangkok. The project preserves the raw import, documents cleaning decisions in a log, and uses an analysis view to answer market questions without silently dropping records.',
    tags: ['PostgreSQL', 'SQL', 'Data Cleaning', 'Market Analysis'],
    method: [
      'Load the raw listings as text, retain an unchanged raw table, and create a separate cleaned table with a cleaning log.',
      'Convert prices to numeric THB values, strip HTML from listing names, and flag stale-scrape rows and prices above 50,000 THB instead of deleting them.',
      'Build an analysis view and query pricing by room type and neighbourhood, superhost comparisons, rating bands, host concentration, and availability.'
    ],
    outcome: 'The analysis view contains 27,646 priced, current-scrape listings after excluding flagged outliers. Findings include higher median prices and ratings for superhosts, price variation by neighbourhood and room type, and a highly fragmented host market. The project notes that listed nightly prices are not completed booking amounts.',
    stack: 'PostgreSQL and pgAdmin 4 handle loading, cleaning, and analysis. Python with pandas trims the source export to a loadable set of columns.',
    link: 'https://github.com/hrudayeshgharat/Bangkok-Airbnb-Market-Analysis',
    linkLabel: 'View SQL project on GitHub',
    color: 'from-rose-500 to-orange-500',
    imageFolder: 'Bangkok-Airbnb-Market-Analysis'
  }
];


