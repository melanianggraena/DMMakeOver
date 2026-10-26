import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

interface HeaderProps {
  cartCount: number;
}

const navItems: NavItem[] = [
  { label: 'BARU', href: '#', isNew: true },
  { label: 'WAJAH', href: '#' },
  { label: 'MATA', href: '#' },
  { label: 'BIBIR', href: '#' },
  { label: 'KULIT', href: '#' },
  { label: 'LAINNYA', href: '#' },
  { label: 'SALE', href: '#', isSale: true },
];

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-surface-base/95 backdrop-blur-sm border-b border-border-subtle' : 'bg-surface-base'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main nav row */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Mobile: hamburger */}
          <button
            className="md:hidden text-text-primary p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <a
            href="#"
            className="font-heading font-800 text-xl tracking-[0.15em] text-text-primary uppercase flex-shrink-0"
          >
            MAKE OVER
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-heading font-600 text-xs tracking-widest uppercase transition-colors duration-150 ${
                  item.isSale
                    ? 'text-primary-container hover:text-accent-hover'
                    : 'text-text-muted hover:text-text-primary'
                } flex items-center gap-1`}
              >
                {item.label}
                {item.isNew && (
                  <span className="bg-primary-container text-on-primary-container text-[8px] font-heading font-700 px-1 py-0.5 uppercase leading-none">
                    NEW
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              className="text-text-muted hover:text-text-primary transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Cari produk"
            >
              <Search size={20} />
            </button>
            <button className="hidden md:block text-text-muted hover:text-text-primary transition-colors" aria-label="Akun saya">
              <User size={20} />
            </button>
            <button className="hidden md:block text-text-muted hover:text-text-primary transition-colors" aria-label="Wishlist">
              <Heart size={20} />
            </button>
            <button
              className="relative text-text-primary hover:text-primary transition-colors"
              aria-label={`Keranjang belanja, ${cartCount} item`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-container text-on-primary-container text-[10px] font-heading font-700 w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border-subtle py-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Cari produk, brand, atau kategori..."
                autoFocus
                className="w-full bg-surface-card text-text-primary placeholder-text-muted font-sans text-sm py-2.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary-container border border-border-subtle"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-elevated border-t border-border-subtle">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading font-600 text-sm tracking-widest uppercase py-3 px-4 flex items-center gap-2 ${
                  item.isSale
                    ? 'text-primary-container'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-card'
                } transition-colors`}
              >
                {item.label}
                {item.isNew && (
                  <span className="bg-primary-container text-on-primary-container text-[8px] font-heading font-700 px-1 py-0.5 uppercase leading-none">
                    NEW
                  </span>
                )}
              </a>
            ))}
            <div className="border-t border-border-subtle mt-2 pt-2 px-4 flex items-center gap-4">
              <button className="text-text-muted hover:text-text-primary transition-colors py-2 flex items-center gap-2 font-heading font-600 text-xs tracking-widest uppercase">
                <User size={16} /> AKUN
              </button>
              <button className="text-text-muted hover:text-text-primary transition-colors py-2 flex items-center gap-2 font-heading font-600 text-xs tracking-widest uppercase">
                <Heart size={16} /> WISHLIST
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
