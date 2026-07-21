# Sentinel Infrastructure Solutions Website v13 — Microsoft Bookings Integration

This version connects every **Request consultation** and **Request a consultation**
button to the public Microsoft Bookings page.

## Booking link

https://outlook.office.com/book/SentinelInfrastructureSolutions2@sentinelinfrasolutions.com/?ismsaljsauthenabled

## Changes

- Updated all consultation CTA buttons across the website.
- Booking opens in a new browser tab.
- Added safe external-link attributes.
- Added an accessible label explaining that Microsoft Bookings opens in a new tab.
- Left the Contact navigation and contact form unchanged.

## Upload

1. Extract this ZIP.
2. Open the GitHub `website` repository.
3. Choose **Add file → Upload files**.
4. Upload every file from the extracted folder.
5. Commit with: `Connect consultation buttons to Microsoft Bookings`
6. Wait for Cloudflare Pages to deploy.
7. Open the newest `.pages.dev` preview and test the consultation button in a private browser window.

## Test before connecting the domain

- Confirm the Bookings page opens.
- Confirm 9:00 AM–3:00 PM displays in Eastern Time.
- Complete one test booking with a personal email address.
- Verify the confirmation email, Teams link, Outlook calendar entry, intake answers, reschedule link, and cancellation link.
