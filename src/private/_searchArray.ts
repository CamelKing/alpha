/**
 * Private function perform a binary search on a sorted array.
 * There are two mode of operation:
 *
 * Insertion mode: return the next available position for inserting into
 * the sorted array so it maintains a sorted order.
 *
 * Normal mode: return the index of the target, or -1 if not found.
 *
 * ASSUMPTION: Array is sorted in either asc or desc order. Default: asc.
 *
 * Note: Option object
 * -------------------
 * option.highestIndex -
 *    option to return the highest index, default to lowest index
 *    (when more than one item with the same value as target)
 *
 * option.iteratee -
 *    Iteratee function can be used to parse the array elements,
 *    e.g. extract a certain field in an object for comparison
 *    purpose (since object can't be compare)
 *
 * option.compare -
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
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} sortedArray
 * @param {*} target
 * @param {ArrayOption} [userOption]
 * @returns {number}
 */

import { ArrayOption, FnSorter, NotFound, SortOrder } from '../constants';

import { _makeSorter } from './_makeSorter';
import { _orderBy } from './_orderBy';
import { assign } from '../public/assign';

export function _searchArray(sortedArray: any[], target: any,
  userOption?: ArrayOption): number {

  // if not an array, return not found (-1) regardless of insert mode or not
  if (!Array.isArray(sortedArray)) return NotFound;

  // default is ascending order.
  // to make this descending order:
  // compare = (a,b) => _orderBy(b,a)
  const option: ArrayOption
    = assign({ sort: _orderBy, last: false, insert: false }, userOption);

  // setup the sorter function
  const sortCompare: FnSorter = _makeSorter(option.iteratee, option.sort);

  const { length } = sortedArray;

  // if empty array, insert at position 0
  // or in the case of search mode, return not found.
  if (length <= 0) return option.insert ? 0 : NotFound;

  // setup for main search loop
  let start: number = 0;
  let end: number = length - 1;

  // main loop that perform binary search
  while (start <= end) {

    let index: number = (start + end) / 2 | 0;

    switch (sortCompare(target, sortedArray[index])) {

      case SortOrder.lower: end = index - 1; break;

      case SortOrder.higher: start = index + 1; break;

      case SortOrder.same:

        // found, now we can try finding the highest index
        // if the option says so
        // note: the sequence of the while condition is important.
        // the checking on index need to in the front, so the
        // subsequent call to array[index] would not throw.

        const direction: number = option.last ? 1 : -1;

        do {
          index += direction;
        } while (index >= 0 && index < length
          && sortCompare(target, sortedArray[index]) === SortOrder.same);

        // return found index (take one step back)
        // regardless of insert or normal mode
        return index - direction;
    }

  }

  // if insert mode, return the last start position
  if (option.insert) return start;
  return NotFound;

}
