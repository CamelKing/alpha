/**
 * Private function to perform pulling of items from an array.
 *
 * Array will be altered.
 *
 * Option to pass in predicate - apply at items before comparison
 * and comparator - control how comparison is done.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {any[]} values
 * @param {FnPredicate} [predicate]
 * @param {FnComparator} [compare]
 * @returns {any[]}
 */

import { FnComparator, FnPredicate } from '../constants';

import { isTheSame } from '../public/isTheSame';
import { pluck } from '../public/pluck';

export function _pullAll(input: any[], values: any[],
  predicate?: FnPredicate, compare?: FnComparator): any[] {

  compare = compare || isTheSame;

  // loop thru every items to be removed
  values.forEach((item: any) => {

    // count how many items in the input array
    // to be checked against
    let len: number = input.length;

    // for loop to loop thru the input array
    let index: number = 0;

    while (index < len) {

      const a: any = predicate ? predicate(input[index]) : input[index];
      const b: any = predicate ? predicate(item) : item;

      // if we find an item in the input array that is same
      // as one of the items to be removed
      if (compare(a, b)) len = pluck(input, index).length;
      else index++;

    }

  });

  return input;

}
