/**
 * Private function to computer the intersection (common elements) of two arrays
 *
 * One can pass in a iteratee - to be applied on every elements
 * before comparison, so you can perform some form of transformation
 * (such as rounding);
 *
 * and a comparator function - which perform the actual comparison,
 * so you can control how it is done.
 *
 * if iteratee is omitted, the _makeMatcher will put in a default iteratee
 * if iteratee is omitted, the _makeFInder will put in a default iteratee
 * which access the value as it is,
 *
 * if comparator is omitted, this function will default to using isTheSame()
 * which perform deep compare on all sort of variable types.
 * (Take note _makeMatcher will use plain comparison === instead.)
 * (Take note _makeFinder will use plain comparison === instead.)
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {any[]} arrA
 * @param {any[]} arrB
 * @param {FnIteratee} [iteratee=null]
 * @param {FnComparator} [compare=isTheSame]
 * @returns {any[]}
 */

import { AnyIteratee, ArrayOption, FnComparator, Primitives } from '../constants';

import { _makeMatcher } from './_makeMatcher';
import { _removeRedundants } from './_removeRedundants';
import { assign } from '../common/assign';
import { isTheSame } from '../common/isTheSame';

export function _intersectTwo(arrA: any[], arrB: any[],
  userOption: ArrayOption): any[] {
  // iteratee: AnyIteratee = null, compare: FnComparator = isTheSame): any[] {

  const option: ArrayOption
    = assign({ iteratee: null, compare: isTheSame }, userOption);

  if (Array.isArray(arrA) && Array.isArray(arrB)) {

    const intersect: any[] = arrA.filter((item: any) =>
      (arrB.findIndex(_makeMatcher(item, option.iteratee, option.compare)) >= 0));

    return _removeRedundants(intersect);

  }
  return [];

}
