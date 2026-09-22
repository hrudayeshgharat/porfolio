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
  }
];
