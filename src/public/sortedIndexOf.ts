/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the found item, or -1 if not found.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
 *
 * This function is only suitable for array of the same type of
 * primitive elements. Any other format, best to use
 * sortedIndexBy() where you can specify an interatee function.
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

import { SearchOption } from '../constants';
import { _searchArray } from '../private/_searchArray';

export function sortedIndexOf(array: any[],
  target: any): number {

  // insert mode is off
  return _searchArray(array, target, { insert: false });

}
