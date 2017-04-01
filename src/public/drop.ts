/**
 * drop array elements on the left and return a new copy of the array
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

export function drop(array: any[], count: number = 1): any[] {
  if (!array) return [];
  if (!count || count <= 0) return array;
  if (count >= array.length) return [];
  return array.slice(count);
}
