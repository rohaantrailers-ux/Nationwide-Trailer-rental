import React, { useState } from 'react';
import { COMPANY_DETAILS, PRICING_TIERS } from '../data/trailerData';
import { TrailerType, ModelYearTier, QuoteFormData } from '../types';
import { Phone, Mail, Send, CheckCircle2, Copy, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Logo } from './Logo';

interface QuoteFormProps {
  initialTrailerType?: TrailerType;
  initialModelTier?: ModelYearTier;
  initialQuantity?: number;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialTrailerType = 'dry-van',
  initialModelTier = '2020-2023',
  initialQuantity = 1,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    mcNumber: '',
    isNewAuthority: false,
    trailerType: initialTrailerType,
    modelYearTier: initialModelTier,
    quantity: initialQuantity,
    pickupState: 'Texas (TX)',
    targetDate: '',
    durationMonths: 3,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      trailerType: initialTrailerType,
      modelYearTier: initialModelTier,
      quantity: initialQuantity,
    }));
  }, [initialTrailerType, initialModelTier, initialQuantity]);

  const activeTierObj = PRICING_TIERS.find((t) => t.tier === formData.modelYearTier) || PRICING_TIERS[1];
  const unitRate = formData.trailerType === 'dry-van' ? activeTierObj.dryVanRate : activeTierObj.reeferRate;
  const estimatedTotal = unitRate * formData.quantity;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'A valid email address is required';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company / Carrier name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const generateSummaryText = () => {
    return `Nationwide Trailer Rental Inquiry:
Contact: ${formData.fullName} (${formData.companyName})
Phone: ${formData.phone}
Email: ${formData.email}
MC/DOT: ${formData.mcNumber || 'Pending / New Authority'}
Trailer Type: ${formData.trailerType === 'dry-van' ? '53 ft Dry Van' : '53 ft Reefer'}
Model Year Tier: ${formData.modelYearTier}
Quantity: ${formData.quantity} unit(s)
Target Pickup: ${formData.targetDate || 'ASAP'}
Location: ${formData.pickupState}
Est. Flat Rate: $${estimatedTotal}/month ($0 Deposit, Unlimited Miles)
Notes: ${formData.notes || 'None'}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const mailtoUrl = `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(
    `Trailer Rental Inquiry - ${formData.companyName || formData.fullName}`
  )}&body=${encodeURIComponent(generateSummaryText())}`;

  return (
    <section id="reserve" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Trailer Reservation & Inventory Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Reserve Equipment or Check Local Depot Inventory
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out your details below to check available 53ft trailers in your region. Our representative Darvis will confirm staging yard availability promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="flex justify-center mb-2">
                  <Logo variant="full" size="md" />
                </div>
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry for{' '}
                    <strong className="text-amber-400 font-mono">
                      {formData.quantity} × {formData.trailerType === 'dry-van' ? '53 ft Dry Van' : '53 ft Reefer'}
                    </strong>{' '}
                    has been submitted to representative <strong className="text-white">Darvis</strong>.
                  </p>
                </div>

                {/* Instant Actions */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-3">
                  <div className="font-semibold text-amber-400 uppercase tracking-wider">
                    Need Immediate Dispatch or Same-Day Pickup?
                  </div>
                  <p className="text-slate-300">
                    You can contact Darvis directly by phone right now or forward your equipment details via email.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      className="px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded flex items-center gap-1.5 hover:bg-amber-300 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Darvis: {COMPANY_DETAILS.phoneDisplay}</span>
                    </a>
                    <a
                      href={mailtoUrl}
                      className="px-4 py-2 bg-slate-800 text-slate-200 font-semibold rounded flex items-center gap-1.5 hover:bg-slate-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Inquiry Direct</span>
                    </a>
                    <button
                      onClick={handleCopySummary}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded flex items-center gap-1.5 hover:text-white cursor-pointer"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Copied' : 'Copy Summary'}</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Submit another reservation inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Miller"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.fullName ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Company / Carrier Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Freight LLC"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.companyName ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (555) 000-0000"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.phone ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. dispatch@carrier.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* MC/DOT & New Authority */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      MC or USDOT Number
                    </label>
                    <input
                      type="text"
                      value={formData.mcNumber}
                      onChange={(e) => setFormData({ ...formData, mcNumber: e.target.value })}
                      placeholder="e.g. MC-1234567"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div className="pt-2 sm:pt-6">
                    <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.isNewAuthority}
                        onChange={(e) => setFormData({ ...formData, isNewAuthority: e.target.checked })}
                        className="rounded border-slate-700 text-amber-400 focus:ring-amber-400 w-4 h-4 bg-slate-900"
                      />
                      <span>We are a New Authority (Under 12 months)</span>
                    </label>
                  </div>
                </div>

                {/* Trailer Type & Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Trailer Type
                    </label>
                    <select
                      value={formData.trailerType}
                      onChange={(e) => setFormData({ ...formData, trailerType: e.target.value as TrailerType })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                    >
                      <option value="dry-van">53 ft Dry Van ($650 – $850/mo)</option>
                      <option value="reefer">53 ft Reefer ($1,100 – $1,300/mo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Model Year Tier
                    </label>
                    <select
                      value={formData.modelYearTier}
                      onChange={(e) => setFormData({ ...formData, modelYearTier: e.target.value as ModelYearTier })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                    >
                      <option value="2018-2019">2018 – 2019 Model Year</option>
                      <option value="2020-2023">2020 – 2023 Model Year</option>
                      <option value="2024-2025">2024 – 2025 Model Year</option>
                    </select>
                  </div>
                </div>

                {/* Quantity, Location & Target Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Trailer Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value, 10) || 1 })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Pickup Region / State
                    </label>
                    <input
                      type="text"
                      value={formData.pickupState}
                      onChange={(e) => setFormData({ ...formData, pickupState: e.target.value })}
                      placeholder="e.g. Dallas TX / Chicago IL"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Target Pickup Date
                    </label>
                    <input
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Specific Freight Needs or Route Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide any details about your freight requirements, timing, or fleet specifications..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Verifying Depot Availability...</span>
                  ) : (
                    <>
                      <span>Submit Trailer Reservation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                Direct Sales Representative
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Speak Directly with Darvis
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Avoid call centers and automated phone trees. Connect directly with our representative for real-time inventory checks across all nationwide staging locations.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors flex items-center gap-3 text-white group"
                >
                  <div className="w-9 h-9 rounded bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Direct Phone</div>
                    <div className="font-mono text-sm font-bold group-hover:text-amber-300">
                      {COMPANY_DETAILS.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors flex items-center gap-3 text-white group"
                >
                  <div className="w-9 h-9 rounded bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Official Email</div>
                    <div className="text-xs font-mono text-slate-200 group-hover:text-amber-300 truncate">
                      {COMPANY_DETAILS.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Guarantees Box */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No deposit required to hold inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Inspect trailer thoroughly on-site prior to payout</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Payment settled same day after equipment pickup</span>
                </div>
              </div>
            </div>

            {/* Quick Pricing Recall Card */}
            <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800 text-xs">
              <div className="font-semibold text-slate-300 mb-2 uppercase tracking-wider text-[11px]">
                Monthly Flat Rate Reference
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400">2018–2019</div>
                  <div className="font-mono font-bold text-amber-400 mt-0.5">$650 / $1.1k</div>
                </div>
                <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400">2020–2023</div>
                  <div className="font-mono font-bold text-amber-400 mt-0.5">$750 / $1.2k</div>
                </div>
                <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400">2024–2025</div>
                  <div className="font-mono font-bold text-amber-400 mt-0.5">$850 / $1.3k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
