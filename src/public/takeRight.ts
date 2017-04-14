/**
 * Similar to Array.slice() with -ve param.
 * This is done for completion sake, better to use array.slice();
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {number} [count]
 * @returns {any[]}
 */

import { Direction } from '../constants';
import { _take } from '../private/_take';

export function takeRight(input: any[], count?: number): any[] {

  return _take(input,
    { match: () => true, count, direction: Direction.fromRight });

}
