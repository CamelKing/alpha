/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the found item.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
 * Note: If item not found, return -1
 *
 * This function is only suitable for array of the same type of
 * primitive elements. Any other format, best to use
 * sortedIndexBy() where you can specify a predicate function.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @returns {number}
 */

import { _binarySearchIndexBy } from '../private/_binarySearchIndexBy';

export function sortedIndex(array: any[],
  target: any): number {

  if (!array) return -1;

  return _binarySearchIndexBy(array, target);

}
