/** Format a "YYYY-MM" or "YYYY-MM-DD" string as a friendly label. */
export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-");
  const d = new Date(Number(year), Number(month) - 1, 1);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

/**
 * Format a span of months, e.g. "May 2026", "Apr – May 2026", or
 * "Dec 2025 – Jan 2026". Pass a single date (start === end) to get one month.
 */
export function formatMonthRange(start: string, end: string): string {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  if (sy === ey && sm === em) return formatMonthYear(end);

  const startDate = new Date(sy, sm - 1, 1);
  const endDate = new Date(ey, em - 1, 1);
  const endLabel = endDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  // Same year: drop the redundant year from the start label.
  const startLabel = startDate.toLocaleDateString("en-US", {
    month: "long",
    ...(sy === ey ? {} : { year: "numeric" }),
  });
  return `${startLabel} – ${endLabel}`;
}

/** Format a full date "YYYY-MM-DD" as e.g. "12 Apr 2025". */
export function formatFullDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
