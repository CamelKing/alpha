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

import { _Direction } from '../_constants';
import { _drop } from '../private/_drop';

export function dropRight(array: any[], count: number = 1): any[] {

  if (count === null || count === undefined) count = 1;
  return _drop(array, null, count, _Direction.fromRight);

}
