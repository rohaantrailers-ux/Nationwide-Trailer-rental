import React from 'react';
import { DollarSign, ShieldAlert, Wrench, Eye, Truck, CalendarCheck, HelpCircle } from 'lucide-react';
import { RENTAL_ADVANTAGES } from '../data/trailerData';

export const KeyTermsBanner: React.FC = () => {
  const termsWithIcons = [
    {
      title: 'Monthly Flat-Rate Pricing',
      description: 'Transparent monthly billing with zero surprise rate adjustments or hidden terminal fees.',
      icon: DollarSign,
      highlight: 'Predictable Monthly Rates',
    },
    {
      title: 'Zero Deposit Required',
      description: 'No massive upfront cash lockup. Reserve your trailer without tying up your working capital.',
      icon: DollarSign,
      highlight: '$0 Down to Roll',
    },
    {
      title: 'Zero Per-Mile Charges',
      description: 'Run nationwide routes with unlimited mileage. No hubodometer tracking or per-mile penalties.',
      icon: Truck,
      highlight: 'Unlimited Miles Included',
    },
    {
      title: 'Maintenance Included',
      description: 'Comprehensive coverage covers the whole trailer (air ride, structure, wiring, reefer servicing) except tires & brake chambers.',
      icon: Wrench,
      highlight: 'Full Trailer Coverage',
    },
    {
      title: 'Inspect & Select Your Unit',
      description: 'Walk our yard, conduct your thorough pre-trip walkaround, test swing doors and lights, and choose your preferred unit.',
      icon: Eye,
      highlight: 'Complete On-Site Choice',
    },
    {
      title: 'Pay After Pickup (Same Day)',
      description: 'Never pay in advance for equipment you haven’t seen. Payment is settled the same day once you hook up and verify condition.',
      icon: CalendarCheck,
      highlight: 'Maximum Peace of Mind',
    },
  ];

  return (
    <section id="terms" className="py-20 bg-slate-900 text-white border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            The Trail Edge Rental Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Rental Terms Built Around Carrier & Fleet Cash Flow
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Most national leasing corporations force carriers into strict multi-thousand dollar deposits, invasive credit lockouts, and punitive per-mile charges. We operate differently: simple, flat-rate, and driver-first.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {termsWithIcons.map((term, index) => {
            const Icon = term.icon;
            return (
              <div
                key={term.title}
                className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold text-amber-400/80 tracking-widest block uppercase">
                        RULE 0{index + 1}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        {term.highlight}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {term.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {term.description}
                  </p>
                </div>

                {term.title.includes('Maintenance') && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-amber-300/90 flex items-start gap-1.5">
                    <span className="font-semibold text-amber-400">* Note:</span>
                    <span>Maintenance covers whole trailer except tires & brake chambers.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Critical Trust Banner */}
        <div className="mt-12 p-5 rounded-lg bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-amber-300 flex items-center gap-2">
              <span>Customer Pickup & Same-Day Post-Pickup Payment</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              You inspect the trailer on-site, verify road-readiness, hook up to your tractor, and finalize your monthly rental payment the same day. Zero risk of paying for trailers you haven't seen in person.
            </p>
          </div>
          <a
            href="#rates"
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap self-start sm:self-center"
          >
            Review Rate Card
          </a>
        </div>
      </div>
    </section>
  );
};
