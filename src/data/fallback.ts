import type { Opportunity, Article, TeamMember, Foundation } from '../types'

export const fallbackOpportunities: Opportunity[] = [
  {
    _id: '1',
    title: 'Global PR Excellence Award',
    type: 'scholarship',
    description:
      'Full funding for postgraduate research in international communication management for exceptional PR practitioners.',
    deadline: 'OCT 2025',
    location: 'Global',
    link: '#',
  },
  {
    _id: '2',
    title: 'Corporate Media Relations Internship',
    type: 'internship',
    description:
      'Six-month immersion program at leading Fortune 500 tech firms in San Francisco, California.',
    deadline: 'NOV 2025',
    location: 'San Francisco, USA',
    link: '#',
  },
  {
    _id: '3',
    title: 'Executive Leadership Hub Fellowship',
    type: 'fellowship',
    description:
      'Exclusive fellowship for mid-career communications directors focusing on ethical leadership.',
    deadline: 'DEC 2025',
    location: 'Remote / Austin',
    link: '#',
  },
  {
    _id: '4',
    title: 'PRSA International Membership',
    type: 'association',
    description:
      "Join the world's largest public relations professional association with access to global networking events.",
    deadline: 'Rolling',
    location: 'Global',
    link: '#',
  },
  {
    _id: '5',
    title: 'UN Communications Fellowship',
    type: 'fellowship',
    description:
      'A prestigious fellowship with the United Nations communications division based in Geneva, Switzerland.',
    deadline: 'JAN 2026',
    location: 'Geneva, Switzerland',
    link: '#',
  },
  {
    _id: '6',
    title: 'Reuters Africa PR Scholarship',
    type: 'scholarship',
    description:
      'Fully funded scholarship supporting African PR professionals in international media and communications.',
    deadline: 'FEB 2026',
    location: 'Nairobi, Kenya',
    link: '#',
  },
]

export const fallbackArticles: Article[] = [
  {
    _id: 'a1',
    title: 'Navigating Global Brand Sentiment in 2025',
    excerpt:
      'How top-tier agencies managed the shift from digital exposure to meaningful engagement during international shifts.',
    category: 'Crisis Management',
    date: 'Jan 15, 2025',
    author: 'Marcus Thorne',
    slug: 'navigating-global-brand-sentiment',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
  },
  {
    _id: 'a2',
    title: 'The Future of AI in Digital PR',
    excerpt:
      'Exploring the ethical implications of automated content generation in media relations.',
    category: 'Technology',
    date: 'Jan 10, 2025',
    author: 'Sarah Chen',
    slug: 'future-of-ai-in-digital-pr',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80',
  },
  {
    _id: 'a3',
    title: 'Building Media Trust in Fragmented Markets',
    excerpt:
      'A longitudinal study on press relations across emerging economic regions.',
    category: 'Media Strategy',
    date: 'Dec 28, 2024',
    author: 'Elena Rodriguez',
    slug: 'building-media-trust',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
  },
  {
    _id: 'a4',
    title: 'Metrics That Matter Beyond Impressions',
    excerpt:
      'Redefining PR success through behavioural analytics and brand equity measurement.',
    category: 'Analytics',
    date: 'Dec 20, 2024',
    author: 'David Sterling',
    slug: 'metrics-beyond-impressions',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80',
  },
]

export const fallbackTeam: TeamMember[] = [
  {
    _id: 't1',
    name: 'David Sterling',
    role: 'Managing Director',
    bio: 'Former VP of Communications at global Fortune 100 firms with 20 years of PR excellence.',
    email: 'david@prhub.org',
  },
  {
    _id: 't2',
    name: 'Sarah Chen',
    role: 'Director of Partnerships',
    bio: 'Specialist in building institutional partnerships across Asia-Pacific communications markets.',
    email: 'sarah@prhub.org',
  },
  {
    _id: 't3',
    name: 'Marcus Thorne',
    role: 'Editorial Lead',
    bio: 'Award-winning journalist and communications strategist with deep roots in investigative PR.',
    email: 'marcus@prhub.org',
  },
  {
    _id: 't4',
    name: 'Elena Rodriguez',
    role: 'Global Relations',
    bio: 'Multilingual communications expert with a network spanning 45 countries across 6 continents.',
    email: 'elena@prhub.org',
  },
]

export const fallbackFoundation: Foundation = {
  _id: 'f1',
  headline: 'Empowering the Next Generation of PR Leaders.',
  body: "PR Hub was established to bridge the gap between talented communications professionals and the world's most prestigious opportunities. We believe that transparency and access are the cornerstones of a thriving global media landscape.",
  stats: [
    { value: '12k+', label: 'Active Professionals' },
    { value: '450+', label: 'Partner Agencies' },
    { value: '80+', label: 'Countries Reached' },
    { value: '6yrs', label: 'Of Excellence' },
  ],
  values: [
    {
      icon: 'verified',
      title: 'Verified Excellence',
      description:
        'Every opportunity on our platform is vetted for legitimacy, transparency, and professional standards.',
    },
    {
      icon: 'public',
      title: 'Global Reach',
      description:
        'We partner with agencies and institutions across 80 countries to provide wide international perspective.',
    },
  ],
}