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
import { AudienceGrid } from './components/AudienceGrid';
import { RentalProcess } from './components/RentalProcess';
import { DocumentsChecklist } from './components/DocumentsChecklist';
import { QuoteForm } from './components/QuoteForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TrailerType, ModelYearTier } from './types';

export default function App() {
  const [selectedTrailerType, setSelectedTrailerType] = useState<TrailerType>('dry-van');
  const [selectedModelTier, setSelectedModelTier] = useState<ModelYearTier>('2020-2023');
  const [trailerQuantity, setTrailerQuantity] = useState<number>(1);

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

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar onReserveClick={scrollToReserve} />

      <main className="flex-grow">
        <Hero
          onCheckRatesClick={scrollToRates}
          onReserveClick={scrollToReserve}
        />

        <KeyTermsBanner />

        <EquipmentShowcase onSelectTrailer={handleSelectTrailerFromEquipment} />

        <PricingCalculator onApplyConfiguration={handleApplyConfigFromCalculator} />

        <AudienceGrid onReserveClick={scrollToReserve} />

        <RentalProcess onReserveClick={scrollToReserve} />

        <DocumentsChecklist />

        <QuoteForm
          initialTrailerType={selectedTrailerType}
          initialModelTier={selectedModelTier}
          initialQuantity={trailerQuantity}
        />

        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
