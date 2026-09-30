import React, { useState } from 'react';
import { REQUIRED_DOCUMENTS } from '../data/trailerData';
import { CheckSquare, Square, FileText, ShieldCheck, AlertCircle, Copy, Check } from 'lucide-react';

export const DocumentsChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'CDL Class A': true,
    'COI Form': false,
    'Operating Authority': false,
  });
  const [copiedInstructions, setCopiedInstructions] = useState(false);

  const toggleCheck = (code: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  const insuranceNote = `Please issue Certificate of Insurance (COI) listing Nationwide Trailer Rental as Certificate Holder / Loss Payee. Must include: Commercial Auto Liability ($1M CSL), Physical Damage coverage on non-owned / rented trailer equipment ($35,000 - $50,000 minimum limit), and Trailer Interchange or Non-Owned Trailer endorsement.`;

  const handleCopyInsurance = () => {
    navigator.clipboard.writeText(insuranceNote);
    setCopiedInstructions(true);
    setTimeout(() => setCopiedInstructions(false), 2500);
  };

  return (
    <section id="documents" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Clear Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            Required Documents to Rent
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We keep documentation requirements minimal and streamlined so you can hook up quickly. No endless credit packets or bank statements required.
          </p>
        </div>

        {/* Readiness Progress Bar */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-sm">
              {completedCount}/3
            </div>
            <div>
              <div className="text-sm font-bold text-slate-950">
                Onboarding Readiness Tracker: {completedCount === 3 ? '100% Ready to Hook Up!' : `${completedCount} of 3 Documents Prepared`}
              </div>
              <div className="text-xs text-slate-500">
                Check off the documents you currently have available.
              </div>
            </div>
          </div>

          <div className="w-full sm:w-64 bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-amber-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${(completedCount / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* 3 Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REQUIRED_DOCUMENTS.map((doc) => {
            const isChecked = !!checkedItems[doc.code];
            return (
              <div
                key={doc.code}
                onClick={() => toggleCheck(doc.code)}
                className={`p-6 rounded-xl border transition-all cursor-pointer bg-white flex flex-col justify-between ${
                  isChecked
                    ? 'border-amber-500 shadow-md ring-1 ring-amber-500/30'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      {doc.code}
                    </span>
                    <button
                      type="button"
                      className="text-amber-600 focus:outline-none"
                      aria-label="Toggle document ready state"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-amber-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Checklist details:
                    </div>
                    {doc.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="text-amber-500 font-bold">·</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold flex items-center justify-between">
                  <span className={isChecked ? 'text-emerald-700' : 'text-slate-400'}>
                    {isChecked ? 'Marked as Ready' : 'Click to mark ready'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful Insurance Instruction Helper */}
        <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400 shrink-0" />
              <h4 className="text-sm sm:text-base font-bold text-white">
                Forward to Your Insurance Agent: Sample COI Instructions
              </h4>
            </div>
            <button
              onClick={handleCopyInsurance}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              {copiedInstructions ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedInstructions ? 'Copied to Clipboard!' : 'Copy Insurance Text'}</span>
            </button>
          </div>
          <div className="p-3.5 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto select-all">
            {insuranceNote}
          </div>
        </div>
      </div>
    </section>
  );
};
