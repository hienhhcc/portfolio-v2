import { isThisMonth } from "date-fns";

export function formatWorkStartEndDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions
) {
  if (isThisMonth(date)) {
    return "Now";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    ...options,
  }).format(date);
}

export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    // month: "short",
    // year: "numeric",
    ...options,
  }).format(date);
}
