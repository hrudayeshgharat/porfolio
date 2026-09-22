# Data Analyst portfolio

The portfolio currently includes only Superstore Dashboard. The PBIX contains Overview, Product, and Customers report pages. Project descriptions are based on its report definition, not invented sales totals or business impact.

## Add a project
Edit data/projects.ts and append one Project object with a unique id and slug. Its content, thumbnail, gallery, link, and case study stay together in that one entry. The project count and cards update automatically. The grid uses auto-fit columns; a single project receives a wide layout on desktop, and all cards stack on small screens. No per-card CSS or matching second data array is needed.

## Automatic project images
Create a folder under public/projects with the exact project title (including capitalization).
Example for title "Superstore Dashboard":

public/projects/Superstore Dashboard/01-overview.png
public/projects/Superstore Dashboard/02-products.png
public/projects/Superstore Dashboard/03-customers.png

No images array is required. The first image becomes the card cover; all images appear in the gallery. Files sort naturally by name, so 2 appears before 10. Supported types: PNG, JPG, JPEG, WEBP, GIF, AVIF, SVG (case-insensitive). Subfolders, hidden files, and other file types are ignored. Image captions come from filenames, with numeric prefixes removed. Optional imageFolder overrides the title-based folder name.

If the folder has no supported images, an optional images array is used as a fallback. Without either, a coming-soon panel is displayed. One-image galleries disable previous/next buttons.

Refresh the page after adding files during development. For Vercel or another deployed site, commit/upload the images and rebuild/redeploy: a deployed site cannot see new files on your computer.

Folder scanning lives in lib/project-images.ts. app/page.tsx resolves the files on the server and components/Portfolio.tsx handles interactions.

## Superstore report
public/projects/Superstore-Dashboard.pbix is a copy of the supplied file and is linked for download. The three SVG images show layouts derived from the report definition. They are labeled diagrams and contain no rendered data values. Replace their images entries with real screenshots when available; the original PBIX is unchanged.

## Run
Use Node.js 20.9 or newer. Run npm ci, then npm run dev. For production run npm run build and npm start. This local workspace was validated with npm run build -- --webpack because its dependencies are linked to the uploaded archive. Normal installs can use the original scripts.

## Optional assistant
Set GEMINI_API_KEY on the server in .env.local or your hosting settings. No credentials are included. The assistant reads the same project data as the cards. Live Gemini responses are not validated without a key.

This source copy has not been deployed to the live Vercel site. The resume file and educational credentials are preserved.
