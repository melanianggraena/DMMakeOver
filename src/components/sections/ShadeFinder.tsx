import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

// ── Types ──────────────────────────────────────────────────────────────────────

type Undertone = 'COOL' | 'NEUTRAL' | 'WARM';
type Brightness = 'TERANG' | 'MEDIUM' | 'TAN' | 'DEEP';
type Coverage = 'RINGAN' | 'SEDANG' | 'PENUH';

interface ShadeResult {
  shade: string;
  description: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getRecommendation(
  undertone: Undertone,
  brightness: Brightness,
  coverage: Coverage
): ShadeResult {
  const toneMap: Record<Undertone, string> = {
    COOL: 'NC',
    NEUTRAL: 'NW',
    WARM: 'W',
  };

  const brightnessMap: Record<Brightness, string> = {
    TERANG: '15',
    MEDIUM: '25',
    TAN: '35',
    DEEP: '45',
  };

  const coverageLabel: Record<Coverage, string> = {
    RINGAN: 'Ringan & Natural',
    SEDANG: 'Medium & Buildable',
    PENUH: 'Full & Flawless',
  };

  const shade = `${toneMap[undertone]}${brightnessMap[brightness]}`;
  const description = `Shade ${shade} diformulasikan khusus untuk kulit ${brightness.toLowerCase()} dengan undertone ${undertone.toLowerCase()}. Coverage ${coverageLabel[coverage]} untuk tampilan sempurna seharian.`;

  return { shade: `${shade} – ${brightness} ${undertone}`, description };
}

// ── Option Button ─────────────────────────────────────────────────────────────

interface OptionBtnProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const OptionBtn: React.FC<OptionBtnProps> = ({ label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      'font-heading font-600 text-xs tracking-widest uppercase px-5 py-3 border transition-colors duration-200 text-left',
      selected
        ? 'bg-primary-container text-on-primary-container border-primary-container'
        : 'bg-surface-interactive text-text-muted border-border-subtle hover:border-border-strong hover:text-text-primary',
    ].join(' ')}
  >
    {label}
  </button>
);

// ── Main Component ────────────────────────────────────────────────────────────

const ShadeFinder: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [undertone, setUndertone] = useState<Undertone | null>(null);
  const [brightness, setBrightness] = useState<Brightness | null>(null);
  const [coverage, setCoverage] = useState<Coverage | null>(null);

  const result =
    step === 4 && undertone && brightness && coverage
      ? getRecommendation(undertone, brightness, coverage)
      : null;

  const handleReset = () => {
    setStep(1);
    setUndertone(null);
    setBrightness(null);
    setCoverage(null);
  };

  const progressLabel = step < 4 ? `${step}/3` : '3/3';

  return (
    <section id="shade-finder" className="py-16 md:py-24 bg-surface-elevated overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ── Left: Info ── */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              label="TEKNOLOGI AI"
              title="TEMUKAN SHADE KAMU"
              subtitle="Jawab 3 pertanyaan mudah dan kami akan merekomendasikan shade foundation yang tepat untukmu."
              align="left"
            />
            <ul className="flex flex-col gap-4 mt-2">
              {[
                { num: '01', text: 'Identifikasi undertone kulitmu' },
                { num: '02', text: 'Tentukan tingkat kecerahan kulit' },
                { num: '03', text: 'Pilih coverage yang diinginkan' },
              ].map((item) => (
                <li key={item.num} className="flex items-start gap-4">
                  <span className="font-heading font-800 text-primary-container text-lg leading-none">
                    {item.num}
                  </span>
                  <span className="text-text-muted text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: Quiz ── */}
          <div className="bg-surface-card border border-border-subtle p-6 md:p-8 flex flex-col gap-6">
            {/* Progress */}
            {step < 4 && (
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={[
                        'h-1 w-8 transition-colors duration-300',
                        s <= step ? 'bg-primary-container' : 'bg-border-subtle',
                      ].join(' ')}
                    />
                  ))}
                </div>
                <span className="font-heading text-text-muted text-xs tracking-widest">
                  {progressLabel}
                </span>
              </div>
            )}

            {/* ── Step 1 ── */}
            {step === 1 && (
              <div className="flex flex-col gap-4">
                <p className="font-heading font-600 text-text-primary text-sm tracking-wide">
                  Seperti apa undertone kulitmu?
                </p>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      { val: 'COOL', desc: 'Kemerahan / kebiruan' },
                      { val: 'NEUTRAL', desc: 'Seimbang' },
                      { val: 'WARM', desc: 'Kekuningan / kecokelatan' },
                    ] as Array<{ val: Undertone; desc: string }>
                  ).map(({ val, desc }) => (
                    <OptionBtn
                      key={val}
                      label={`${val} — ${desc}`}
                      selected={undertone === val}
                      onClick={() => setUndertone(val)}
                    />
                  ))}
                </div>
                <Button
                  variant="primary"
                  size="md"
                  disabled={!undertone}
                  onClick={() => setStep(2)}
                  className="mt-2 self-start"
                >
                  LANJUT
                </Button>
              </div>
            )}

            {/* ── Step 2 ── */}
            {step === 2 && (
              <div className="flex flex-col gap-4">
                <p className="font-heading font-600 text-text-primary text-sm tracking-wide">
                  Seberapa cerah kulitmu?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(['TERANG', 'MEDIUM', 'TAN', 'DEEP'] as Brightness[]).map((val) => (
                    <OptionBtn
                      key={val}
                      label={val}
                      selected={brightness === val}
                      onClick={() => setBrightness(val)}
                    />
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                    KEMBALI
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    disabled={!brightness}
                    onClick={() => setStep(3)}
                  >
                    LANJUT
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 3 ── */}
            {step === 3 && (
              <div className="flex flex-col gap-4">
                <p className="font-heading font-600 text-text-primary text-sm tracking-wide">
                  Coverage apa yang kamu inginkan?
                </p>
                <div className="flex flex-col gap-2">
                  {(['RINGAN', 'SEDANG', 'PENUH'] as Coverage[]).map((val) => (
                    <OptionBtn
                      key={val}
                      label={val}
                      selected={coverage === val}
                      onClick={() => setCoverage(val)}
                    />
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                    KEMBALI
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    disabled={!coverage}
                    onClick={() => setStep(4)}
                  >
                    LIHAT HASIL
                  </Button>
                </div>
              </div>
            )}

            {/* ── Result ── */}
            {step === 4 && result && (
              <div className="flex flex-col gap-5">
                <div className="border-l-2 border-primary-container pl-4">
                  <p className="text-text-muted text-xs tracking-widest uppercase font-heading mb-1">
                    Shade Rekomendasi
                  </p>
                  <p className="font-heading font-800 text-text-primary text-xl md:text-2xl uppercase tracking-tight">
                    {result.shade}
                  </p>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{result.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="md">
                    TAMBAHKAN KE TAS
                  </Button>
                  <Button variant="outline" size="md">
                    LIHAT DETAIL
                  </Button>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-text-muted text-xs font-heading tracking-widest uppercase hover:text-text-primary transition-colors self-start"
                >
                  ULANGI QUIZ →
                </button>
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-text-muted text-[11px] leading-relaxed border-t border-border-subtle pt-4">
              * Ini adalah demonstrasi Shade Finder. Rekomendasi aktual memerlukan analisis warna
              kulit yang lebih mendalam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadeFinder;
