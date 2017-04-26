/**
 * Private function to perform pulling of items from an array.
 *
 * Array will be altered.
 *
 * Option to pass in iteratee - apply at items before comparison
 * and comparator - control how comparison is done.
 *
 * @refactor April 13, 2017
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {any[]} values
 * @param {FnIteratee} [iteratee]
 * @param {FnComparator} [compare]
 * @returns {any[]}
 */

import { ArrayOption, FnComparator, FnIteratee } from '../constants';

import { _makeComparator } from './_makeComparator';
import { assign } from '../common/assign';
import { isTheSame } from '../common/isTheSame';
import { pluck } from '../common/pluck';

export function _pullAll(array: any[], toPull: any[],
  userOption?: ArrayOption): any[] {

  const option: ArrayOption = assign({ compare: isTheSame }, userOption);

  const isSame: FnComparator = _makeComparator(option.iteratee, option.compare);

  // loop thru every items to be removed
  toPull.forEach((itemToPull: any) => {

    // count how many items in the input array
    // to be checked against
    let { length } = array;
    let index: number = 0;

    // note: not using for loop, as index are not to be
    // increased afte we pluck one items (the next item
    // falls into current index)
    while (index < length) {

      // if we find an item in the input array that is same
      // as one of the items to be pulled, we will pluck it
      // else increase index to check next item
      if (isSame(array[index], itemToPull)) length = pluck(array, index).length;
      else index++;

    }

  });

  return array;

}
