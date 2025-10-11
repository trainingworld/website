import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleWhatsApp = () => {
  window.open(
    "https://wa.me/917838526644?text=Hi, I'd like to know more about Training World!",
    "_blank"
  );
};

export const handleCall = () => {
  window.location.href = "tel:+917838526644";
};

export const handleEmail = () => {
  window.location.href = "mailto:info@trainingworld.com";
};
