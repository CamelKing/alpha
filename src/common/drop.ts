/**
 * drop array elements on the left and return a new copy of the array
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {any[]} array
 * @param {number} [count]
 * @returns {any[]}
 */

import { _drop } from '../base/_drop';

export function drop(array: any[], count?: number): any[] {

  return _drop(array, { count: count == null ? 1 : count });

}
