import { useFadeIn } from "../../hooks/useFadeIn"

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
    {
        id: 'media-strategy',
        eyebrow: '01 — Media Strategy',
        title: 'Media Strategy',
        tagline: 'Think about this like you are planning your dream party.',
        description:
            'Who do you want to invite, where do you want to host your guests, what\'s on the menu and how do you know they had a great time? We do not just take your campaign to the media. We are strategic in our decision on how to reach your target audience to achieve maximum results.',
        icon: 'spoke',
        accentIcon: 'trending_up',
        offerings: [
            'Audience research and profiling',
            'Channel selection & planning',
            'Content strategy & creation guidelines',
            'Budget allocation',
            'Performance tracking & analysis',
            'Campaign optimization',
        ],
        outcomes: [
            'Improved brand perception',
            'Increased brand awareness and interest in product offering',
            'Effective targeting and ROI on media spend',
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        bgColor: 'bg-white',
        accentSide: 'left' as const,
        brand: ['SyncedCancer Initiative'],
    },
    {
        id: 'corporate-events',
        eyebrow: '02 — Corporate Event Curation',
        title: 'Corporate Event Curation',
        tagline: 'Experiences that make stakeholders feel your brand.',
        description:
            'We put together events that are not focused on your agenda alone but creating experiences for stakeholders to know and feel your brand — vital in generating interest in your services. We offer this service for both physical and virtual events.',
        icon: 'celebration',
        accentIcon: 'groups',
        offerings: [
            'Concept development',
            'Brand alignment and messaging for marketing communications',
            'Guest outreach',
            'Vendor outreach',
            'Budget management and cost optimization',
            'Media outreach',
            'Attendee experience & design',
            'Event evaluation and reporting',
        ],
        outcomes: [
            'Enhanced brand visibility & reputation',
            'Thought-leadership around your brand',
            'Lead generation',
            'Improved brand industry network',
            'Improved communication with stakeholders',
        ],
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        bgColor: 'bg-off-white',
        accentSide: 'right' as const,
        brand: ['FemNest', 'CoWASH'],
    },
    {
        id: "digital-media-management",
        eyebrow: '03 — Digital Media Management',
        title: 'Digital Media Management',
        tagline: 'Ensures your communications on social media.',
        description:
            "After the pandemic year, many businesses increased their reliance on the digital media to build their brand's perception, foster a positive reputation and stay top of mind. Our digital media management service ensures your communications on social media, website and email channels are consistent, up-to-date, clear and reflect your core values. What you get:",
        accentIcon: 'chat_bubble',
        offerings: [
            'Online reputation management',
            'Content strategy development',
            'Brand storytelling',
            'Social media management (ideation, creation, posting and engagement)',
            'On-text search engine optimization',
            'Analytics and performance tracking',
        ],
        outcomes: [
            'Competitive edge with industry players in the digital media',
            'Increased visibility & reach',
            'Lead generation & conversion',
            'Improved understanding of audience behaviour',
        ],
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        bgColor: 'bg-white',
        accentSide: 'left' as const,
        brand: ['Amdari'],
    },
    {
        id: "executive-communication",
        eyebrow: '04 — Executive Communication',
        title: 'Executive Communication',
        tagline: 'Thought-leadership around your brand.',
        description:
            "Top global businesses are driven by the influence and perception of the business leaders and their personalities. We work with executive leaders to create thought-leadership around their personal brands and become a major influencer marketer for their brands. How we do this:",
        accentIcon: 'communication',
        offerings: [
            'Brand strategy',
            'Brand storytelling',
            'Media relations and press outreach',
            'Platform-specific management for executives',
            'Crisis communication strategy development',
        ],
        outcomes: [
            'Enhanced reputation and credibility of the executive company',
            'Increased visibility and positive media coverage',
            'Improved stakeholder trust and engagement',
            'Effective crisis management and reputation management',
            'Positioning as an industry thought-leader',
            'Influenced business outcomes',
        ],
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        bgColor: 'bg-off-white',
        accentSide: 'right' as const,
        href: 'https://thetobilobadorcas.com',
        brand: ['Tobiloba Dorcas'],
    },

]

// ─── FadeIn Wrapper ──────────────────────────────────────────────────────────

