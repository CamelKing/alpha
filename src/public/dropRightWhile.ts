/**
 * drop array elements on the right and return a new copy of the array
 * while the condition / predicate is met.
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

import { Drop } from '../_constants';
import { _drop } from '../private/_drop';

export function dropRightWhile(array: any[],
  predicate: any,
  maxDrop?: number): any[] {

  return _drop(array, predicate, maxDrop, Drop.fromRight);

}
