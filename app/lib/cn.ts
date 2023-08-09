import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// https://yarnpkg.com/package/tailwind-merge
// https://yarnpkg.com/package/clsx

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
