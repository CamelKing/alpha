/**
 * drop array elements on the left and return a new copy of the array
 * while the condition / iteratee is met.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {number} [count=1]
 * @returns {any[]}
 */

import { Direction } from '../constants';
import { _drop } from '../private/_drop';

export function dropWhile(array: any[],
  predicate: any,
  count?: number): any[] {

  return _drop(array, {
    predicate,
    count: count == null ? array.length : count,
    direction: Direction.fromLeft
  });

}
