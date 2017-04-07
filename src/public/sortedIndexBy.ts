/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the found item, or -1 if not found.
 *
 * A predicate function can be passed in to transform the array element
 * before performing comparision. This is useful for array of non
 * primitives element, such as objects.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @returns {number}
 */

import { FnPredicate } from '../constants';
import { _binarySearchIndexBy } from '../private/_binarySearchIndexBy';

export function sortedIndexBy(array: any[],
  target: any,
  predicate?: FnPredicate): number {

  return _binarySearchIndexBy(array, target, { predicate });

}
