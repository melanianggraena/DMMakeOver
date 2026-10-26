import React, { useState } from 'react';
import { ChevronDown, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { faqItems } from '../../data/faq';

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Jika menggunakan service form online seperti Formspree/Web3Forms, 
    // Anda bisa lakukan fetch() di sini.
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface-elevated overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <SectionHeading
          label="PERTANYAAN UMUM"
          title="ADA YANG INGIN DITANYAKAN?"
        />

        {/* Accordion */}
        <div className="mt-12 max-w-3xl mx-auto flex flex-col divide-y divide-border-subtle border-t border-b border-border-subtle">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-heading font-600 text-text-primary text-sm md:text-base leading-snug group-hover:text-primary-container transition-colors duration-200">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={[
                      'shrink-0 mt-0.5 text-text-muted transition-transform duration-300',
                      isOpen ? 'rotate-180 text-primary-container' : '',
                    ].join(' ')}
                  />
                </button>

                {/* Collapsible content */}
                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={[
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                  ].join(' ')}
                >
                  <p className="text-text-muted text-sm leading-relaxed pb-5">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA & Dynamic Form */}
        <div className="mt-12 flex flex-col items-center gap-4 max-w-lg mx-auto">
          {!showForm ? (
            <>
              <p className="text-text-muted text-sm">Masih ada pertanyaan?</p>
              <Button 
                variant="outline" 
                size="md" 
                onClick={() => setShowForm(true)}
              >
                HUBUNGI KAMI →
              </Button>
            </>
          ) : (
            <div className="w-full bg-background border border-border-subtle p-6 rounded-lg transition-all duration-300">
              {submitted ? (
                <div className="text-center py-6 flex flex-col items-center gap-3">
                  <CheckCircle2 size={40} className="text-green-500" />
                  <h4 className="font-heading text-lg text-text-primary font-semibold">Pesan Terkirim!</h4>
                  <p className="text-text-muted text-sm">Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => { setSubmitted(false); setShowForm(false); }}
                  >
                    Tutup
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-heading text-text-primary text-sm font-bold uppercase tracking-wider">Formulir Kontak</h4>
                    <button 
                      type="button" 
                      onClick={() => setShowForm(false)} 
                      className="text-text-muted hover:text-text-primary text-xs"
                    >
                      Batal
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted mb-1 uppercase tracking-wider">Nama</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Nama lengkap Anda"
                      className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle text-text-primary text-sm rounded focus:outline-none focus:border-primary-container"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted mb-1 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alamat@email.com"
                      className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle text-text-primary text-sm rounded focus:outline-none focus:border-primary-container"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-muted mb-1 uppercase tracking-wider">Pesan / Pertanyaan</label>
                    <textarea 
                      rows={3} 
                      required 
                      placeholder="Tuliskan pesan Anda di sini..."
                      className="w-full px-3 py-2 bg-surface-elevated border border-border-subtle text-text-primary text-sm rounded focus:outline-none focus:border-primary-container"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="md" className="w-full flex justify-center items-center gap-2 mt-2">
                    <Send size={16} /> KIRIM PESAN
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;