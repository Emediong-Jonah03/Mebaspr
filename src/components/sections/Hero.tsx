export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="relative w-full min-h-[88vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/92 via-deep-black/65 to-deep-black/10 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
          alt="Modern corporate PR office environment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-black tracking-[0.2em] uppercase mb-8">
            Global Professional Network
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Advancing <span className="text-primary">PR</span>{' '}
            Careers Worldwide.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-lg">
            Your exclusive gateway to verified international scholarships, corporate
            internships, and executive fellowships in public relations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#opportunities')}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-10 py-4 font-black text-sm uppercase tracking-widest transition-all group"
            >
              Explore Opportunities
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={() => handleScroll('#about')}
              className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-all"
            >
              Learn More
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex gap-10 mt-16 pt-10 border-t border-white/15">
            {[
              { value: '12k+', label: 'Professionals' },
              { value: '450+', label: 'Partner Agencies' },
              { value: '80+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
