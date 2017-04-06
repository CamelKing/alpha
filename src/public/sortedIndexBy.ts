/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the found item.
 *
 * A predicate function can be passed in to transform the array element
 * before performing comparision. This is useful for array of non
 * primitives element, such as objects.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
 * Note: If item not found, return -1
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
import { _binarySearchIndex } from '../private/_binarySearchIndex';

export function sortedIndexBy(array: any[],
  target: any,
  predicate?: FnPredicate): number {

  if (!array) return -1;

  return _binarySearchIndex(array, target, false, predicate);

}
