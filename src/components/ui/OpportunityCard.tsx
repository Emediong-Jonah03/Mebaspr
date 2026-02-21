import type { Opportunity } from '../../types'
import Badge from './Badge'
import { urlFor } from '../../lib/sanityClient'

// Curated Unsplash images per opportunity type (used as fallback)
const typeImages: Record<string, string> = {
  scholarship: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  internship: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  fellowship: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  association: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
  job: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
}

interface OpportunityCardProps {
  opportunity: Opportunity
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  // Priority: Sanity uploaded image → type-based fallback image
  const imgSrc = opportunity.image
    ? urlFor(opportunity.image).width(600).url()
    : typeImages[opportunity.type] ?? typeImages['job']

  return (
    <article className="group bg-off-white border border-neutral-gray/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={imgSrc}
          alt={opportunity.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-6 pt-5 pb-7">
        <Badge type={opportunity.type} />

        <h3 className="text-xl font-bold text-deep-black mt-2 mb-3 leading-snug group-hover:text-primary transition-colors">
          {opportunity.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-6">
          {opportunity.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5 border-t border-neutral-gray">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-tight">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
              {opportunity.deadline}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
              {opportunity.location}
            </span>
          </div>
          <a
            href={opportunity.link}
            className="text-primary font-bold text-xs hover:underline uppercase tracking-widest flex items-center gap-1 group/link"
          >
            Details
            <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform" style={{ fontSize: '14px' }}>
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}