interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
      <h2 className="text-4xl font-black text-deep-black mb-4 tracking-tight leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-slate-600 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
