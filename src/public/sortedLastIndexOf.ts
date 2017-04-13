/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the last found item, or -1 if not found.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
 *
 * This function is only suitable for array of the same type of
 * primitive elements. Any other format, best to use
 * sortedLastIndexBy() where you can specify a predicate function.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @returns {number}
 */

import { _searchArray } from '../private/_searchArray';

export function sortedLastIndexOf(sortedArray: any[],
  target: any): number {

  return _searchArray(sortedArray, target,
    { highestIndex: true, insert: false });
}
