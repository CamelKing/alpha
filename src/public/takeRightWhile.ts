/**
 * Similar to Array.slice() with -ve param, with a twist.
 * Will stop extracting once the acid test function return a false with
 * the array element, starting from the right.
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

import { Direction, FnMatcher } from '../constants';

import { _take } from '../private/_take';

export function takeRightWhile(input: any[], match: FnMatcher): any[] {

  return _take(input,
    { match, direction: Direction.fromRight, count: input ? input.length : 0 });

}
