import React, { useState } from 'react';
import { Instagram, Youtube, Facebook, Send, CheckCircle } from 'lucide-react';

const footerLinks = [
  {
    heading: 'PRODUK',
    links: [
      { label: 'Wajah', href: '#' },
      { label: 'Mata', href: '#' },
      { label: 'Bibir', href: '#' },
      { label: 'Kulit', href: '#' },
      { label: 'Koleksi Terbaru', href: '#' },
      { label: 'Best Sellers', href: '#' },
    ],
  },
  {
    heading: 'LAYANAN',
    links: [
      { label: 'Shade Finder', href: '#' },
      { label: 'Virtual Try-On', href: '#' },
      { label: 'Beauty Consultation', href: '#' },
      { label: 'Store Locator', href: '#' },
    ],
  },
  {
    heading: 'PERUSAHAAN',
    links: [
      { label: 'Tentang Make Over', href: '#' },
      { label: 'Karir', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    heading: 'BANTUAN',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
      { label: 'Syarat & Ketentuan', href: '#' },
      { label: 'Kebijakan Retur', href: '#' },
      { label: 'Hubungi Kami', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Masukkan alamat email yang valid.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <footer className="bg-surface-elevated border-t border-border-subtle">
      {/* Newsletter */}
      <div className="border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading font-800 text-text-primary text-lg uppercase tracking-widest">
                BERGABUNG DENGAN KOMUNITAS MAKE OVER
              </h3>
              <p className="text-text-muted text-sm max-w-md">
                Daftar untuk mendapatkan info produk terbaru, tips kecantikan eksklusif, dan penawaran spesial langsung ke inboxmu.
              </p>
            </div>
            <div className="w-full md:w-auto md:min-w-[380px]">
              {submitted ? (
                <div className="flex items-center gap-2 text-primary text-sm font-heading font-600 tracking-wide">
                  <CheckCircle size={18} className="text-primary-container" />
                  Terima kasih! Kamu sudah terdaftar.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex gap-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Masukkan email kamu"
                      className="flex-1 bg-surface-card border border-border-strong text-text-primary placeholder-text-muted text-sm px-4 py-3 focus:outline-none focus:border-primary-container font-sans"
                      aria-label="Alamat email untuk newsletter"
                    />
                    <button
                      type="submit"
                      className="bg-primary-container text-on-primary-container hover:bg-accent-hover transition-colors px-5 py-3 flex items-center gap-2 font-heading font-700 text-xs tracking-widest uppercase"
                    >
                      <Send size={14} />
                      DAFTAR
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-400 text-xs mt-2 font-sans">{error}</p>
                  )}
                  <p className="text-text-muted text-xs mt-2 font-sans">
                    * Ini adalah formulir demo (frontend only). Email tidak dikirim ke server.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="font-heading font-700 text-text-primary text-xs tracking-[0.2em] uppercase">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-text-primary text-sm transition-colors font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border-subtle pt-8">
          {/* Logo + copy */}
          <div className="flex flex-col gap-1">
            <span className="font-heading font-800 text-base tracking-[0.15em] text-text-primary uppercase">
              MAKE OVER
            </span>
            <p className="text-text-muted text-xs font-sans">
              © 2026 PT Paragon Technology and Innovation. Hak Cipta Dilindungi.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram Make Over"
              className="text-text-muted hover:text-primary-container transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="YouTube Make Over"
              className="text-text-muted hover:text-primary-container transition-colors"
            >
              <Youtube size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook Make Over"
              className="text-text-muted hover:text-primary-container transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Payment badges placeholder */}
          <div className="flex items-center gap-2">
            {['VISA', 'MASTERCARD', 'BCA', 'GOPAY', 'OVO'].map((method) => (
              <span
                key={method}
                className="border border-border-strong text-text-muted text-[9px] font-heading font-700 px-2 py-1 tracking-wider"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
