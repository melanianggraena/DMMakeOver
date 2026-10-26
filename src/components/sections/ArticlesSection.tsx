import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { articles } from '../../data/articles';

const ArticlesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <SectionHeading
          label="BEAUTY INSIGHTS"
          title="TIPS & INSPIRASI KECANTIKAN"
        />

        {/* Article Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-surface-card border border-border-subtle flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden bg-surface-elevated">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-primary-container text-on-primary-container font-heading font-700 text-[10px] tracking-widest uppercase px-2.5 py-1">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Title */}
                <h3 className="font-heading font-700 text-text-primary text-sm md:text-base leading-snug line-clamp-2 group-hover:text-primary-container transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2 flex-1">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-text-muted text-xs font-heading tracking-wider mt-1">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="text-border-strong">·</span>
                  <span>{article.date}</span>
                </div>

                {/* Read more link */}
                <a
                  href={`/artikel/${article.slug}`}
                  className="flex items-center gap-1.5 text-primary-container font-heading font-700 text-xs tracking-widest uppercase hover:gap-2.5 transition-all duration-200 mt-2 self-start"
                  aria-label={`Baca selengkapnya: ${article.title}`}
                >
                  BACA SELENGKAPNYA
                  <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            LIHAT SEMUA ARTIKEL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
