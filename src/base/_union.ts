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
 * @refactor April 15, 2017
 *
 * @export
 * @param {any[]} arrA
 * @param {any[]} arrB
 * @param {ArrayOption} [userOption]
 * @returns {any[]}
 */

import { ArrayOption, FnComparator, FnIteratee } from '../constants';

import { _makeMatcher } from './_makeMatcher';
import { assign } from '../common/assign';
import { isTheSame } from '../common/isTheSame';

export function _union(arrA: any[], arrB: any[],
  userOption?: ArrayOption): any[] {

  const opt: ArrayOption
    = assign({ compare: isTheSame, iteratee: null }, userOption);

  let a: any[] = [];
  let b: any[] = [];

  if (Array.isArray(arrA)) {
    // first, produce a copy of arrA without repeating elements
    a = arrA.filter((item: any, ind: number) =>
      (arrA.findIndex(_makeMatcher(item, opt.iteratee, opt.compare)) === ind));
  }

  if (Array.isArray(arrB)) {
    // secondly, produce a copy of arrB, by filtering any items that
    // already exists in arrA
    b = arrB.filter((item: any) =>
      (a.findIndex(_makeMatcher(item, opt.iteratee, opt.compare)) < 0));
  }

  // concat/merge the two array
  return a.concat(b);

}
