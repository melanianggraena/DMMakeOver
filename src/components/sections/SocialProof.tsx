import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials, ugcImages } from '../../data/testimonials';

// ── Stat Card ─────────────────────────────────────────────────────────────────

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="flex flex-col items-center text-center gap-2 py-8 px-4 border border-border-subtle bg-surface-card">
    <span className="font-heading font-800 text-text-primary text-2xl md:text-3xl tracking-tight">
      {value}
    </span>
    <span className="text-text-muted text-xs font-heading tracking-widest uppercase">{label}</span>
  </div>
);

// ── Stars ─────────────────────────────────────────────────────────────────────

const StarRow: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={13}
        className={
          i < rating
            ? 'fill-primary-container text-primary-container'
            : 'text-border-strong'
        }
      />
    ))}
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col gap-20">
        {/* ── Heading ── */}
        <SectionHeading
          label="BUKTI NYATA"
          title="DIPERCAYA JUTAAN PEREMPUAN INDONESIA"
        />

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8">
          <StatCard value="500K+" label="Pelanggan Aktif" />
          <StatCard value="4.9/5.0" label="Rating Rata-rata" />
          <StatCard value="150+" label="Pilihan Shade" />
          <StatCard value="BPOM & Halal" label="Bersertifikat Resmi" />
        </div>

        {/* ── Testimonials ── */}
        <div className="flex flex-col gap-8">
          <h3 className="font-heading font-700 text-text-primary text-sm tracking-[0.2em] uppercase text-center">
            APA KATA MEREKA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="bg-surface-card border border-border-subtle p-6 flex flex-col gap-4"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-heading font-600 text-text-primary text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs mt-0.5">{t.date}</p>
                  </div>
                  {t.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-heading tracking-wider text-primary-container shrink-0">
                      <BadgeCheck size={13} />
                      Terverifikasi
                    </span>
                  )}
                </div>

                {/* Stars */}
                <StarRow rating={t.rating} />

                {/* Review */}
                <p className="text-text-muted text-sm leading-relaxed flex-1">{t.review}</p>

                {/* Product */}
                <p className="text-text-muted text-xs font-heading tracking-widest uppercase border-t border-border-subtle pt-3">
                  {t.productName}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── UGC / Community ── */}
        <div className="flex flex-col gap-8">
          <h3 className="font-heading font-700 text-text-primary text-sm tracking-[0.2em] uppercase text-center">
            KOMUNITAS MAKE OVER
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ugcImages.map((img) => (
              <div key={img.id} className="group relative aspect-square overflow-hidden">
                <img
                  src={img.image}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-surface-base/60 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading font-600 text-text-primary text-xs tracking-wider">
                    {img.username}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
