import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, Shield, Clock, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/trailerData';

interface Depot {
  id: string;
  city: string;
  state: string;
  region: 'South / Texas' | 'Southeast' | 'Midwest' | 'Northeast' | 'West';
  hubName: string;
  dryVanStock: 'High Availability' | 'Available' | 'Limited Stock';
  reeferStock: 'High Availability' | 'Available' | 'Limited Stock';
  yardAccess: string;
  security: string;
  nearInterstate: string;
}

const DEPOTS: Depot[] = [
  {
    id: 'dfw',
    city: 'Dallas / Fort Worth',
    state: 'Texas',
    region: 'South / Texas',
    hubName: 'Trail Edge DFW Logistics Staging Yard',
    dryVanStock: 'High Availability',
    reeferStock: 'High Availability',
    yardAccess: '24/7 Driver Gate Access',
    security: 'Fenced, lighted, electronic access control',
    nearInterstate: 'I-20 / I-35W / I-30 Corridor',
  },
  {
    id: 'atl',
    city: 'Atlanta',
    state: 'Georgia',
    region: 'Southeast',
    hubName: 'Trail Edge Southeast Regional Depot',
    dryVanStock: 'High Availability',
    reeferStock: 'Available',
    yardAccess: '24/7 Driver Gate Access',
    security: 'On-site attendant & secure gate code',
    nearInterstate: 'I-285 / I-85 / I-75 Hub',
  },
  {
    id: 'chi',
    city: 'Chicago / Gary',
    state: 'Illinois / Indiana',
    region: 'Midwest',
    hubName: 'Trail Edge Great Lakes Freight Terminal',
    dryVanStock: 'High Availability',
    reeferStock: 'High Availability',
    yardAccess: '6:00 AM – 10:00 PM Daily',
    security: 'High-security perimeter with guardhouse',
    nearInterstate: 'I-80 / I-94 / I-90 Cross-Dock Zone',
  },
  {
    id: 'mem',
    city: 'Memphis / West Memphis',
    state: 'Tennessee / Arkansas',
    region: 'South / Texas',
    hubName: 'Trail Edge Mid-South Logistics Hub',
    dryVanStock: 'High Availability',
    reeferStock: 'Available',
    yardAccess: '24/7 Driver Gate Access',
    security: 'Commercial staging yard with CCTV monitoring',
    nearInterstate: 'I-40 / I-55 National Freight Hub',
  },
  {
    id: 'col',
    city: 'Columbus',
    state: 'Ohio',
    region: 'Midwest',
    hubName: 'Trail Edge Midwest Crossroads Terminal',
    dryVanStock: 'Available',
    reeferStock: 'Available',
    yardAccess: '24/7 Driver Gate Access',
    security: 'Fully fenced & illuminated commercial yard',
    nearInterstate: 'I-70 / I-71 Distribution Corridor',
  },
  {
    id: 'ont',
    city: 'Ontario / Inland Empire',
    state: 'California',
    region: 'West',
    hubName: 'Trail Edge West Coast Logistics Yard',
    dryVanStock: 'Available',
    reeferStock: 'Limited Stock',
    yardAccess: '6:00 AM – 8:00 PM Mon-Sat',
    security: 'Secured logistics terminal',
    nearInterstate: 'I-10 / I-15 Freight Corridor',
  },
  {
    id: 'hbg',
    city: 'Harrisburg / Allentown',
    state: 'Pennsylvania',
    region: 'Northeast',
    hubName: 'Trail Edge Northeast Freight Depot',
    dryVanStock: 'High Availability',
    reeferStock: 'Available',
    yardAccess: '24/7 Driver Gate Access',
    security: 'Electronic keypad gate & recorded cameras',
    nearInterstate: 'I-81 / I-78 Eastern Seaboard Access',
  },
  {
    id: 'kc',
    city: 'Kansas City',
    state: 'Missouri / Kansas',
    region: 'Midwest',
    hubName: 'Trail Edge Central Staging Yard',
    dryVanStock: 'Available',
    reeferStock: 'Available',
    yardAccess: '24/7 Driver Gate Access',
    security: 'Enclosed heavy truck staging terminal',
    nearInterstate: 'I-35 / I-70 Central Corridor',
  },
];

interface DepotLocationsProps {
  onSelectDepot: (locationName: string) => void;
}

export const DepotLocations: React.FC<DepotLocationsProps> = ({ onSelectDepot }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'South / Texas', 'Midwest', 'Southeast', 'Northeast', 'West'];

  const filteredDepots =
    selectedRegion === 'All'
      ? DEPOTS
      : DEPOTS.filter((depot) => depot.region === selectedRegion);

  return (
    <section id="depots" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Coast-to-Coast Staging Depots
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Regional Trailer Yards & Staging Facilities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Inspect in person, hook up your tractor, and complete same-day payment at our key commercial depots located along major US freight corridors.
            </p>
          </div>

          {/* Direct Dispatch Hotline Contact */}
          <div className="shrink-0 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400">Direct Dispatch Yard Inquiries</div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>{COMPANY_DETAILS.representative}</span>
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-400 hover:underline font-mono">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Region Filter Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-950 rounded-lg border border-slate-800 w-fit">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedRegion === region
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Depots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDepots.map((depot) => (
            <div
              key={depot.id}
              className="bg-slate-950 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {depot.state}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {depot.city}
                    </h3>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                <div className="text-xs text-slate-400 mb-4 line-clamp-1">
                  {depot.hubName}
                </div>

                {/* Stock Status Tags */}
                <div className="space-y-2 mb-5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">53 ft Dry Van:</span>
                    <span
                      className={`font-semibold flex items-center gap-1.5 ${
                        depot.dryVanStock === 'High Availability'
                          ? 'text-emerald-400'
                          : 'text-amber-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${depot.dryVanStock === 'High Availability' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      {depot.dryVanStock}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400">53 ft Reefer:</span>
                    <span
                      className={`font-semibold flex items-center gap-1.5 ${
                        depot.reeferStock === 'High Availability'
                          ? 'text-emerald-400'
                          : depot.reeferStock === 'Available'
                          ? 'text-blue-400'
                          : 'text-amber-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${depot.reeferStock === 'High Availability' ? 'bg-emerald-400' : depot.reeferStock === 'Available' ? 'bg-blue-400' : 'bg-amber-400'}`} />
                      {depot.reeferStock}
                    </span>
                  </div>
                </div>

                {/* Logistics Badges */}
                <div className="space-y-1.5 text-[11px] text-slate-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{depot.nearInterstate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{depot.yardAccess}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{depot.security}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectDepot(`${depot.city}, ${depot.state}`)}
                className="w-full py-2.5 px-3 rounded bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-800 hover:border-amber-400 cursor-pointer"
              >
                <span>Select This Staging Yard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Staging Yard Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Don't see your specific terminal?</strong> Additional drop yards and partner staging locations are available across the 48 contiguous states.
            </span>
          </div>
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="text-amber-400 hover:underline font-semibold shrink-0"
          >
            Call Dispatch for Custom Staging: {COMPANY_DETAILS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
