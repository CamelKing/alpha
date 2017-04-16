/**
 * drop array elements on the left and return a new copy of the array
 * while the condition / predicate is met.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {any[]} array
 * @param {*} predicate
 * @param {number} [count]
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
