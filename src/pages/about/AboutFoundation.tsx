import { fallbackFoundation } from '../../data/fallback'
import FadeInSection from '../../components/ui/FadeInSection'

export default function AboutFoundation() {
  const foundation = fallbackFoundation

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <FadeInSection delay={1}>
            <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-6">
              Our Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-deep-black leading-tight mb-8 tracking-tight">
              {foundation.headline}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-10">
              {foundation.body}
            </p>

            {/* Values */}
            <div className="flex flex-col gap-6">
              {foundation.values.map((value) => (
                <div key={value.title} className="flex gap-4 items-start">
                  <div className="bg-primary p-2 flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>
                      {value.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-black mb-1">{value.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                  </div>

                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Right — Stats Grid */}
          <FadeInSection delay={2}>
            <div className="grid grid-cols-2 gap-4">
              {foundation.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-8 flex flex-col justify-center ${i === 0
                    ? 'bg-primary text-white'
                    : i === 1
                      ? 'bg-deep-black text-white'
                      : i === 2
                        ? 'bg-neutral-gray text-deep-black'
                        : 'bg-primary-dark text-white'
                    }`}
                >
                  <p className="text-4xl font-black mb-2">{stat.value}</p>
                  <p
                    className={`text-xs font-bold uppercase tracking-widest ${i === 2 ? 'text-slate-600' : 'text-white/70'
                      }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}

              {/* Image tile */}
              <div className="col-span-2 h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="PR team collaboration"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
