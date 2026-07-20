# Sentinel Infrastructure Solutions Website v5 — Master Logo Fix

This release corrects the logo problems reported in the Cloudflare Pages preview.

## What changed

- The hero/about shield is extracted directly from the large approved primary logo on the brand board.
- The entire outer silver shield contour is present and is not clipped.
- The surrounding board background is truly transparent.
- The header and footer use the clean isolated horizontal logos.
- Dark rectangles were removed from the header, footer, hero, and about graphics.
- No logo is enlarged beyond its native source dimensions in the browser.
- Glow filters were removed from the raster artwork so the edges stay crisp.
- Every image has a new `v5` filename to bypass older Cloudflare and browser caches.
- All older temporary and recreated logo files were removed.

## Upload to GitHub

1. Extract the ZIP.
2. Open `SentinelInfraSolutions/website`.
3. Select **Add file → Upload files**.
4. Upload every file from inside this package.
5. Allow GitHub to replace existing files.
6. Commit with: `Install final master logo assets`
7. Wait for the Cloudflare Pages deployment to finish.
8. Open the newest deployment URL.
9. Press **Ctrl + Shift + R** once.

Keep using the `.pages.dev` preview until all pages have been approved.
