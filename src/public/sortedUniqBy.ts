/**
 * Take an input array, and produce an output array with only the
 * unique items from the input array. All redundant items will only
 * appear once in output.
 *
 * [1,1,2,2,3,4] => [1,2,3,4]
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {any[]} input
 * @param {AnyIteratee} [iteratee]
 * @returns {any[]}
 */

import { AnyIteratee, FnComparator, FnIteratee } from '../constants';

import { _makeComparator } from '../private/_makeComparator';
import { isTheSame } from './isTheSame';
import { theTypeOf } from './theTypeOf';

export function sortedUniqBy(input: any[], iteratee?: AnyIteratee): any[] {

  if (!Array.isArray(input) || input.length === 1) return input;

  const output: any[] = [];

  const compare: FnComparator = _makeComparator(iteratee, isTheSame);

  // special treatment for object/array, as iteratee would fail on null
  const type: string = theTypeOf(input[0]);
  let prev: any = type === 'object' ? {} : type === 'array' ? [] : null;

  input.forEach((item: any) => {

    // since this is a sorted array, we can just skip all
    // redundant items after the first one, and there is no
    // need to check if it exists in output array before
    // pushing
    if (compare(item, prev)) return;
    prev = item;
    output.push(item);

  });

  return output;

}
