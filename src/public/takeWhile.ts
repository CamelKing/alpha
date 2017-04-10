/**
 * Similar to Array.slice(), with a twist.
 * Will stop extracting once the acid test function return a false with
 * the array element, starting from the left.
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
import { _take } from '../private/_take';

export function takeWhile(input: any[], acidTest: FnAcidTest): any[] {

  return _take(input, acidTest);

}
