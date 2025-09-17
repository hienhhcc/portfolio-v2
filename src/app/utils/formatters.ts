import { isThisMonth } from "date-fns";

export function formatWorkStartEndDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions
) {
  if (isThisMonth(date)) {
    return "Now";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    year: "numeric",
    ...options,
  }).format(date);
}
