/**
 * Similar to Array.slice() with -ve param.
 * This is done for completion sake, better to use array.slice();
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {number} [count=1]
 * @returns {any[]}
 */

import { _Direction } from '../_constants';
import { _take } from '../private/_take';

export function takeRight(input: any[], count: number = 1): any[] {

  return _take(input, () => true, count, _Direction.fromRight);

}
