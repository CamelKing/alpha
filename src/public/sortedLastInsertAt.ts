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

export function sortedLastInsertAt(array: any[], target: any,
  iteratee?: AnyIteratee): number {

  return _searchArray(array, target,
    { iteratee, insert: true, highestIndex: true });
}
