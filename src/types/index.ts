export type TrailerType = 'dry-van' | 'reefer';

export type ModelYearTier = '2018-2019' | '2020-2023' | '2024-2025';

export interface PricingTier {
  tier: ModelYearTier;
  label: string;
  dryVanRate: number;
  reeferRate: number;
  deposit: number;
  perMileFee: number;
  maintenanceIncluded: boolean;
  notes: string;
}

export interface TrailerSpec {
  id: TrailerType;
  name: string;
  subtitle: string;
  image: string;
  length: string;
  width: string;
  height: string;
  suspension: string;
  doors: string;
  flooring: string;
  coolingUnit?: string;
  tempRange?: string;
  modelYears: string;
  typicalPayload: string;
  features: string[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  mcNumber: string;
  isNewAuthority: boolean;
  trailerType: TrailerType;
  modelYearTier: ModelYearTier;
  quantity: number;
  pickupState: string;
  targetDate: string;
  durationMonths: number;
  notes: string;
}
