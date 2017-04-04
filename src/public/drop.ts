/**
 * drop array elements on the left and return a new copy of the array
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

import { _drop } from '../private/_drop';
export function drop(array: any[], count?: number): any[] {

  if (count === null || count === undefined) count = 1;
  return _drop(array, null, count);

}
