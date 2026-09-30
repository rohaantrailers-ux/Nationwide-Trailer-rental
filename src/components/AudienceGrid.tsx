import React from 'react';
import { Truck, ShieldCheck, Users, Briefcase, Zap, CheckCircle2 } from 'lucide-react';
import { AUDIENCES } from '../data/trailerData';

interface AudienceGridProps {
  onReserveClick: () => void;
}

export const AudienceGrid: React.FC<AudienceGridProps> = ({ onReserveClick }) => {
  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Who We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Reliable Commercial Trailers For Every Sector of Freight
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you are expanding a 50-truck carrier fleet or rolling under your very first load as a brand new authority, we provide flexible, commercial-grade trailer access.
          </p>
        </div>

        {/* Feature Bento Card: Spotlight on New Authorities */}
        <div className="mb-10 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-500/15 via-slate-800 to-slate-900 border border-amber-400/40">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                <span>Special Program · New Authorities Welcomed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Just Got Your MC Authority? We’ll Get You On The Road.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Most legacy trailer leasing firms turn down carriers with less than 1 or 2 years in business. At Trail Edge Rentals, we understand that new carriers need equipment to build revenue. With your active CDL, COI, and MC letter, you can inspect and rent commercial 53 ft Dry Vans or Reefers with zero deposit.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-amber-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> No 2-Year Age Requirement
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> $0 Down Upfront
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Fast Document Clearance
                </span>
              </div>
            </div>

            <button
              onClick={onReserveClick}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap self-start lg:self-center cursor-pointer shadow-lg"
            >
              Get Approved as New Authority
            </button>
          </div>
        </div>

        {/* General Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-slate-800/60 border border-slate-700/70 hover:border-slate-600 transition-colors"
            >
              <div className="text-xs font-mono font-medium text-slate-400 mb-2">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
