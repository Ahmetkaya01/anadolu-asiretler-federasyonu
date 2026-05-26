import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind sınıflarını güvenli şekilde birleştirir */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
