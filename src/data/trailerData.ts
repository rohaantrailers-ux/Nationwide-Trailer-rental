import { PricingTier, TrailerSpec } from '../types';
import dryVanImage from '../assets/images/trailer_dry_van_1790796409750.jpg';
import reeferImage from '../assets/images/trailer_reefer_1790796421668.jpg';

export const COMPANY_DETAILS = {
  name: 'Nationwide Trailer Rental',
  representative: 'Darvis',
  email: 'Darviss@pressurepathwayinc.com',
  phone: '+1 325 266 1801',
  phoneDisplay: '(325) 266-1801',
  availability: 'Coast-to-Coast Nationwide Inventory',
  paymentTerms: 'Payment made same day after trailer inspection and pickup',
  deposit: '$0 (No deposit required)',
  mileage: 'Unlimited (No per-mile charges)',
  maintenance: 'Included (covers whole trailer except tires & brake chambers)',
};

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: '2018-2019',
    label: '2018 – 2019 Model Years',
    dryVanRate: 650,
    reeferRate: 1100,
    deposit: 0,
    perMileFee: 0,
    maintenanceIncluded: true,
    notes: 'Well-maintained, commercial-grade equipment tested for high-volume freight.',
  },
  {
    tier: '2020-2023',
    label: '2020 – 2023 Model Years',
    dryVanRate: 750,
    reeferRate: 1200,
    deposit: 0,
    perMileFee: 0,
    maintenanceIncluded: true,
    notes: 'Modern air-ride units with low hours and contemporary aero skirting.',
  },
  {
    tier: '2024-2025',
    label: '2024 – 2025 Model Years',
    dryVanRate: 850,
    reeferRate: 1300,
    deposit: 0,
    perMileFee: 0,
    maintenanceIncluded: true,
    notes: 'Late-model trailers with optimal fuel efficiency and peak reefer performance.',
  },
];

export const TRAILER_SPECS: Record<'dry-van' | 'reefer', TrailerSpec> = {
  'dry-van': {
    id: 'dry-van',
    name: '53 ft Dry Van Commercial Trailer',
    subtitle: 'Standard dry freight workhorse with air-ride suspension and commercial swing doors',
    image: dryVanImage,
    length: '53 ft (636 inches)',
    width: '102 inches standard',
    height: '13 ft 6 inches overall',
    suspension: 'Air-Ride Tandem Slider Suspension',
    doors: 'Heavy-Duty Commercial Swing Doors (Dual Cam Locks)',
    flooring: '1-3/8" Laminated Hardwood with anti-skid surface',
    modelYears: '2018 – 2025',
    typicalPayload: 'Up to 45,000 lbs (subject to tractor tare weight)',
    features: [
      '53 ft commercial-grade dry van',
      'Air ride suspension for freight protection',
      'Heavy-duty swing doors with weather-tight seals',
      'Logistics E-track posts on 16" / 24" centers',
      'Translucent or aluminum roof with anti-snag lining',
      'Heavy-duty scuff liner on sidewalls',
      'Inspected and road-ready before pickup',
    ],
  },
  'reefer': {
    id: 'reefer',
    name: '53 ft Refrigerated (Reefer) Trailer',
    subtitle: 'High-cube temperature-controlled trailer for frozen, chilled, and sensitive freight',
    image: reeferImage,
    length: '53 ft (636 inches)',
    width: '102 inches (insulated composite walls)',
    height: '13 ft 6 inches overall',
    suspension: 'Air-Ride Tandem Slider Suspension',
    doors: 'Thermally Insulated Swing Doors with multi-lip gaskets',
    flooring: 'Heavy-Duty Duct-Type Aluminum T-Floor for optimum airflow',
    coolingUnit: 'Carrier Transicold / Thermo King High-Output Unit',
    tempRange: '-20°F to +70°F continuous setpoint',
    modelYears: '2018 – 2025',
    typicalPayload: 'Up to 43,500 lbs (insulated tare weight)',
    features: [
      '53 ft temperature-controlled refrigerated trailer',
      'High-performance Carrier or Thermo King refrigeration unit',
      'Air ride suspension for delicate temperature-controlled cargo',
      'Deep duct aluminum T-flooring for balanced cold airflow',
      'Multi-lip silicone door seals preventing temperature loss',
      'Continuous return air bulkheads & digital microprocessor controls',
      'Full pre-trip inspection completed prior to yard handover',
    ],
  },
};

export const AUDIENCES = [
  {
    title: 'Trucking Companies',
    description: 'Scale fleet capacity quickly without taking on multimillion-dollar debt or long bank lease covenants.',
  },
  {
    title: 'Motor Carriers',
    description: 'Keep your active power units rolling and seize spot-market or contract freight surges with ready trailers.',
  },
  {
    title: 'Owner-Operators',
    description: 'Take home more revenue with flat-rate rentals: zero deposit, no per-mile charges, and maintenance included.',
  },
  {
    title: 'Fleet Owners',
    description: 'Balance dry van and reefer ratios across multiple regional terminals without capital lockup.',
  },
  {
    title: 'New Authorities (New MCs)',
    description: 'Most traditional leasing companies require 12–24 months active authority. We welcome new authorities with simple documentation.',
  },
  {
    title: 'Logistics Companies & Shippers',
    description: 'Dedicated yard-drop or pop-up distribution capacity for seasonal volume, warehousing, and peak freight periods.',
  },
];

