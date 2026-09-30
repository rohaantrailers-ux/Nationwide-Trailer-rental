import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/trailerData';
import { Logo } from './Logo';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Equipment', href: '#equipment' },
    { label: 'Monthly Rates', href: '#rates' },
    { label: 'Staging Depots', href: '#depots' },
    { label: 'Rental Terms', href: '#terms' },
    { label: 'Required Documents', href: '#documents' },
    { label: 'Rate Calculator', href: '#rates' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#061426]/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top Bar Contract: Zone 1 (Wordmark / Logo) - Zone 2 (Nav links) - Zone 3 (Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single element Brand Logo */}
        <a href="#" className="flex items-center group shrink-0" aria-label="Trail Edge Rentals Home">
          <Logo variant="full" size="md" />
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 hover:underline underline-offset-8 decoration-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions & Live Dispatch */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Yard Dispatch Live</span>
          </div>

          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_DETAILS.phoneDisplay}</span>
          </a>
          <button
            onClick={onReserveClick}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Reserve Trailer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onReserveClick}
            className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded transition-colors whitespace-nowrap"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-amber-400 bg-slate-800/80 rounded"
            >
              <Phone className="w-4 h-4" />
              <span>Call Representative Darvis: {COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
            >
              Check Availability & Reserve
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
