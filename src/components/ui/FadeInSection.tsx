import { useFadeIn } from '../../hooks/useFadeIn'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4
}

export default function FadeInSection({ children, className = '', delay }: FadeInSectionProps) {
  const ref = useFadeIn()

  return (
    <div
      ref={ref}
      className={`fade-in-section ${delay ? `delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  )
}
