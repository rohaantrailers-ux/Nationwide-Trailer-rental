import React, { useState } from 'react';
import { PRICING_TIERS, COMPANY_DETAILS } from '../data/trailerData';
import { TrailerType, ModelYearTier } from '../types';
import { Check, ShieldCheck, ArrowRight, Calculator, Sparkles, Copy, FileText } from 'lucide-react';

interface PricingCalculatorProps {
  onApplyConfiguration: (config: {
    trailerType: TrailerType;
    modelYearTier: ModelYearTier;
    quantity: number;
  }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onApplyConfiguration }) => {
  const [selectedType, setSelectedType] = useState<TrailerType>('dry-van');
  const [selectedTier, setSelectedTier] = useState<ModelYearTier>('2020-2023');
  const [quantity, setQuantity] = useState<number>(1);
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Find active tier
  const activeTierObj = PRICING_TIERS.find((t) => t.tier === selectedTier) || PRICING_TIERS[1];
  const unitMonthlyRate = selectedType === 'dry-van' ? activeTierObj.dryVanRate : activeTierObj.reeferRate;
  const totalMonthlyRate = unitMonthlyRate * quantity;

  const handleCopyQuote = () => {
    const text = `--- TRAIL EDGE RENTALS COMMERCIAL ESTIMATE ---
Equipment: 53 ft ${selectedType === 'dry-van' ? 'Dry Van' : 'Reefer'} Trailer (${activeTierObj.label})
Quantity: ${quantity} Unit(s)
Unit Monthly Rate: $${unitMonthlyRate.toLocaleString()} / month flat rate
Total Monthly Flat Rate: $${totalMonthlyRate.toLocaleString()} / month
Deposit: $0.00 (Zero Deposit Required)
Per-Mile Fee: $0.00 (Unlimited Mileage Coast-to-Coast)
Maintenance: Included (covers trailer structure/components; excludes tires & brake chambers)
Payment Terms: Same-day settlement after driver inspection & pickup
Representative: ${COMPANY_DETAILS.representative}
Hotline: ${COMPANY_DETAILS.phoneDisplay}
Email: ${COMPANY_DETAILS.email}
---------------------------------------------`;
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <section id="rates" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Transparent Flat-Rate Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            Monthly Trailer Rental Pricing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Straightforward flat rates by model year. Every rental includes $0 deposit, zero per-mile charges, and trailer maintenance.
          </p>
        </div>

        {/* Official Rate Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-16 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Model Year Tier</th>
                <th className="py-4 px-6 font-semibold">53 ft Dry Van</th>
                <th className="py-4 px-6 font-semibold">53 ft Reefer</th>
                <th className="py-4 px-6 font-semibold">Deposit</th>
                <th className="py-4 px-6 font-semibold">Per-Mile Charges</th>
                <th className="py-4 px-6 font-semibold">Maintenance</th>
                <th className="py-4 px-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {PRICING_TIERS.map((tier) => (
                <tr
                  key={tier.tier}
                  className="hover:bg-amber-50/40 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-slate-950">
                    <div>{tier.label}</div>
                    <div className="text-xs font-normal text-slate-500 mt-0.5">{tier.notes}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-base font-bold text-slate-900 tabular-nums">
                      ${tier.dryVanRate}
                    </span>
                    <span className="text-xs text-slate-500"> /mo</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-base font-bold text-slate-900 tabular-nums">
                      ${tier.reeferRate}
                    </span>
                    <span className="text-xs text-slate-500"> /mo</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-emerald-700 font-mono text-sm">$0.00</div>
                    <div className="text-[11px] text-slate-500">Zero upfront deposit</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-emerald-700 font-mono text-sm">$0.00 / mi</div>
                    <div className="text-[11px] text-slate-500">Unlimited coast-to-coast</div>
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-600">
                    <div className="font-medium text-slate-900">Included</div>
                    <div className="text-[11px] text-slate-500">Whole trailer excl. tires & brake chambers</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => {
                        setSelectedTier(tier.tier);
                        onApplyConfiguration({
                          trailerType: selectedType,
                          modelYearTier: tier.tier,
                          quantity: 1,
                        });
                      }}
                      className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Select Tier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Interactive Estimator and Savings Calculator */}
        <div id="calculator" className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Fleet Cost & Mileage Savings Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Calculate Your Monthly Rental & Zero-Mile Savings
              </h3>
            </div>
            <div className="text-xs text-slate-400 max-w-sm">
              Tailor trailer type, model year tier, and fleet volume. Compare flat rates with zero per-mile charges against typical mileage surcharges.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Trailer Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Trailer Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedType('dry-van')}
                    className={`py-3 px-4 rounded-lg text-left border cursor-pointer transition-all ${
                      selectedType === 'dry-van'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm">53 ft Dry Van</div>
                    <div className="text-xs text-slate-400 mt-0.5">Rates: $650 – $850 / mo</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedType('reefer')}
                    className={`py-3 px-4 rounded-lg text-left border cursor-pointer transition-all ${
                      selectedType === 'reefer'
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm">53 ft Reefer (Refrigerated)</div>
                    <div className="text-xs text-slate-400 mt-0.5">Rates: $1,100 – $1,300 / mo</div>
                  </button>
                </div>
              </div>

              {/* Step 2: Model Year Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Choose Model Year Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.tier;
                    const price = selectedType === 'dry-van' ? tier.dryVanRate : tier.reeferRate;
                    return (
                      <button
                        key={tier.tier}
                        type="button"
                        onClick={() => setSelectedTier(tier.tier)}
                        className={`p-3 rounded-lg text-left border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-amber-400/15 border-amber-400 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-semibold text-slate-400">{tier.label}</div>
                        <div className="text-lg font-mono font-bold text-white mt-1 tabular-nums">
                          ${price}<span className="text-xs font-normal text-slate-400">/mo</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Quantity */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    3. Number of Trailers
                  </label>
                  <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                    {quantity} {quantity === 1 ? 'Trailer' : 'Trailers'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />
                  <div className="flex items-center gap-1.5 shrink-0">
                    {[1, 2, 5, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setQuantity(num)}
                        className={`px-2.5 py-1 text-xs font-mono font-semibold rounded cursor-pointer ${
                          quantity === num
                            ? 'bg-amber-400 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Rental Cost Summary
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white tabular-nums">
                    ${totalMonthlyRate.toLocaleString()}
                    <span className="text-sm font-normal text-slate-400"> / month</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Flat rate for {quantity} × {selectedType === 'dry-van' ? 'Dry Van' : 'Reefer'} ({activeTierObj.label})
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Deposit Due Upfront:</span>
                    <strong className="text-emerald-400 font-mono font-bold">$0.00</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Per-Mile Surcharge:</span>
                    <strong className="text-emerald-400 font-mono font-bold">$0.00 (Unlimited)</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Maintenance:</span>
                    <strong className="text-emerald-400 font-mono font-bold">Included</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Payment Timing:</span>
                    <strong className="text-amber-400 font-medium text-right">Same day after pickup</strong>
                  </div>
                </div>

                {/* Flat-Rate Assurance Callout */}
                <div className="mt-6 p-4 rounded-lg bg-slate-800/70 border border-slate-700/80 text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Trail Edge Rental Terms</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-400">
                    <li>• 100% Flat Monthly Rate with zero mileage limits</li>
                    <li>• No credit holds, bank covenants, or hidden deposits</li>
                    <li>• Customer inspects and selects trailer on-site before payment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    onApplyConfiguration({
                      trailerType: selectedType,
                      modelYearTier: selectedTier,
                      quantity: quantity,
                    })
                  }
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Lock In This Configuration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                >
                  {copiedQuote ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Quote Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Official Quote Summary</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Transfers directly to reservation inquiry. No obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
