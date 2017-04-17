/**
 * Return the initial elements, bar the final element
 * of an array. return as a copy of array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

export function initial(input: any[]): any[] {
  if (!Array.isArray(input) || (input.length === 0)) return undefined;
  return input.slice(0, -1);
}
