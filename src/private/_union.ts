/**
 * private function to computer the union of two arrays
 *
 * option to pass in iteratee to transform the items before comparison
 *
 * option to pass in comparator to control how the comparison is done.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} arrA
 * @param {any[]} arrB
 * @param {FnIteratee} [iteratee=null]
 * @param {FnComparator} [compare=isTheSame]
 * @returns {any[]}
 */

import { FnComparator, FnIteratee } from '../constants';

import { _makeMatcher } from './_makeMatcher';
import { isTheSame } from '../public/isTheSame';

export function _union(arrA: any[], arrB: any[], iteratee: FnIteratee = null, compare: FnComparator = isTheSame): any[] {

  let a: any[] = [];
  let b: any[] = [];

  if (Array.isArray(arrA)) {
    // first, produce a copy of arrA without repeating elements
    a = arrA.filter((item: any, ind: number) =>
      (arrA.findIndex(_makeMatcher(item, iteratee, compare)) === ind));
  }

  if (Array.isArray(arrB)) {
    // secondly, produce a copy of arrB, by filtering any items that
    // already exists in arrA
    b = arrB.filter((item: any) =>
      (a.findIndex(_makeMatcher(item, iteratee, compare)) < 0));
  }

  // concat/merge the two array
  return a.concat(b);

}
