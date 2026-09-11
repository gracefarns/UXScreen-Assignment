# Gapfill

A static, three-screen prototype: pick your free time, see today's classes, get a plan for your gap.

## Files

- `index.html` – Screen 1, set how much time you have
- `classes.html` – Screen 2, today's classes and to-dos
- `plan.html` – Screen 3, the plan for your gap
- `styles.css` – shared styles
- `script.js` – time stepper, progress bar, task toggling

## Deploy to Vercel

**Option A — Vercel dashboard (no CLI needed)**
1. Go to vercel.com and click "Add New… → Project"
2. Choose "Deploy without Git" / drag-and-drop, then drag this whole folder in
3. Framework preset: choose "Other" (it's a plain static site, no build step needed)
4. Click Deploy

**Option B — Vercel CLI**
```
npm i -g vercel
cd gapfill-site
vercel
```
Follow the prompts (link or create a project, accept the defaults). It will deploy instantly since there's no build step.

**Option C — GitHub**
1. Push this folder to a new GitHub repo
2. In Vercel, "Add New… → Project" → import that repo
3. Framework preset: "Other" — leave build command blank, output directory blank
4. Deploy
