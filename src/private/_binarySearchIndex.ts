/**
 * Private function perform a binary search on an array, returning the
 * index of the target, or -1 if not found.
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

import { FnPredicate, FnSortComparator, SortOrder } from '../constants';

import { _identity } from './_identity';
import { _orderBy } from './_orderBy';

const _NotFound: number = -1;

export function _binarySearchIndex(array: any[],
  target: any,
  highestIndex: boolean = false,
  predicate?: FnPredicate,
  compare?: FnSortComparator): number {

  if (!array) return _NotFound;
  // default is ascending order.
  // to make this descending order:
  // compare = (a,b) => _orderBy(b,a)
  compare = compare || _orderBy;
  predicate = predicate || _identity;
  const len: number = array.length;
  let start: number = 0;
  let end: number = len - 1;
  let index: number;

  while (start <= end) {
    index = (start + end) / 2 | 0;
    switch (compare(target, predicate(array[index]))) {
      case SortOrder.lower: end = index - 1; break;
      case SortOrder.higher: start = index + 1; break;
      case SortOrder.same:
        do {
          index += highestIndex ? 1 : -1;
        } while (index >= 0 && index < len && compare(target, predicate(array[index])) === SortOrder.same);
        return index -= highestIndex ? 1 : -1;
    }
  }
  return _NotFound;
}
