/**
 * Private function perform a binary search on an array, returning the
 * array element found, or undefined if not found.
 *
 * This is implemented using the _binarySearchIndex() function to
 * locate the element.
 *
 * This is useful if the Array containing non primitives data, such
 * as object. Predicate can be used to search the array based on a
 * certain keys of the object, and the end result returned will be
 * the entire object intead.
 *
 *
 * ASSUMPTION: Array is sorted in either asc or desc order.
 *
 * option to return the highest index, default to lowest index
 * (when more than one item with the same value as target)
 *
 * Predicate can be used to parse the array elements, e.g. extract a certain
 * field in an object for comparison purpose (since object can't be compare)
 *
 * Comparator can be passed in to handle how comparison is done. Most common
 * would be either ascending order comparison (_ascOrder()) or descending
 * order comparison (_descOrder()). Default is ascending order.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @param {boolean} [highestIndex=false]
 * @param {FnPredicate} [predicate]
 * @param {FnSortComparator} [compare]
 * @returns {number}
 */

import { FnPredicate, FnSortComparator } from '../constants';

import { _binarySearchIndex } from './_binarySearchIndex';

export function _binarySearch(array: any[],
  target: any,
  highestIndex: boolean = false,
  predicate?: FnPredicate,
  compare?: FnSortComparator): any {

  const index: number
    = _binarySearchIndex(array, target, highestIndex, predicate, compare);

  if (index >= 0) return array[index];
  return undefined;

}
