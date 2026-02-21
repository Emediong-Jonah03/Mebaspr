# PR Hub — Public Relations Opportunity Platform

A modern, elegant PR opportunity hub built with **Vite + React + TypeScript + Tailwind CSS + Sanity CMS**.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Sanity CMS

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project and note your **Project ID**
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your Sanity credentials in `.env`:
   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### 4. Set Up Sanity Studio (Content Dashboard)

```bash
cd sanity
npm install
npx sanity dev
```

Visit `http://localhost:3333` to access your content dashboard where you can add opportunities, articles, and team members without touching code.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── ui/             # Reusable primitives (Card, Badge, SectionHeader, etc.)
│   └── sections/       # Page sections (Hero, Opportunities, CaseStudies, etc.)
├── hooks/              # useSanity, useFadeIn
├── lib/                # Sanity client config
├── types/              # All TypeScript interfaces
├── data/               # Fallback static data
└── styles/             # Global CSS + Tailwind base
sanity/
├── schemas/            # Sanity content schemas
└── sanity.config.ts    # Studio configuration
```

## 🎨 Brand Colors

| Color        | Hex       |
|--------------|-----------|
| Vivid Red    | `#D91A1E` |
| Deep Maroon  | `#8B0D0E` |
| Pure Black   | `#000000` |
| Gray         | `#E6E7E8` |
| Pure White   | `#FFFFFF` |

## 🔌 Connecting Sanity Data

Each section currently uses fallback data from `src/data/fallback.ts`. To connect live Sanity data, use the `useSanity` hook:

```tsx
import { useSanity } from '../../hooks/useSanity'
import type { Opportunity } from '../../types'

const { data, loading, error } = useSanity<Opportunity[]>(
  `*[_type == "opportunity"] | order(_createdAt desc)`
)
```

## 🏗 Build for Production

```bash
npm run build
```
# Mebaspr
