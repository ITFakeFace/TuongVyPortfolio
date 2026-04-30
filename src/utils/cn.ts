import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cl(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
