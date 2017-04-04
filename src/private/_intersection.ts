import { FnComparator, FnPredicate } from '../constants';

import { _makeComparator } from './_makeComparator';
import { _removeRedundants } from './_removeRedundants';
import { isTheSame } from '../public/isTheSame';

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

export function _intersection(arrA: any[], arrB: any[], predicate: FnPredicate = null, compare: FnComparator = isTheSame): any[] {

  if (Array.isArray(arrA) && Array.isArray(arrB)) {

    let intersect: any[] = arrA.filter((item: any) =>
      (arrB.findIndex(_makeComparator(item, predicate, compare)) >= 0));

    if (predicate) {
      intersect = intersect.map((value: any) => predicate(value));
    }

    return _removeRedundants(intersect);

  }
  return [];

}

