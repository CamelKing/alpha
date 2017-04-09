/**
 * Return the initial elements, bar the final element
 * of an array. return as a copy of array.
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

export function initial(input: any[]): any[] {
  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return undefined;
  return input.slice(0, -1);
}
