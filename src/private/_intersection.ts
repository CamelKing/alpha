/**
 * Private function to computer the intersection (common elements) of two arrays
 *
 * One can pass in a predicate - to be applied on every elements
 * before comparison, so you can perform some form of transformation
 * (such as rounding);
 *
 * and a comparator function - which perform the actual comparison,
 * so you can control how it is done.
 *
 * if predicate is omitted, the _makeComparator will put in a default predicate
 * which access the value as it is,
 *
 * if comparator is omitted, this function will default to using isTheSame()
 * which perform deep compare on all sort of variable types.
 * (Take note _makeComparator will use plain comparison === instead.)
 *
 * @since 0.0.1
 * @category Array
 *
 * @param {any[]} arrA
 * @param {any[]} arrB
 * @param {FnPredicate} [predicate=null]
 * @param {FnComparator} [compare=isTheSame]
 * @returns {any[]}
 */

import { FnComparator, FnIteratee } from '../constants';

import { _makeFinder } from './_makeFinder';
import { _removeRedundants } from './_removeRedundants';
import { isTheSame } from '../public/isTheSame';

export function _intersection(arrA: any[], arrB: any[], iteratee: FnIteratee = null, compare: FnComparator = isTheSame): any[] {

  if (Array.isArray(arrA) && Array.isArray(arrB)) {

    const intersect: any[] = arrA.filter((item: any) =>
      (arrB.findIndex(_makeFinder(item, iteratee, compare)) >= 0));

    return _removeRedundants(intersect);

  }
  return [];

}
