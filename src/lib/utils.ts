import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to concatenate class names conditionally and merge
 * Tailwind classes intelligently.
 *
 * @param inputs - Class values which may be strings, arrays, or objects
 * @returns A single className string
 */
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs));
}
