/**
 * Perform a binary search on a sorted array to determine
 * where to insert the target and maintain the sorting order.
 * An iteratee function can be passed in to transform the array
 * element before comparison in searching.
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

export function sortedInsertAt(array: any[], target: any,
  iteratee?: AnyIteratee): number {

  return _searchArray(array, target, { iteratee, insert: true });
}
