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
 * @export
 * @param {any[]} input
 * @param {FnAcidTest} [acidTest]
 * @returns {any[]}
 */

import { FnAcidTest } from '../constants';
import { isTheSame } from '../public/isTheSame';
import { pluck } from './pluck';

export function remove(input: any[], acidTest?: FnAcidTest): any[] {

  if (!Array.isArray(input)) return input;

  // count how many items in the input array
  // to be checked against
  let len: number = input.length;

  // for loop to loop thru the input array
  let index: number = 0;

  while (index < len) {

    const toKeep: any = acidTest ? acidTest(input[index]) : input[index];

    // if the value is not false,
    // either from acidTest, or the item is true (in nature),
    // move on to next item (index++), else
    // pluck the item out
    if (acidTest ? acidTest(input[index]) : input[index]) {
      index++;
    }
    else {
      len = pluck(input, index).length;
    }

  }

  return input;

}
