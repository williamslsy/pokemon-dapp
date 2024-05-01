import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function firstLetterToUppercase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
