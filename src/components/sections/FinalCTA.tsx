import React from 'react';
import { ShieldCheck, CheckCircle, Truck, RotateCcw } from 'lucide-react';
import Button from '../ui/Button';

// ── Trust Badge ───────────────────────────────────────────────────────────────

interface TrustBadgeProps {
  icon: React.ReactNode;
  label: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="text-primary-container">{icon}</div>
    <span className="font-heading font-600 text-text-muted text-[11px] tracking-widest uppercase">
      {label}
    </span>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

const FinalCTA: React.FC = () => {
  return (
    <section
      id="final-cta"
      className="relative py-20 md:py-32 bg-surface-elevated overflow-hidden"
    >
      {/* Decorative gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-primary-container opacity-5 blur-[120px]" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col items-center gap-10 text-center">
        {/* Heading */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="font-heading font-800 text-text-primary text-3xl md:text-5xl uppercase tracking-tight leading-none">
            MULAI PERJALANAN KECANTIKANMU HARI INI
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Bergabung dengan 500.000+ perempuan Indonesia yang telah mempercayakan kecantikannya
            kepada Make Over.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            BELANJA SEKARANG
          </Button>
          <Button variant="outline" size="lg">
            COBA VIRTUAL MAKEUP
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-4 w-full max-w-xl md:max-w-2xl">
          <TrustBadge icon={<ShieldCheck size={24} />} label="BPOM Certified" />
          <TrustBadge icon={<CheckCircle size={24} />} label="Halal MUI" />
          <TrustBadge icon={<Truck size={24} />} label="Gratis Ongkir" />
          <TrustBadge icon={<RotateCcw size={24} />} label="Retur 14 Hari" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
