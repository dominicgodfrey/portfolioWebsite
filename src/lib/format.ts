/** Format a "YYYY-MM" or "YYYY-MM-DD" string as a friendly label. */
export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-");
  const d = new Date(Number(year), Number(month) - 1, 1);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
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
