# Sentinel Infrastructure Solutions Website v2

Expanded static website for Sentinel Infrastructure Solutions.

## Included pages

- `index.html` — expanded homepage
- `services.html` — detailed services
- `about.html` — company story, mission, and values
- `contact.html` — consultation form that prepares an email
- `privacy.html` — general privacy notice
- `terms.html` — general website terms
- `404.html` — custom error page

## Brand assets

- `sentinel-mark.svg` — shield/city/circuit mark
- `sentinel-logo-horizontal.svg` — horizontal logo with approved company name and tagline
- `favicon.svg` — browser icon
- `social-preview.png` — sharing preview image

The SVG artwork is a clean web recreation aligned with the approved brand system:
deep black, dark gray, Sentinel blue, bright blue, white, Raleway, Open Sans,
the shield/city/circuit concept, and “Secure. Monitor. Support.”

It is not the original standalone master-vector logo from the brand-kit source image.
When the original transparent SVG/PNG master is available, it can replace these files without
changing the website structure.

## Upload to GitHub

1. Extract the ZIP.
2. Open the `SentinelInfraSolutions/website` GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload every file from the extracted folder to the repository root.
5. Commit with: `Expand website to version 2`
6. Cloudflare Pages will deploy the commit automatically.

All assets are kept in the repository root because GitHub's browser upload previously flattened
the assets directory.

## Cloudflare Pages

- Framework preset: None
- Build command: blank
- Build output directory: `/`
- Production branch: `main`

## Before public launch

- Review service descriptions and legal drafts.
- Add a business phone only when ready to publish it.
- Replace the recreated SVG with the original master logo when available.
- Connect the custom domain after reviewing the `.pages.dev` preview.
