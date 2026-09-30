import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  // Height presets
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 160 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto ${className}`}
        aria-label="Nationwide Trailer Rentals Logo Mark"
      >
        {/* Speed arcs */}
        {/* Top white arc */}
        <path
          d="M 5 58 C 15 25, 45 6, 95 6 C 75 14, 52 26, 38 46 C 30 57, 18 63, 5 58 Z"
          fill="#FFFFFF"
        />
        {/* Middle vibrant red arc */}
        <path
          d="M 12 60 C 26 34, 58 18, 102 18 C 82 25, 60 36, 44 54 C 36 63, 24 65, 12 60 Z"
          fill="#EF4444"
        />
        {/* Lower white arc */}
        <path
          d="M 22 62 C 38 45, 68 33, 105 32 C 90 38, 72 47, 56 60 C 45 68, 32 67, 22 62 Z"
          fill="#FFFFFF"
        />

        {/* Speed lines under truck */}
        <path d="M 35 68 L 75 68" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M 45 72 L 85 72" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" />

        {/* Commercial Semi-Truck Cab (Front 3/4 side profile) */}
        {/* Cab Roof Fairing / Deflector */}
        <path
          d="M 92 12 C 96 11, 104 11, 110 14 L 118 20 L 116 28 L 92 28 Z"
          fill="#FFFFFF"
        />
        {/* Sleeper & Main Cab Body */}
        <path
          d="M 90 26 L 118 26 L 122 36 L 140 43 L 144 52 L 144 65 L 138 65 L 138 58 C 138 54, 130 54, 130 58 L 130 65 L 115 65 L 115 58 C 115 54, 107 54, 107 58 L 107 65 L 88 65 L 88 30 C 88 27, 89 26, 90 26 Z"
          fill="#FFFFFF"
        />

        {/* Chrome / Black details on Cab */}
        {/* Windshield */}
        <path
          d="M 119 28 L 124 37 L 134 42 L 134 32 L 122 28 Z"
          fill="#0B1B2F"
        />
        {/* Side Door Window */}
        <path
          d="M 110 30 L 118 30 L 118 42 L 110 42 Z"
          fill="#0B1B2F"
        />
        {/* Door line & handle */}
        <line x1="108" y1="44" x2="108" y2="58" stroke="#0B1B2F" strokeWidth="1.5" />
        <rect x="111" y="46" width="3" height="1" fill="#0B1B2F" />

        {/* Front Hood & Grille */}
        <path
          d="M 136 44 L 143 47 L 144 58 L 138 58 L 136 50 Z"
          fill="#E2E8F0"
        />
        {/* Grille slats */}
        <line x1="141" y1="49" x2="141" y2="57" stroke="#0B1B2F" strokeWidth="1" />
        <line x1="143" y1="50" x2="143" y2="57" stroke="#0B1B2F" strokeWidth="1" />
        {/* Headlight */}
        <rect x="141" y="58" width="3" height="2" rx="0.5" fill="#FBBF24" />
        {/* Front Chrome Bumper */}
        <path d="M 136 62 L 147 62 L 146 66 L 136 66 Z" fill="#CBD5E1" />

        {/* Vertical Exhaust Stack behind cab */}
        <rect x="91" y="8" width="2.5" height="22" fill="#E2E8F0" />
        <path d="M 91 8 C 91 6, 93.5 5, 96 5" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

        {/* Front Wheel */}
        <circle cx="134" cy="62" r="6.5" fill="#0B1B2F" />
        <circle cx="134" cy="62" r="3.5" fill="#E2E8F0" />
        <circle cx="134" cy="62" r="1.5" fill="#0B1B2F" />

        {/* Rear Tandem Wheel */}
        <circle cx="111" cy="62" r="6.5" fill="#0B1B2F" />
        <circle cx="111" cy="62" r="3.5" fill="#E2E8F0" />
        <circle cx="111" cy="62" r="1.5" fill="#0B1B2F" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Truck and Swooshes SVG mark */}
      <svg
        viewBox="0 0 155 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto shrink-0 drop-shadow-sm`}
        aria-hidden="true"
      >
        {/* Speed arcs */}
        {/* Top white arc */}
        <path
          d="M 4 54 C 14 24, 44 6, 92 6 C 72 13, 50 25, 36 44 C 28 53, 16 59, 4 54 Z"
          fill="#FFFFFF"
        />
        {/* Middle vibrant red arc */}
        <path
          d="M 11 56 C 25 32, 56 16, 98 16 C 79 23, 58 34, 42 51 C 34 60, 22 62, 11 56 Z"
          fill="#EF4444"
        />
        {/* Lower white arc */}
        <path
          d="M 20 58 C 36 42, 65 30, 101 29 C 86 35, 69 44, 54 57 C 43 65, 30 64, 20 58 Z"
          fill="#FFFFFF"
        />

        {/* Speed lines under truck */}
        <path d="M 32 64 L 72 64" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" />
        <path d="M 42 68 L 80 68" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" />

        {/* Commercial Semi-Truck Cab (Front 3/4 side profile) */}
        {/* Cab Roof Fairing / Deflector */}
        <path
          d="M 88 12 C 92 11, 100 11, 106 14 L 114 20 L 112 27 L 88 27 Z"
          fill="#FFFFFF"
        />
        {/* Sleeper & Main Cab Body */}
        <path
          d="M 86 25 L 114 25 L 118 35 L 136 42 L 140 50 L 140 62 L 134 62 C 134 56, 126 56, 126 62 L 112 62 C 112 56, 104 56, 104 62 L 86 62 L 86 28 C 86 26, 87 25, 86 25 Z"
          fill="#FFFFFF"
        />

        {/* Chrome / Black details on Cab */}
        {/* Windshield */}
        <path
          d="M 115 27 L 120 35 L 130 40 L 130 30 L 118 26 Z"
          fill="#0B1B2F"
        />
        {/* Side Door Window */}
        <path
          d="M 106 28 L 114 28 L 114 39 L 106 39 Z"
          fill="#0B1B2F"
        />
        {/* Door handle */}
        <rect x="107" y="43" width="3" height="1.5" fill="#0B1B2F" />

        {/* Front Hood & Grille */}
        <path
          d="M 132 43 L 139 46 L 140 55 L 134 55 L 132 48 Z"
          fill="#F1F5F9"
        />
        {/* Grille slats */}
        <line x1="137" y1="47" x2="137" y2="54" stroke="#0B1B2F" strokeWidth="1" />
        <line x1="139" y1="48" x2="139" y2="54" stroke="#0B1B2F" strokeWidth="1" />
        {/* Headlight */}
        <rect x="137" y="55" width="2.5" height="1.5" rx="0.5" fill="#FBBF24" />
        {/* Front Bumper */}
        <path d="M 132 58 L 143 58 L 142 62 L 132 62 Z" fill="#CBD5E1" />

        {/* Vertical Exhaust Stack behind cab */}
        <rect x="87" y="8" width="2.5" height="20" fill="#E2E8F0" />
        <path d="M 87 8 C 87 6, 89.5 5, 92 5" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

        {/* Front Wheel */}
        <circle cx="130" cy="59" r="6" fill="#0B1B2F" />
        <circle cx="130" cy="59" r="3.2" fill="#E2E8F0" />
        <circle cx="130" cy="59" r="1.3" fill="#0B1B2F" />

        {/* Rear Wheel */}
        <circle cx="108" cy="59" r="6" fill="#0B1B2F" />
        <circle cx="108" cy="59" r="3.2" fill="#E2E8F0" />
        <circle cx="108" cy="59" r="1.3" fill="#0B1B2F" />
      </svg>

      {/* Typography: Line 1 NATIONWIDE, Line 2 TRAILER RENTALS (USA) */}
      <div className="flex flex-col justify-center leading-none text-left">
        <span className="font-black tracking-tight text-white uppercase text-base sm:text-lg md:text-xl font-sans">
          NATIONWIDE
        </span>
        <span className="font-bold tracking-wider text-slate-200 uppercase text-[9px] sm:text-[10px] md:text-[11px] mt-0.5 sm:mt-1 font-sans">
          TRAILER RENTALS (USA)
        </span>
      </div>
    </div>
  );
};
