import type { Article } from '../../types'
import { urlFor } from '../../lib/sanityClient'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'

interface ArticleCardProps {
  article: Article
  variant?: 'featured' | 'compact'
}

export default function ArticleCard({ article, variant = 'compact' }: ArticleCardProps) {
  // Priority: Sanity uploaded image → fallback imageUrl → default image
  const imgSrc = article.thumbnail
    ? urlFor(article.thumbnail).width(800).url()
    : article.imageUrl ?? DEFAULT_IMAGE

  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden bg-deep-black h-full min-h-[420px] flex flex-col justify-end cursor-pointer">
        <img
          src={imgSrc}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent" />
        <div className="relative z-10 p-8">
          <span className="inline-block text-[10px] font-black tracking-widest text-primary uppercase mb-3">
            {article.category}
          </span>
          <h3 className="text-2xl font-black text-white leading-tight mb-4">
            {article.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
            {article.excerpt}
          </p>
          <a
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors"
          >
            Read Full Report
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
              arrow_forward
            </span>
          </a>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex gap-4 border-b border-neutral-gray pb-6 last:border-0 last:pb-0 cursor-pointer">
      <div className="w-24 h-20 flex-shrink-0 overflow-hidden">
        <img
          src={imgSrc}
          alt={article.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[10px] font-black tracking-widest text-primary uppercase mb-1">
          {article.category}
        </span>
        <h3 className="text-sm font-bold text-deep-black leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-slate-500 text-xs line-clamp-2">{article.excerpt}</p>
      </div>
    </article>
  )
}