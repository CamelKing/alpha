/**
 * private array difference extractor function.
 * examine the two arrays, and return a new array containing
 * what is in input array but not found in exclude array.
 *
 * option to pass in comparator to control how comparison is done.
 * by default, isEqual would be used, which conforms to SameValueZero
 * guideline as per ES7 spec:
 * http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
 *
 * option to pass in iteratee to perform any transformation necessary
 * before comparison takes place.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor 0.2.0 April 26, 2017
 *
 * @export
 * @param {any[]} base
 * @param {any[]} exclude
 * @param {ArrayOption} [userOption]
 * @returns {any[]}
 */

import { ArrayOption } from '../constants';
import { _makeMatcher } from './_makeMatcher';
import { assign } from '../common/assign';
import { isEqual } from '../common/isEqual';

export function _diff(base: any[], exclude: any[],
  userOption?: ArrayOption): any[] {

  const option: ArrayOption = assign({ compare: isEqual }, userOption);

  if (!base || base.length === 0) return [];
  if (!exclude || exclude.length === 0) return base;

  return base.filter((item: any) =>
    !exclude.find(_makeMatcher(item, option.iteratee, option.compare)));

}
