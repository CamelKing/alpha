/**
 * Return the last element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
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

export function tail(input: any[]): any {

  if (!Array.isArray(input) || (input.length === 0)) return undefined;
  return input.slice(-1)[0];

}
