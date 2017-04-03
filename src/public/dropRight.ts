/**
 * drop array elements on the right and return a new copy of the array
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

import { Drop } from '../_constants';
import { _drop } from '../private/_drop';

export function dropRight(array: any[], count: number = 1): any[] {

  if (count === null || count === undefined) count = 1;
  return _drop(array, null, count, Drop.fromRight);

}