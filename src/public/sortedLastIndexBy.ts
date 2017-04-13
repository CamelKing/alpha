/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the last found item, or -1 if not found.
 *
 * An iteratee function can be passed in to transform the array element
 * before performing comparision. This is useful for array of non
 * primitives element, such as objects.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
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

import { AnyIteratee } from '../constants';
import { _searchArray } from '../private/_searchArray';

export function sortedLastIndexBy(sortedArray: any[],
  target: any,
  iteratee?: AnyIteratee): number {

  return _searchArray(sortedArray, target,
    { iteratee, insert: false, highestIndex: true });
}
