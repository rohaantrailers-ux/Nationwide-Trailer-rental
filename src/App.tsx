/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyTermsBanner } from './components/KeyTermsBanner';
import { EquipmentShowcase } from './components/EquipmentShowcase';
import { PricingCalculator } from './components/PricingCalculator';
import { DepotLocations } from './components/DepotLocations';
import { AudienceGrid } from './components/AudienceGrid';
import { RentalProcess } from './components/RentalProcess';
import { DocumentsChecklist } from './components/DocumentsChecklist';
import { QuoteForm } from './components/QuoteForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TrailerType, ModelYearTier } from './types';
import { COMPANY_DETAILS } from './data/trailerData';
import { Phone, ArrowRight } from 'lucide-react';

export default function App() {
  const [selectedTrailerType, setSelectedTrailerType] = useState<TrailerType>('dry-van');
  const [selectedModelTier, setSelectedModelTier] = useState<ModelYearTier>('2020-2023');
  const [trailerQuantity, setTrailerQuantity] = useState<number>(1);
  const [selectedLocation, setSelectedLocation] = useState<string>('Texas (TX)');

  const scrollToReserve = () => {
    const el = document.getElementById('reserve');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRates = () => {
    const el = document.getElementById('rates');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTrailerFromEquipment = (type: TrailerType) => {
    setSelectedTrailerType(type);
    scrollToReserve();
  };

  const handleApplyConfigFromCalculator = (config: {
    trailerType: TrailerType;
    modelYearTier: ModelYearTier;
    quantity: number;
  }) => {
    setSelectedTrailerType(config.trailerType);
    setSelectedModelTier(config.modelYearTier);
    setTrailerQuantity(config.quantity);
    scrollToReserve();
  };

  const handleSelectDepot = (location: string) => {
    setSelectedLocation(location);
    scrollToReserve();
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 pb-16 sm:pb-0">
      <Navbar onReserveClick={scrollToReserve} />

      <main className="flex-grow">
        <Hero
          onCheckRatesClick={scrollToRates}
          onReserveClick={scrollToReserve}
        />

        <KeyTermsBanner />

        <EquipmentShowcase onSelectTrailer={handleSelectTrailerFromEquipment} />

        <PricingCalculator onApplyConfiguration={handleApplyConfigFromCalculator} />

        <DepotLocations onSelectDepot={handleSelectDepot} />

        <AudienceGrid onReserveClick={scrollToReserve} />

        <RentalProcess onReserveClick={scrollToReserve} />

        <DocumentsChecklist />

        <QuoteForm
          initialTrailerType={selectedTrailerType}
          initialModelTier={selectedModelTier}
          initialQuantity={trailerQuantity}
          initialLocation={selectedLocation}
        />

        <FaqSection />
      </main>

      {/* Floating Mobile Fast-Contact Dispatch Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#061426]/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden flex items-center gap-2">
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Dispatch ({COMPANY_DETAILS.representative})</span>
        </a>
        <button
          onClick={scrollToReserve}
          className="flex-1 py-2.5 px-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <span>Reserve Unit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
