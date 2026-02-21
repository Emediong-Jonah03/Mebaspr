import type { OpportunityType } from '../../types'

interface BadgeProps {
  type: OpportunityType | string
}

const typeConfig: Record<string, { label: string; icon: string }> = {
  scholarship: { label: 'Scholarship', icon: 'school' },
  internship: { label: 'Internship', icon: 'work_history' },
  fellowship: { label: 'Fellowship', icon: 'emoji_events' },
  association: { label: 'Association', icon: 'groups' },
  job: { label: 'Job', icon: 'business_center' },
}

export default function Badge({ type }: BadgeProps) {
  const config = typeConfig[type] ?? { label: type, icon: 'label' }

  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-black tracking-widest text-primary uppercase">
      <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
        {config.icon}
      </span>
      {config.label}
    </span>
  )
}
