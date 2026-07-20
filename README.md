# Sentinel Infrastructure Solutions Website v7

This release fixes the visible dark rectangle around the shield.

## What was wrong

The earlier shield file had an opaque black background. Because the hero section uses a subtly
different gradient, the image appeared as a dark square and made the shield look washed out.

## What changed

- The complete shield was extracted directly from the large approved primary logo.
- The entire outer silver contour is retained.
- The area outside the shield is now genuinely transparent.
- Decorative circuit lines outside the shield were removed.
- Header and footer company names remain crisp live text.
- New v7 filenames prevent Cloudflare or the browser from loading an older cached image.
- The shield is displayed below its native image size.

## Upload

1. Extract the ZIP.
2. Upload every file to the root of the GitHub `website` repository.
3. Commit with: `Install transparent complete shield`
4. Wait for the latest Cloudflare deployment.
5. Open the newest deployment URL and press Ctrl + Shift + R once.
