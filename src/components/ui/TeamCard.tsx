import type { TeamMember } from '../../types'
import { urlFor } from '../../lib/sanityClient'

const placeholderPhotos = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
]

interface TeamCardProps {
  member: TeamMember
  index?: number
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  // Priority: Sanity uploaded photo → placeholder by index
  const photo = member.photo
    ? urlFor(member.photo).width(400).url()
    : placeholderPhotos[index % placeholderPhotos.length]

  return (
    <div className="group text-center">
      {/* Photo */}
      <div className="relative mb-6 inline-block">
        <div className="w-48 h-48 overflow-hidden border-2 border-primary/20 p-1 mx-auto">
          <img
            src={photo}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        {/* Red accent corner */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-deep-black mb-1">{member.name}</h3>
      <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-[200px] mx-auto">{member.bio}</p>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-2 bg-neutral-gray hover:bg-primary hover:text-white text-deep-black transition-colors"
            title="Email"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>alternate_email</span>
          </a>
        )}
        <button
          className="p-2 bg-neutral-gray hover:bg-primary hover:text-white text-deep-black transition-colors"
          title="Share"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>share</span>
        </button>
      </div>
    </div>
  )
}