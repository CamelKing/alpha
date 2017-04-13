/**
 * Private functions to remove redundant elements in an array.
 *
 * option to pass in a comparator to control how comparison
 * is done. The default is using isTheSame() which performs
 * deep comparison into objects and arrays.
 *
 * option to pass in predicate (to transform the array
 * elements before it was being compared amongst each others)
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {FnPredicate} [predicate=null]
 * @param {FnComparator} [compare=isTheSame]
 * @returns {any[]}
 */

import { FnComparator, FnPredicate } from '../constants';

import { _makeFinder } from './_makeFinder';
import { isTheSame } from '../public/isTheSame';

export function _removeRedundants(input: any[], predicate: FnPredicate = null, compare: FnComparator = isTheSame): any[] {

  if (!Array.isArray(input)) return input;

  // remove redundant elements before returning
  return input.filter((item: any, index: number, self: any[]) =>
    index === self.findIndex(_makeFinder(item, predicate, compare)));

}
