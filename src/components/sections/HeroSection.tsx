import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button';

const trustSignals = [
  { value: '500K+', label: 'Pelanggan Puas' },
  { value: '4.9★', label: 'Rating Rata-rata' },
  { value: '150+', label: 'Shade Tersedia' },
  { value: 'BPOM', label: 'Tersertifikasi' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-surface-base min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-base via-surface-base/90 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-base/60 via-transparent to-transparent z-10" />

      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=80"
          alt="Make Over Indonesia – Editorial Beauty"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Pre-headline */}
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-primary-container" />
            <span className="font-heading font-600 text-primary-container text-xs tracking-[0.3em] uppercase">
              KOLEKSI TERBARU 2026
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-heading font-800 text-text-primary text-5xl md:text-6xl lg:text-7xl leading-none uppercase tracking-tight">
            BEAUTY
            <br />
            IS{' '}
            <span className="text-primary-container">POWER</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-muted text-base md:text-lg max-w-lg leading-relaxed font-sans">
            Ekspresikan kecantikanmu yang sesungguhnya dengan koleksi makeup premium Make Over — diformulasikan khusus untuk kulit Asia, tahan lama, dan memukau.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="lg">
              JELAJAHI KOLEKSI
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg">
              <Play size={14} />
              COBA VIRTUAL MAKEUP
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-2">
            {trustSignals.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="font-heading font-800 text-text-primary text-lg leading-none">
                  {item.value}
                </span>
                <span className="font-sans text-text-muted text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-muted">
        <span className="font-heading font-600 text-[10px] tracking-[0.3em] uppercase">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
