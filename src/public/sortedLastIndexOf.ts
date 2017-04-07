/**
 * Perform a binary search on a sorted array and return the
 * zero based index of the found item, or -1 if not found.
 *
 * When a match is found, this function will return the highest
 * index amongst redundant elements.
 *
 * Note: ASSUME array is sorted in ascending order [1,2,3]
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

export function sortedLastIndexOf(array: any[],
  target: any): number {

  return _binarySearchIndexBy(array, target, { highestIndex: true });

}
