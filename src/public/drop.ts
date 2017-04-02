/**
 * drop array elements on the left and return a new copy of the array
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

import { Drop } from '../_constants';
import { _drop } from '../private/_drop';

export function drop(array: any[], count?: number): any[] {

  if (count === null || count === undefined) count = 1;
  return _drop(array, null, count);

}
