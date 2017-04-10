/**
 * Similar to Array.slice() with -ve param, with a twist.
 * Will stop extracting once the acid test function return a false with
 * the array element, starting from the right.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {FnAcidTest} acidTest
 * @returns {any[]}
 */

import { FnAcidTest } from '../constants';
import { _Direction } from '../_constants';
import { _take } from '../private/_take';

export function takeRightWhile(input: any[], acidTest: FnAcidTest): any[] {

  return _take(input, acidTest, null, _Direction.fromRight);

}
