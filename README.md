# Command Site (roleplay)

A Next.js + Tailwind starter for a fictional special-operations command
website: home, unit structure, chain of command, and gallery pages.

Everything here is original placeholder content — no real unit's name,
insignia, or text is used. Rebrand it by editing one file:

- `lib/config.ts` — unit name, motto, tagline, home station, etc.
- `app/structure/page.tsx` — the org chart data
- `app/chain-of-command/page.tsx` — the roster
- `app/gallery/page.tsx` — swap placeholder tiles for real images once you
  drop them in `public/gallery`

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Upload to GitHub (no git or GitHub app needed)

1. Unzip `command-site.zip` on your computer first — GitHub's uploader does
   **not** extract zip files, it just uploads them as a single `.zip`, which
   Vercel can't build from.
2. Go to https://github.com/new, name the repo (e.g. `command-site`), leave
   it empty (don't check "Add a README"), and click **Create repository**.
3. On the new repo's page, click **uploading an existing file** (the link in
   the "Quick setup" box).
4. Open the unzipped `command-site` folder on your computer and drag the
   contents (not the outer folder itself) into the browser upload area —
   modern browsers/GitHub preserve the subfolders (`app/`, `components/`,
   `lib/`, `public/`) automatically.
5. Some file managers hide dotfiles like `.gitignore`, so it may not appear
   in the drag selection — that's fine, it's optional for deployment. If you
   want it included, use GitHub's **Add file → Create new file**, name it
   `.gitignore`, and paste in the contents from this project.
6. Scroll down and click **Commit changes**.

## Deploy on Vercel

1. Go to https://vercel.com/new
2. Click **Import** next to the GitHub repo you just created (you may need
   to click "Add GitHub Account" and authorize Vercel the first time — this
   is just Vercel asking GitHub for permission, no separate app install on
   your end)
3. Leave the default settings (Vercel auto-detects Next.js) and click Deploy
4. Any future edits you upload through the GitHub website will redeploy
   the site automatically

## Adding real images

Drop image files into `public/gallery/`, then in
`app/gallery/page.tsx` replace the `<Tile />` placeholders with
`next/image`, e.g.:

```tsx
import Image from "next/image";

<Image
  src="/gallery/training-01.jpg"
  alt="Training exercise"
  width={800}
  height={600}
  className="object-cover w-full h-full"
/>;
```
