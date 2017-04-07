/**
 * Perform a binary search on a sorted array to determine
 * where to insert the target and maintain the sorting order.
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

import { _binarySearchIndex } from '../private/_binarySearchIndex';

export function sortedIndex(array: any[],
  target: any): number {

  return _binarySearchIndex(array, target);

}
