<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/5098319b-a7d4-4711-bc66-737e7f154161

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Firebase Hosting (novahires.online)

The site is served by Firebase Hosting from the Vite build output (`dist/`).

**Prerequisites:** [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`) and access to the `novahires-ai-2026` Firebase project.

1. Build the site:
   `npm run build`
2. Log in (first time only):
   `firebase login`
3. Deploy hosting:
   `firebase deploy --only hosting`

The project is preconfigured via `firebase.json` and `.firebaserc`:

- `public` is set to `dist` (Vite's build output)
- SPA rewrites send all unmatched paths to `/index.html` so `react-router-dom` routes like `/dashboard`, `/login`, etc. resolve correctly
- Static assets get long-lived cache headers; `index.html` is never cached

**Custom domain:** `novahires.online` is connected in the Firebase Console under Hosting -> Custom Domains. If the site shows "Site not found", it means no deploy has landed yet - run `npm run build && firebase deploy --only hosting`.
