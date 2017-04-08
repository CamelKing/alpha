/**
 * Perform a binary search on a sorted array to determine
 * highest index to insert the target and maintain the sorting order.
 *
 * This index will be different than sortedIndex when there are
 * redundant elements, and this function will return the position
 * after the highest index as the position to insert the new item.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
 *
 * This function is only suitable for array of the same type of
 * primitive elements.
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

export function sortedLastIndex(array: any[], target: any,
  predicate?: FnPredicate): number {

  return _binarySearchIndex(array, target, { predicate, highestIndex: true });

}