export const RENTAL_ADVANTAGES = [
  {
    title: 'Monthly Flat-Rate Rentals',
    description: 'Predictable, budget-friendly monthly expenses with no hidden surcharges or surprise billing cycles.',
  },
  {
    title: 'No Deposit Required',
    description: 'Put $0 down to get hooked up. Protect your operating cash flow for diesel, insurance, and payroll.',
  },
  {
    title: 'No Per-Mile Charges',
    description: 'Run coast-to-coast as many miles as your logbook allows. We never charge hubodometer or mileage fees.',
  },
  {
    title: 'Maintenance Included',
    description: 'Comprehensive maintenance coverage protects the whole trailer from landing gear to air lines (excludes tires & brake chambers).',
  },
  {
    title: 'Customer Inspects & Selects',
    description: 'You walk the yard, personally inspect the trailer, test the doors and landing gear, and choose the specific unit you want.',
  },
  {
    title: 'Pay After Pickup (Same Day)',
    description: 'Pay nothing upfront. After you verify the trailer in person and hook up to your tractor, payment is settled that same day.',
  },
];

export const REQUIRED_DOCUMENTS = [
  {
    name: 'Valid Commercial Driver’s License (CDL)',
    code: 'CDL Class A',
    description: 'Legible copy of the primary driver or authorized representative CDL.',
    requirements: ['Must be current and non-expired', 'Class A endorsement', 'Front and back copy'],
  },
  {
    name: 'Certificate of Insurance (COI)',
    code: 'COI Form',
    description: 'Commercial auto liability and physical damage coverage protecting non-owned / rented equipment.',
    requirements: [
      'Auto Liability ($1,000,000 combined single limit standard)',
      'Physical Damage coverage ($35k - $50k+ per unit)',
      'Trailer Interchange or Non-Owned Trailer coverage',
      'Nationwide Trailer Rental listed as Certificate Holder / Loss Payee',
    ],
  },
  {
    name: 'MC Authority Letter (or DOT)',
    code: 'Operating Authority',
    description: 'Federal Motor Carrier Safety Administration (FMCSA) active authority verification.',
    requirements: [
      'FMCSA Authority certificate letter',
      'Active DOT / MC status',
      'New Authorities are welcomed and accepted',
    ],
  },
];

export const FAQS = [
  {
    question: 'How does the "Pay After Pickup" policy work?',
    answer: 'We believe in mutual trust and transparency. You do not make payment before arriving. You come to our designated staging yard, inspect the available trailers, choose your unit, and hook up your tractor. Once you are satisfied and ready to roll, payment is completed the same day of pickup.',
  },
  {
    question: 'Do you rent to New Authorities (brand new MC numbers)?',
    answer: 'Yes! Unlike many national leasing conglomerates that require 1–2 years in business, Nationwide Trailer Rental actively works with new authorities. As long as you have your active MC/DOT, a valid Class A CDL, and a compliant Certificate of Insurance (COI), you are eligible.',
  },
  {
    question: 'What does the included maintenance cover?',
    answer: 'Maintenance covers routine structural and mechanical components of the trailer including air ride bags, suspension bushings, lights, wiring harnesses, glad hands, landing gear, door hinges, and scheduled reefer servicing. The only items the customer is responsible for are tires (punctures/blowouts/wear) and brake chambers.',
  },
  {
    question: 'Are there any hidden mileage fees or hubodometer checks?',
    answer: 'None. All our monthly rates are 100% flat rate with zero per-mile charges. Whether you run 4,000 miles a month or 14,000 miles cross-country, your monthly trailer rental rate remains exactly the same.',
  },
  {
    question: 'What model years are available and what is the rate difference?',
    answer: 'We stock trailers ranging from 2018 to 2025. Dry Vans rent for $650/mo (2018–2019), $750/mo (2020–2023), and $850/mo (2024–2025). Reefers rent for $1,100/mo (2018–2019), $1,200/mo (2020–2023), and $1,300/mo (2024–2025). Availability varies by location and current depot inventory.',
  },
  {
    question: 'How do I pick up the trailer?',
    answer: 'After submitting your required documents (CDL, COI, MC Letter) and confirming trailer availability with Darvis, you dispatch your tractor to the agreed staging yard, perform your pre-trip walk-around inspection, hook up, complete same-day payment, and dispatch onto the road.',
  },
  {
    question: 'How do I start a reservation or check current yard availability?',
    answer: 'You can submit the quote form on this page, or reach out directly to representative Darvis by phone at +1 325 266 1801 or email at Darviss@pressurepathwayinc.com. We respond promptly with available inventory by location.',
  },
];
