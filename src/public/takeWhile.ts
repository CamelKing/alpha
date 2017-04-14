/**
 * Similar to Array.slice(), with a twist.
 * Will stop extracting once the acid test function return a false with
 * the array element, starting from the left.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {FnMatcher} match
 * @returns {any[]}
 */

import { FnMatcher } from '../constants';
import { _take } from '../private/_take';

export function takeWhile(input: any[], match: FnMatcher): any[] {

  return _take(input, { match, count: input ? input.length : 0 });

}
