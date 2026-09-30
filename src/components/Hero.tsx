import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Mail, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/trailerData';
import { Logo } from './Logo';

interface HeroProps {
  onCheckRatesClick: () => void;
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckRatesClick, onReserveClick }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_freight_trailer_1790796397096.jpg"
          alt="Nationwide 53 ft commercial semi-trailer on highway"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          onError={(e) => {
            // Resilient fallback container if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-3xl">
          {/* Official Brand Identity */}
          <div className="mb-6 inline-flex">
            <div className="py-2.5 px-4 rounded-xl bg-[#061426]/90 border border-slate-800 shadow-xl backdrop-blur-md">
              <Logo variant="full" size="md" />
            </div>
          </div>

          {/* Unboxed editorial kicker - anti-pill */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <span>Nationwide US Availability</span>
            <span aria-hidden="true">·</span>
            <span>53 ft Dry Vans & Reefers</span>
            <span aria-hidden="true">·</span>
            <span>New Authorities Welcome</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
            Commercial 53 ft Trailer Rentals Built for Real Carriers.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Flat-rate monthly rentals for trucking companies, owner-operators, and motor carriers.
            Enjoy <span className="text-white font-semibold">$0 deposit</span>, <span className="text-white font-semibold">no per-mile charges</span>, maintenance included, and <span className="text-amber-400 font-semibold">payment made same day after you inspect and pick up</span>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={onReserveClick}
              className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded shadow-lg hover:shadow-amber-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Check Yard Inventory & Reserve</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onCheckRatesClick}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>View Monthly Rate Card</span>
            </button>
          </div>

          {/* Direct Sales Rep Ribbon */}
          <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold shrink-0">
                D
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Direct Sales & Dispatch Representative</div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{COMPANY_DETAILS.representative}</span>
                  <span className="text-xs font-normal text-slate-400">· Nationwide Trailer Rental</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-400/10 text-amber-300 hover:bg-amber-400/20 border border-amber-400/30 transition-colors font-mono font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate max-w-[200px]">{COMPANY_DETAILS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Unboxed Key Proof Strip */}
      <div className="border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong className="text-white">$0 Deposit</strong> Required</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong className="text-white">Zero Per-Mile</strong> Charges</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong className="text-white">Maintenance</strong> Included</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong className="text-white">Pay Same Day</strong> Post-Pickup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
