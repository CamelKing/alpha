/**
 * Remove an items from an array base on an acid test function.
 * If it is false from Acid Test, it will be removed.
 * In the absence of Acid Test function, the item itself will be
 * evaluated if it is false, empty, null, or falsey ... which will
 * lead to removal.
 *
 * IMPORTANT: Array will be altered. For non destructive approach,
 * check out compact instead.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {any[]} input
 * @param {FnTester} [test]
 * @returns {any[]}
 */

import { FnTester } from '../constants';
import { isTheSame } from '../common/isTheSame';
import { pluck } from './pluck';

export function remove(input: any[], test?: FnTester): any[] {

  if (!Array.isArray(input)) return input;

  // count how many items in the input array
  // to be checked against
  let { length } = input;

  // for loop to loop thru the input array
  let index: number = 0;

  while (index < length) {

    // if the value is not false,
    // either from test(), or the item is true (in nature),
    // move on to next item (index++), else
    // pluck the item out (no adjust to index,
    // as the current index is now the next item)
    if (test ? test(input[index]) : input[index]) index++;
    else length = pluck(input, index).length;

  }

  return input;

}
