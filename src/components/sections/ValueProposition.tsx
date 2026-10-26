import React from 'react';
import { Palette, Camera, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const values = [
  {
    icon: <Palette size={28} className="text-primary-container" />,
    title: 'SHADE FINDER',
    subtitle: 'Teknologi AI',
    description:
      'Temukan shade foundation yang sempurna untuk kulitmu dengan teknologi AI canggih kami. Cukup foto dirimu dan dapatkan rekomendasi shade yang akurat dalam hitungan detik.',
    cta: 'COBA SHADE FINDER',
    href: '#shade-finder',
  },
  {
    icon: <Camera size={28} className="text-primary-container" />,
    title: 'VIRTUAL TRY-ON',
    subtitle: 'Augmented Reality',
    description:
      'Coba produk makeup kami secara virtual menggunakan teknologi AR terdepan. Lihat bagaimana tampilan makeup di wajahmu sebelum membeli — tanpa perlu ke toko.',
    cta: 'MULAI VIRTUAL STUDIO',
    href: '#virtual',
    featured: true,
  },
  {
    icon: <Star size={28} className="text-primary-container" />,
    title: 'BEAUTY EXPERTISE',
    subtitle: 'Konsultasi Personal',
    description:
      'Konsultasi 1-on-1 dengan beauty advisor berpengalaman kami. Dapatkan tips makeup profesional, rekomendasi produk, dan rutinitas perawatan kulit yang dipersonalisasi untukmu.',
    cta: 'JADWALKAN KONSULTASI',
    href: '#konsultasi',
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-surface-elevated py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <SectionHeading
            label="LAYANAN UNGGULAN"
            title="BEAUTY UNTUK SEMUA"
            subtitle="Tiga pilar inovasi Make Over untuk pengalaman kecantikan yang tak terlupakan."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-subtle">
          {values.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col gap-4 p-8 ${
                item.featured ? 'bg-surface-card' : 'bg-surface-elevated'
              } ${idx < values.length - 1 ? 'border-b md:border-b-0 md:border-r border-border-subtle' : ''} relative`}
            >
              {item.featured && (
                <span className="absolute top-4 right-4 bg-primary-container text-on-primary-container font-heading font-700 text-[9px] tracking-widest uppercase px-2 py-1">
                  UNGGULAN
                </span>
              )}
              <div className="w-12 h-12 border border-border-strong flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-600 text-primary-container text-xs tracking-[0.2em] uppercase">
                  {item.subtitle}
                </span>
                <h3 className="font-heading font-800 text-text-primary text-xl uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed font-sans flex-1">
                {item.description}
              </p>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 font-heading font-700 text-xs tracking-widest uppercase text-primary-container hover:text-accent-hover transition-colors group"
              >
                {item.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
