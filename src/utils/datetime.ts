/**
 * Returns a string of properly formatted date and time.
 * @param date The date to format.
 * @returns A string of properly formatted date and time.
 */
export function formatDate(datetime: Date) {
    const date = `${datetime.getFullYear()}-${datetime.getMonth().toString().padStart(2, "0")}-${datetime.getDay().toString().padStart(2, "0")}`;
    const time = `${datetime.getHours()}:${datetime.getMinutes().toString().padStart(2, "0")}`;
    const dt = date + " " + time;
    return dt;
}