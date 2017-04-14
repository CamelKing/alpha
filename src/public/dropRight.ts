/**
 * drop array elements on the right and return a new copy of the array
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

export function dropRight(array: any[], count?: number): any[] {

  return _drop(array, {
    count: count == null ? 1 : count,
    direction: Direction.fromRight
  });

}
