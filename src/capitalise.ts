/**
 * Return a new string with first character capitalised.
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} origin - original string to capitalised.
 * @returns {string}
 */

export function capitalise(origin: string): string {
  if (!origin) return origin;
  return origin[0].toUpperCase() + origin.slice(1);
}
