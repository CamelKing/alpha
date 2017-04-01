/**
 * drop array elements on the right and return a new copy of the array
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

export function dropRight(array: any[], count: number = 1): any[] {
  if (!array) return [];
  if (!count || count <= 0) return array;
  if (count >= array.length) return [];
  return array.slice(0, array.length - count);
}
