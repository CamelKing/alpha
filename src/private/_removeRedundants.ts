/**
 * Private functions to remove redundant elements in an array.
 *
 * option to pass in a comparator to control how comparison
 * is done. The default is using isTheSame() which performs
 * deep comparison into objects and arrays.
 *
 * option to pass in iteratee (to transform the array
 * elements before it was being compared amongst each others)
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {FnIteratee} [iteratee=null]
 * @param {FnComparator} [compare=isTheSame]
 * @returns {any[]}
 */

import { FnComparator, FnIteratee } from '../constants';

import { _makeMatcher } from './_makeMatcher';
import { isTheSame } from '../public/isTheSame';

export function _removeRedundants(input: any[], iteratee: FnIteratee = null, compare: FnComparator = isTheSame): any[] {

  if (!Array.isArray(input)) return input;

  // remove redundant elements before returning
  return input.filter((item: any, index: number, self: any[]) =>
    index === self.findIndex(_makeMatcher(item, iteratee, compare)));

}
