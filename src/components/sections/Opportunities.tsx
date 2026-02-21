import { fallbackOpportunities } from '../../data/fallback'
import OpportunityCard from '../ui/OpportunityCard'
import SectionHeader from '../ui/SectionHeader'
import FadeInSection from '../ui/FadeInSection'
import { useSanity } from '../../hooks/useSanity'
import type { Opportunity, OpportunityType } from '../../types'

const categories: { label: string; type: OpportunityType | 'all'; icon: string }[] = [
  { label: 'All', type: 'all', icon: 'apps' },
  { label: 'Scholarships', type: 'scholarship', icon: 'school' },
  { label: 'Internships', type: 'internship', icon: 'work_history' },
  { label: 'Fellowships', type: 'fellowship', icon: 'emoji_events' },
  { label: 'Associations', type: 'association', icon: 'groups' },
  { label: 'Jobs', type: 'job', icon: 'business_center' },
]

export default function Opportunities() {
  const { data, loading } = useSanity<Opportunity[]>(
    `*[_type == "opportunity"] | order(_createdAt desc)`
  )

  const opportunities = data ?? fallbackOpportunities

  return (
    <section id="opportunities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeInSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="Strategic Growth"
            title="Global Opportunities"
            subtitle="Curated paths for PR professionals at every stage of their career journey."
          />
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.type}
                className="flex items-center gap-1.5 px-3 py-2 border border-neutral-gray text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-24">
            <span className="material-symbols-outlined animate-spin text-primary text-4xl">
              progress_activity
            </span>
          </div>
        )}

        {/* Card Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, i) => (
              <FadeInSection key={opp._id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <OpportunityCard opportunity={opp} />
              </FadeInSection>
            ))}
          </div>
        )}

        {/* View All CTA */}
        <FadeInSection className="text-center mt-16">
          <button className="inline-flex items-center gap-2 border-2 border-deep-black text-deep-black hover:bg-deep-black hover:text-white px-12 py-4 font-black text-xs uppercase tracking-widest transition-all">
            View All Opportunities
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              arrow_forward
            </span>
          </button>
        </FadeInSection>

      </div>
    </section>
  )
}