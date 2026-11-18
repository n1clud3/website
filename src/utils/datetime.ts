const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Bratislava",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/**
 * Returns a string of properly formatted date and time.
 * @param datetime The date to format.
 * @returns A string formatted as `YYYY-MM-DD HH:mm`.
 */
export function formatDate(datetime: Date) {
  const parts = Object.fromEntries(
    formatter.formatToParts(datetime).map((p) => [p.type, p.value]),
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}
