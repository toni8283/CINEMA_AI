# CineInsight

**Live Demo:** [https://cinema-ai-jxj8.vercel.app/](https://cinema-ai-jxj8.vercel.app/)

Cinema_AI is a small college-level web project where you can search a movie using IMDb ID and get:
- movie details from OMDb
- AI sentiment summary using Gemini

## About

CineInsight is a movie analysis platform that combines OMDb movie data with Google's Gemini AI to provide sentiment analysis. Users can search any movie by IMDb ID and get detailed information along with AI-powered insights about audience reception.

Built as a college project to demonstrate:
- Next.js App Router and API routes
- Server-side rendering and client components
- Third-party API integration
- Modern UI design with Tailwind CSS
- TypeScript for type safety

## Screenshots

### Home Page
<img width="3061" height="1432" alt="CineInsight Home Page" src="https://tgzcaz76hnzdcrrt.public.blob.vercel-storage.com/Screenshot_2026-08-27_06-18-37.png" />

*Search interface with quick movie picks*

### Movie Details Page
<img width="2560" height="1322" alt="CineInsight Movie Details" src="https://tgzcaz76hnzdcrrt.public.blob.vercel-storage.com/Screenshot_2026-08-27_06-26-00.png" />

*Detailed movie information with AI sentiment analysis*

I built this to practice full-stack concepts in Next.js like API routes, client-server data flow, and UI design with Tailwind.

## Try It Now

Visit the live demo and try these IMDb IDs:
- `tt0133093` - The Matrix
- `tt0468569` - The Dark Knight
- `tt1375666` - Inception

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **APIs:** OMDb API (movie data), Google Gemini API (sentiment analysis)
- **Deployment:** Vercel

## Features
- Search by IMDb ID (example: `tt0133093`)
- 18 random movie suggestions on home page
- Movie details with poster, plot, cast, rating
- AI sentiment classification: `positive`, `mixed`, `negative`
- Premium red/black cinematic UI theme
- Fully responsive design
- Real-time loading states
- Input validation for IMDb IDs

## Project Folder Structure

```text
.
├── public/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── movie/
│   │   │   │   └── route.ts          # OMDb API endpoint
│   │   │   └── sentiment/
│   │   │       └── route.ts          # Gemini sentiment API endpoint
│   │   │
│   │   ├── movie/[id]/               # Movie details page
│   │   ├── favicon.ico
│   │   ├── globals.css               # Global styles & theme
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home/search page
│   │
│   ├── components/
│   │   ├── movie/
│   │   │   ├── CastList.tsx          # Cast display component
│   │   │   ├── MovieHero.tsx         # Movie header/poster section
│   │   │   └── PlotSummary.tsx       # Plot display component
│   │   │
│   │   ├── search/
│   │   │   └── SearchBar.tsx         # Search input component
│   │   │
│   │   ├── sentiment/
│   │   │   ├── AIInsightPanel.tsx    # Sentiment analysis display
│   │   │   └── SentimentBadge.tsx    # Sentiment classification badge
│   │   │
│   │   └── ui/
│   │       ├── ErrorCard.tsx         # Error display component
│   │       └── LoadingSpinner.tsx    # Loading indicator
│   │
│   ├── lib/
│   │   ├── gemini.ts                 # Gemini AI logic
│   │   ├── omdb.ts                   # OMDb API logic
│   │   └── validator.ts              # IMDb ID validation
│   │
│   └── types/
│       └── movie.ts                  # TypeScript type definitions
│
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
