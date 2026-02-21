// ─── Opportunity Types ───────────────────────────────────────────────────────

export type OpportunityType =
  | 'scholarship'
  | 'internship'
  | 'fellowship'
  | 'association'
  | 'job'

export interface Opportunity {
  _id: string
  title: string
  type: OpportunityType
  description: string
  deadline: string
  location: string
  link: string
  image?: SanityImage
}

// ─── Article / Case Study ────────────────────────────────────────────────────

export interface Article {
  _id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  slug: string
  thumbnail?: SanityImage
  imageUrl?: string
  featured: boolean
}

// ─── Team Member ─────────────────────────────────────────────────────────────

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  photo?: SanityImage
}

// ─── Foundation / About ──────────────────────────────────────────────────────

export interface FoundationStat {
  label: string
  value: string
}

export interface Foundation {
  _id: string
  headline: string
  body: string
  stats: FoundationStat[]
  values: FoundationValue[]
}

export interface FoundationValue {
  icon: string
  title: string
  description: string
}

// ─── Sanity Image ────────────────────────────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Hook Return Types ───────────────────────────────────────────────────────

export interface UseSanityResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}