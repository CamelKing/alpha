/**
 * Private function perform a binary search on an array. There are two mode
 * of operation:
 *
 * Insertion mode: return the next available position for inserting into
 * the sorted array so it maintains a sorted order.
 *
 * Normal mode: return the index of the target, or -1 if not found.
 *
 * ASSUMPTION: Array is sorted in either asc or desc order.
 *
 * Note: Option object
 * -------------------
 * option.highestIndex -
 *    option to return the highest index, default to lowest index
 *    (when more than one item with the same value as target)
 *
 * option.predicate -
 *    Predicate can be used to parse the array elements, e.g. extract
 *    a certain field in an object for comparison purpose (since
 *    object can't be compare)
 *
 * option.comparator -
 *    Comparator can be passed in to handle how comparison is done.
 *    Most common would be either ascending order comparison
 *    (_ascOrder()) or descending order comparison (_descOrder()).
 *    Default is ascending order.
 *
 * option.insert -
 *    true to set insert mode, or false to set normal mode.
 *    default is normal mode.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @param {BinarySearchOption} [option]
 * @returns {number}
 */

import { BinarySearchOption, FnPredicate, FnSortComparator, NotFound, SortOrder } from '../constants';

import { _identity } from './_identity';
import { _orderBy } from './_orderBy';

export function _binarySearchArray(array: any[],
  target: any,
  option?: BinarySearchOption): number {

  // default is ascending order.
  // to make this descending order:
  // compare = (a,b) => _orderBy(b,a)
  option.compare = option.compare || _orderBy;
  option.predicate = option.predicate || _identity;
  option.highestIndex = option.highestIndex || false;
  option.insert = option.insert || false;

  // if not an array, return not found (-1) regardless of insert mode or not
  if (!Array.isArray(array)) return NotFound;

  // if empty array, insert at position 0
  if (array.length <= 0) return option.insert ? 0 : NotFound;

  const len: number = array.length;
  let start: number = 0;
  let end: number = len - 1;
  let index: number;

  // main loop that perform binary search
  while (start <= end) {

    index = (start + end) / 2 | 0;

    switch (option.compare(target, option.predicate(array[index]))) {

      case SortOrder.lower: end = index - 1; break;

      case SortOrder.higher: start = index + 1; break;

      case SortOrder.same:

        // found, now we can try finding the highest index
        // if the option says so

        do {
          index += option.highestIndex ? 1 : -1;
        } while (index >= 0 && index < len
          && option.compare(target, option.predicate(array[index])) === SortOrder.same);

        // calculate the index to return
        index -= option.highestIndex ? 1 : -1;

        // return found index regardless of insert or normal mode
        return index;
    }

  }

  // if insert mode, return the last start position
  if (option.insert) return start;
  return NotFound;

}
