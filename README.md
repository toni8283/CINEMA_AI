# CineInsight

Cinema_AI is a small college-level web project where you can search a movie using IMDb ID and get:
- movie details from OMDb
- AI sentiment summary using Gemini
  <img width="3061" height="1432" alt="Screenshot from 2026-03-08 10-35-43" src="https://tgzcaz76hnzdcrrt.public.blob.vercel-storage.com/Screenshot_2026-08-27_06-18-37.png" />


I built this to practice full-stack concepts in Next.js like API routes, client-server data flow, and UI design with Tailwind.
  <img width="1838" height="1386" alt="Screenshot from 2026-03-08 10-36-03" src="https://tgzcaz76hnzdcrrt.public.blob.vercel-storage.com/Screenshot_2026-08-27_06-26-00.png" />




## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- OMDb API (movie data)
- Google Gemini API (sentiment analysis)

## Features
- Search by IMDb ID (example: `tt0133093`)
- Movie details page with poster, plot, cast, rating, etc.
- AI sentiment classification: `positive`, `mixed`, `negative`
- Clean red/black Netflix-inspired UI theme

## Project Structure
```text
src/
  app/
    page.tsx                  # Home/search page
    movie/[id]/page.tsx       # Movie details page
    api/movie/route.ts        # OMDb API route
    api/sentiment/route.ts    # Gemini sentiment API route
  components/
    search/                   # Search bar
    movie/                    # Movie UI sections
    sentiment/                # Sentiment UI components
    ui/                       # Reusable UI components
  lib/
    omdb.ts                   # OMDb fetch logic
    gemini.ts                 # Gemini sentiment logic
    validator.ts              # IMDb ID validation
```

## Setup Instructions
1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` in project root:
```env
OMDB_API_KEY=your_omdb_key
GEMINI_API_KEY=your_gemini_key
```

3. Run development server:
```bash
npm run dev
```

4. Open:
`http://localhost:3000`

## Scripts
- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## How It Works (Simple Flow)
1. User enters IMDb ID on home page.
2. App navigates to `/movie/[id]`.
3. Backend route `/api/movie` fetches movie data from OMDb.
4. Backend route `/api/sentiment` sends title/plot to Gemini.
5. UI renders movie info + AI sentiment panel.

## Notes
- Use valid IMDb format only: `tt` + 7 or 8 digits.
- Keep API keys private (never commit `.env.local`).
- If sentiment is unavailable, check Gemini key/quota and server logs.

