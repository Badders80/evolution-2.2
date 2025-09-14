/**
 * Centralized layout utilities for consistent spacing and styling
 * across the Evolution Stables application
 */

// Standard padding classes for consistent layout
export const paddingClasses = "px-4 md:px-6";

// Navigation specific padding
export const navPaddingClasses = "px-4 md:px-6 py-4";

// Container padding for content sections
export const containerPaddingClasses = "px-4 md:px-8 lg:px-12";

// Section spacing
export const sectionSpacingClasses = "py-12 md:py-16 lg:py-20";

// Button spacing in groups
export const buttonGroupSpacing = "space-x-4";

// Layout breakpoints for responsive design
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Common layout patterns
export const layoutPatterns = {
  // Full width container with responsive padding
  fullWidth: "w-full px-4 md:px-6 lg:px-8",
  // Centered container with max width
  centered: "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
  // Grid layouts
  gridResponsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  // Flex layouts
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
} as const;
