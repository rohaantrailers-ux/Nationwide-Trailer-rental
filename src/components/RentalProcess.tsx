import React from 'react';
import { FileCheck, MapPin, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface RentalProcessProps {
  onReserveClick: () => void;
}

export const RentalProcess: React.FC<RentalProcessProps> = ({ onReserveClick }) => {
  const steps = [
    {
      step: '01',
      title: 'Submit Required Documents',
      description: 'Provide your valid CDL Class A, Certificate of Insurance (COI), and MC/DOT Authority Letter. Fast review and clear terms.',
    },
    {
      step: '02',
      title: 'Select Trailer & Staging Yard',
      description: 'Confirm 53 ft Dry Van or Reefer availability, select your preferred model year tier (2018–2025), and arrange your pickup date.',
    },
    {
      step: '03',
      title: 'Inspect & Select On-Site',
      description: 'Arrive at the designated depot. Walk the yard, personally inspect tires, swing doors, landing gear, and air lines. Choose your unit.',
    },
    {
      step: '04',
      title: 'Hook Up & Pay Same Day',
      description: 'Once satisfied, hook up to your tractor. Flat-rate rental payment is settled that same day after pickup. Roll out with $0 deposit.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explanatory steps */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Simple 4-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              How Nationwide Trailer Rental Works
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              We eliminate complex financing applications, credit pulls, and days of waiting. Inspect your trailer first, hook up, and settle payment that same day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="p-5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                    STEP {item.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onReserveClick}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Start Your Rental Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Yard Visual */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <img
              src="/src/assets/images/trailer_yard_fleet_1790796433206.jpg"
              alt="Commercial 53 ft trailer staging yard ready for customer inspection"
              referrerPolicy="no-referrer"
              className="w-full h-80 lg:h-96 object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="p-5 bg-slate-900 border-t border-slate-800">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                Customer Yard Walkthrough
              </div>
              <p className="text-xs text-slate-300">
                You never take an assigned trailer sight unseen. You inspect every lock-rod, glad hand, and light before completing checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
