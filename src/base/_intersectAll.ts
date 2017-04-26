/**
 * Private function to compute the intersect of the arrays passed in,
 * as a 2D array.
 *
 * Option to pass in an iteratee function (transform array items before
 * compare) and comparator function (control how comparison is carried
 * out).
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {any[][]} arrays
 * @param {FnIteratee} [iteratee]
 * @param {FnComparator} [compare]
 * @returns {any[]}
 */

import { ArrayOption, FnComparator, FnIteratee } from '../constants';

import { _intersectTwo } from '../base/_intersectTwo';

export function _intersectAll(arrays: any[][],
  userOptions: ArrayOption = {}): any[] {
  // iteratee?: FnIteratee, compare?: FnComparator): any[] {

  const { length } = arrays;

  // minimum must pass in two arrays
  if (length <= 1) return [];

  // use the first array as reference
  let intersect: any[] = arrays[0];

  // note: if intersect is empty, we stop computing as there wont be
  // any intersectin.
  for (let i: number = 1; i < length && intersect.length !== 0; i++) {
    // find out what's the intersection between the currently
    // calculated intersection and the next array
    intersect = _intersectTwo(intersect, arrays[i],
      { iteratee: userOptions.iteratee, compare: userOptions.compare });
  }

  return intersect;

}
