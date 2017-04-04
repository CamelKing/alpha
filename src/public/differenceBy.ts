/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * pass in the iteratee to transform the array elements
 * before the comparison is done.
 *
 * @since 0.0.1
 * @category Array
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnPredicate} predicate
 * @returns {any[]}
 */

import { FnPredicate } from '../constants';
import { _diff } from '../private/_diff';

export function differenceBy(input: any[], exclude: any[], predicate: FnPredicate): any[] {
  return _diff(input, exclude, predicate);
}
