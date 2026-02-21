import { fallbackArticles } from '../../data/fallback'
import type { Article } from '../../types'
import ArticleCard from '../ui/ArticleCard'
import SectionHeader from '../ui/SectionHeader'
import FadeInSection from '../ui/FadeInSection'
import { useSanity } from '../../hooks/useSanity'

export default function CaseStudies() {

  const { data, loading } = useSanity<Article[]>(
    `*[_type == "article"] | order(_createdAt desc)`
  )
  const articles: Article[] = data ?? fallbackArticles
  const featured = articles.find((a) => a.featured) ?? articles[0]
  const secondary = articles.filter((a) => !a.featured).slice(0, 3)

  return (
    <section id="case-studies" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInSection className="mb-16">
          <SectionHeader
            eyebrow="Thought Leadership"
            title="Editorial Case Studies"
            subtitle="Insights and analysis from the world's leading PR practitioners."
          />
        </FadeInSection>

        {/* Editorial Layout */}
        {loading ? (
          <div className="flex justify-center py-24">
            <span className="material-symbols-outlined animate-spin text-primary text-4xl">
              progress_activity
            </span>
          </div>
        ) : <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <FadeInSection delay={1}>
            <ArticleCard article={featured} variant="featured" />
          </FadeInSection>

          {/* Secondary Articles */}
          <FadeInSection delay={2} className="flex flex-col gap-6 justify-between">
            {secondary.map((article, i) => (
              <ArticleCard key={article._id} article={article} variant="compact" />
            ))}
          </FadeInSection>
        </div>}

        {/* View All */}
        <FadeInSection className="text-center mt-16">
          <button className="inline-flex items-center gap-2 border-2 border-deep-black text-deep-black hover:bg-deep-black hover:text-white px-12 py-4 font-black text-xs uppercase tracking-widest transition-all">
            View All Articles
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              arrow_forward
            </span>
          </button>
        </FadeInSection>
      </div>
    </section>
  )
}
