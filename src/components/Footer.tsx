import React from 'react';
import { COMPANY_DETAILS } from '../data/trailerData';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050f1d] text-slate-400 text-xs border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Wordmark & overview */}
          <div className="space-y-3 md:col-span-1">
            <div>
              <Logo variant="full" size="md" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed pt-1">
              Commercial-grade 53 ft Dry Van and Reefer trailer rentals across the United States. Flat monthly rates, $0 deposit, and maintenance included.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Fleet & Rates
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#equipment" className="hover:text-amber-400 transition-colors">
                  53 ft Dry Van Trailers
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-400 transition-colors">
                  53 ft Reefer Trailers
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-amber-400 transition-colors">
                  Monthly Rate Card (2018–2025)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Fleet Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Rental Terms & Docs */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Driver Onboarding
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#terms" className="hover:text-amber-400 transition-colors">
                  No Deposit & Unlimited Miles
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-amber-400 transition-colors">
                  Customer Inspection & Pickup
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-amber-400 transition-colors">
                  Required Documents (CDL, COI, MC)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Sales Contact */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Sales & Dispatch
            </div>
            <div className="space-y-2 text-xs">
              <div className="text-slate-300">
                Representative: <strong className="text-white">{COMPANY_DETAILS.representative}</strong>
              </div>
              <div>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_DETAILS.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="truncate">{COMPANY_DETAILS.email}</span>
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Depot availability varies by location and current inventory.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Nationwide Trailer Rental. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Important: Pricing is monthly flat rate. Availability depends on trailer type, model year, location, and current inventory. Maintenance covers the whole trailer except tires and brake chambers.
          </div>
        </div>
      </div>
    </footer>
  );
};
