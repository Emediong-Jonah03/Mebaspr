import { fallbackTeam } from '../data/fallback'
import TeamCard from '../components/ui/TeamCard'
import SectionHeader from '../components/ui/SectionHeader'
import FadeInSection from '../components/ui/FadeInSection'
import { useSanity } from '../hooks/useSanity'
import type { TeamMember } from '../types'

export default function OurTeam() {
  const { data, loading } = useSanity<TeamMember[]>(
    `*[_type == "teamMember"] | order(_createdAt desc)`
  )
  const team = data ?? fallbackTeam

  return (
    <section id="team" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection className="text-center mb-16">
          <SectionHeader
            eyebrow="Board of Directors"
            title="Our Executive Team"
            subtitle="Experienced communications leaders driving the future of PR globally."
            centered
          />
        </FadeInSection>

        {/* Team Grid */}
        {loading ? (
          <div className="flex justify-center py-24">
            <span className="material-symbols-outlined animate-spin text-primary text-4xl">
              progress_activity
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <FadeInSection key={member._id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <TeamCard member={member} index={i} />
              </FadeInSection>
            ))}
          </div>
        )}

        {/* Join CTA */}
        <FadeInSection className="mt-20 border border-neutral-gray bg-white p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-deep-black mb-2">Join Our Network</h3>
            <p className="text-slate-500 text-sm">
              Become part of a global community of PR leaders and practitioners.
            </p>
          </div>
          <button className="flex-shrink-0 bg-primary hover:bg-primary-dark text-white px-10 py-4 font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2">
            Get Involved
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </button>
        </FadeInSection>
      </div>
    </section>
  )
}