function AnimatedBlock({
    children,
    className = '',
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useFadeIn<HTMLLIElement>()
    return (
        <li
            ref={ref}
            className={`fade-in-section ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </li>
    )
}

// ─── Offering List Item ──────────────────────────────────────────────────────

function OfferingItem({ text, index }: { text: string; index: number }) {
    const ref = useFadeIn<HTMLLIElement>()
    return (
        <li
            ref={ref}
            className="fade-in-section flex items-start gap-3 py-3 border-b border-neutral-gray last:border-0"
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <span className="material-symbols-outlined text-primary mt-0.5 flex-shrink-0" style={{ fontSize: '16px' }}>
                check_small
            </span>
            <span className="text-slate-600 text-sm leading-relaxed">{text}</span>
        </li>
    )
}

// ─── Outcome Item ────────────────────────────────────────────────────────────

function OutcomeItem({ text, index }: { text: string; index: number }) {
    const ref = useFadeIn()
    return (
        <div
            ref={ref}
            className="fade-in-section flex items-center gap-3"
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
            <p className="text-sm text-white/80 leading-relaxed">{text}</p>
        </div>
    )
}

// ─── Service Block ───────────────────────────────────────────────────────────

function ServiceBlock({ service }: { service: typeof services[0] }) {
    const isRight = service.accentSide === 'right'

    return (
        <div id={service.id} className={`${service.bgColor} py-24 overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Eyebrow */}
                <AnimatedBlock className="mb-16">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-neutral-gray max-w-[60px]" />
                        <span className="text-primary font-black text-xs tracking-[0.3em] uppercase">
                            {service.eyebrow}
                        </span>
                    </div>
                </AnimatedBlock>

                {/* Main grid — image and intro */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 ${isRight ? '' : ''}`}>

                    {/* Text side */}
                    <div className={isRight ? 'lg:order-2' : ''}>
                        <AnimatedBlock delay={100}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-primary p-2">
                                    <span className="material-symbols-outlined text-white" style={{ fontSize: '22px' }}>
                                        {service.icon}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-deep-black tracking-tight leading-tight">
                                    {service.title}
                                </h2>
                            </div>
                        </AnimatedBlock>

                        <AnimatedBlock delay={200}>
                            <p className="text-primary font-bold text-sm italic mb-4 leading-relaxed">
                                "{service.tagline}"
                            </p>
                            <p className="text-slate-600 leading-relaxed text-base mb-8">
                                {service.description}
                            </p>
                        </AnimatedBlock>

                        {/* Stat accent */}
                        <AnimatedBlock delay={300}>
                            <div className="flex gap-6">
                                <div className="border-l-2 border-primary pl-4">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Approach</p>
                                    <p className="text-sm font-bold text-deep-black">Data-driven & Strategic</p>
                                </div>
                                <div className="border-l-2 border-neutral-gray pl-4">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Delivery</p>
                                    <p className="text-sm font-bold text-deep-black">End-to-End</p>
                                </div>
                                <div className="border-l-2 border-neutral-gray pl-4">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Brands we have worked with</p>
                                    <p className="text-sm font-bold text-deep-black">
                                        <a href={service.href} className={`${service.href ? 'underline hover:underline-offset-4 text-primary' : ''}`} target="_blank" rel="noopener noreferrer">{service.brand.join(', ')}
                                            {service.href && <span className="material-symbols-outlined text-primary ml-2">arrow_outward</span>}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </AnimatedBlock>
                    </div>

                    {/* Image side */}
                    <div className={`relative ${isRight ? 'lg:order-1' : ''}`}>
                        <AnimatedBlock delay={150}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[420px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Red accent block */}
                                <div className={`absolute bottom-0 ${isRight ? 'left-0' : 'right-0'} w-16 h-16 bg-primary`} />
                                {/* Icon overlay */}
                                <div className={`absolute top-6 ${isRight ? 'right-6' : 'left-6'} bg-deep-black/80 p-3`}>
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>
                                        {service.accentIcon}
                                    </span>
                                </div>
                            </div>
                        </AnimatedBlock>
                    </div>
                </div>

                {/* Bottom grid — offerings and outcomes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* What we handle */}
                    <AnimatedBlock delay={200}>
                        <div className="border border-neutral-gray p-8 bg-white">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>
                                    task_alt
                                </span>
                                <h3 className="font-black text-deep-black text-sm uppercase tracking-widest">
                                    What We Handle
                                </h3>
                            </div>
                            <ul className="divide-y divide-neutral-gray">
                                {service.offerings.map((item, i) => (
                                    <OfferingItem key={item} text={item} index={i} />
                                ))}
                            </ul>
                        </div>
                    </AnimatedBlock>

                    {/* Expected outcomes */}
                    <AnimatedBlock delay={300}>
                        <div className="bg-deep-black p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>
                                        flag
                                    </span>
                                    <h3 className="font-black text-white text-sm uppercase tracking-widest">
                                        Expected Outcomes
                                    </h3>
                                </div>
                                <p className="text-slate-500 text-xs mb-8 leading-relaxed">
                                    This varies based on unique project objectives and goals but cuts across the following:
                                </p>
                                <div className="flex flex-col gap-5">
                                    {service.outcomes.map((item, i) => (
                                        <OutcomeItem key={item} text={item} index={i} />
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 font-black text-xs uppercase tracking-widest transition-all group"
                                >
                                    Get Started
                                    <span
                                        className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                                        style={{ fontSize: '16px' }}
                                    >
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>
                    </AnimatedBlock>
                </div>
            </div>
        </div>
    )
}

// ─── Services Hero ───────────────────────────────────────────────────────────

function ServicesHero() {
    const ref = useFadeIn()
    return (
        <div className="bg-deep-black py-24 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, #D91A1E, #D91A1E 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #D91A1E, #D91A1E 1px, transparent 1px, transparent 60px)',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={ref} className="fade-in-section max-w-3xl">
                    <span className="inline-block text-primary font-black text-xs tracking-[0.3em] uppercase mb-6">
                        Our Services
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
                        What We <span className="text-primary">Do.</span>
                    </h1>
                    <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl">
                        Strategic communications services designed to position your brand where it matters most.
                    </p>

                    {/* Service quick links */}
                    <div className="flex flex-wrap gap-3">
                        {services.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="flex items-center gap-2 border border-white/20 hover:border-primary hover:text-primary text-white/70 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all"
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{s.icon}</span>
                                {s.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function Services() {
    return (
        <main>
            <ServicesHero />
            {services.map((service) => (
                <ServiceBlock key={service.id} service={service} />
            ))}
        </main>
    )
}