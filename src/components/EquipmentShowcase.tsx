import React, { useState } from 'react';
import { Check, Shield, Snowflake, Box, ArrowRight, Gauge, Layers, SlidersHorizontal } from 'lucide-react';
import { TRAILER_SPECS } from '../data/trailerData';
import { TrailerType } from '../types';

interface EquipmentShowcaseProps {
  onSelectTrailer: (type: TrailerType) => void;
}

export const EquipmentShowcase: React.FC<EquipmentShowcaseProps> = ({ onSelectTrailer }) => {
  const [activeTab, setActiveTab] = useState<TrailerType>('dry-van');

  const currentSpec = TRAILER_SPECS[activeTab];

  return (
    <section id="equipment" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
            Commercial Fleet Equipment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            Commercial-Grade 53 ft Dry Vans & Reefer Trailers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            All trailers are commercial-grade, air-ride equipped, and fitted with heavy-duty swing doors. Model years generally range from 2018 to 2025 across key nationwide depots.
          </p>
        </div>

        {/* Interactive Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-200/80 rounded-lg max-w-md">
          <button
            onClick={() => setActiveTab('dry-van')}
            className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'dry-van'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Box className="w-4 h-4 text-amber-600" />
            <span>53 ft Dry Van</span>
          </button>
          <button
            onClick={() => setActiveTab('reefer')}
            className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'reefer'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Snowflake className="w-4 h-4 text-blue-600" />
            <span>53 ft Reefer (Refrigerated)</span>
          </button>
        </div>

        {/* Featured Equipment Showcase Card */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Column (5 cols) */}
            <div className="lg:col-span-5 relative bg-slate-100 min-h-[320px] lg:min-h-[460px] flex items-center justify-center overflow-hidden">
              <img
                src={currentSpec.image}
                alt={currentSpec.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold text-slate-950 bg-amber-400 rounded shadow-sm">
                  Model Years {currentSpec.modelYears}
                </span>
              </div>
            </div>

            {/* Spec Details Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Commercial 53 ft Specification
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    Air Ride · Swing Doors · Heavy Duty
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-2">
                  {currentSpec.name}
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {currentSpec.subtitle}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <div className="text-slate-400 uppercase font-medium text-[10px]">Length / Width</div>
                    <div className="font-bold text-slate-900 mt-0.5">{currentSpec.length} × {currentSpec.width}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-medium text-[10px]">Suspension</div>
                    <div className="font-bold text-slate-900 mt-0.5">{currentSpec.suspension}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-medium text-[10px]">Door Type</div>
                    <div className="font-bold text-slate-900 mt-0.5">{currentSpec.doors}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-medium text-[10px]">Flooring</div>
                    <div className="font-bold text-slate-900 mt-0.5">{currentSpec.flooring}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase font-medium text-[10px]">Model Years</div>
                    <div className="font-bold text-slate-900 mt-0.5">{currentSpec.modelYears}</div>
                  </div>
                  {currentSpec.coolingUnit ? (
                    <div>
                      <div className="text-slate-400 uppercase font-medium text-[10px]">Cooling System</div>
                      <div className="font-bold text-blue-700 mt-0.5">{currentSpec.coolingUnit}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-slate-400 uppercase font-medium text-[10px]">Cargo Capacity</div>
                      <div className="font-bold text-slate-900 mt-0.5">{currentSpec.typicalPayload}</div>
                    </div>
                  )}
                </div>

                {/* Key Features Bullet Points */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Equipment Features & Standard Equipment
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {currentSpec.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Rates start at </span>
                  <strong className="text-slate-950 font-mono text-base font-bold">
                    {activeTab === 'dry-van' ? '$650' : '$1,100'}
                  </strong>
                  <span> / month flat rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectTrailer(activeTab)}
                    className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Reserve {activeTab === 'dry-van' ? 'Dry Van' : 'Reefer'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side by side mini summary cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">53 ft Dry Van</span>
                <span className="text-xs font-mono font-bold text-slate-900">$650 – $850 / mo</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Ideal for general dry freight, palletized consumer goods, auto parts, paper, and non-perishables. Air ride suspension protects high-value freight.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('dry-van');
                onSelectTrailer('dry-van');
              }}
              className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>Get Dry Van Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">53 ft Reefer</span>
                <span className="text-xs font-mono font-bold text-slate-900">$1,100 – $1,300 / mo</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Engineered for produce, meats, frozen goods, pharmaceuticals, and temperature-sensitive chemicals with continuous digital climate management.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('reefer');
                onSelectTrailer('reefer');
              }}
              className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
            >
              <span>Get Reefer Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
