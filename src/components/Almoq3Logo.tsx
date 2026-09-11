import React from 'react';

interface Almoq3LogoProps {
  className?: string;
  size?: number | string;
  /**
   * 'brand': Authentic brand colors (Navy #12273D + Cyan #00B4F0)
   * 'adaptive': Dark Navy on light backgrounds, Silver/White on dark backgrounds, Cyan preserved
   * 'white': Pure white for solid dark banners
   */
  variant?: 'brand' | 'adaptive' | 'white';
}

/**
 * ALMOQ3 ERP Official Brand Logo
 * Geometric A + 3 symbol
 * Direct reproduction of the official project emblem
 */
export const Almoq3Logo: React.FC<Almoq3LogoProps> = ({
  className = '',
  size = 32,
  variant = 'adaptive'
}) => {
  return (
    <svg
      viewBox="0 0 1000 920"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 select-none ${className}`}
      aria-label="شعار منظومة ALMOQ3 ERP"
    >
      <g>
        {/* 1. Top Cyan Wedge (Upper inner counter of A) */}
        <polygon
          points="404,38 268,332 556,332"
          fill="#00B4F0"
        />

        {/* 2. Bottom-Right Cyan Block (Trapezoid corner) */}
        <polygon
          points="660,756 910,756 1000,918 660,918"
          fill="#00B4F0"
        />

        {/* 3. Dark Navy Right Diagonal Leg & Apex */}
        <path
          d="
            M 500,0
            L 910,756
            L 768,756
            L 576,410
            L 576,332
            L 268,332
            L 404,38
            L 500,0
            Z
          "
          className={
            variant === 'white'
              ? 'fill-white'
              : variant === 'adaptive'
                ? 'fill-[#12273D] dark:fill-[#f5f5f7]'
                : 'fill-[#12273D]'
          }
        />

        {/* 4. Left Leg, Crossbar & Bottom Left Corner of A */}
        <path
          d="
            M 268,332
            L 576,332
            L 576,476
            L 348,476
            L 348,756
            L 405,756
            L 476,918
            L 0,918
            L 186,476
            L 268,332
            Z
          "
          className={
            variant === 'white'
              ? 'fill-white'
              : variant === 'adaptive'
                ? 'fill-[#12273D] dark:fill-[#f5f5f7]'
                : 'fill-[#12273D]'
          }
        />

        {/* 5. Central "3" Glyph */}
        <path
          d="
            M 348,476
            L 602,476
            L 652,554
            L 538,638
            C 614,646 672,688 672,758
            C 672,842 596,894 496,894
            L 438,764
            C 478,764 532,758 532,720
            C 532,684 492,674 446,674
            L 416,634
            L 500,554
            L 348,554
            Z
          "
          className={
            variant === 'white'
              ? 'fill-white'
              : variant === 'adaptive'
                ? 'fill-[#12273D] dark:fill-[#f5f5f7]'
                : 'fill-[#12273D]'
          }
        />
      </g>
    </svg>
  );
};
