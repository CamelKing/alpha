/**
 * private array difference extractor function.
 * examine the two arrays, and return a new array containing
 * what is in input array but not found in exclude array.
 *
 * option to pass in comparator to control how comparison is done.
 * by default, isTheSame would be used, which conforms to SameValueZero
 * guideline as per ES7 spec:
 * http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
 *
 * option to pass in iteratee to perform any transformation necessary
 * before comparison takes place.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnIteratee} [iteratee]
 * @param {FnComparator} [compare]
 * @returns {any[]}
 */

import { DiffOption, FnComparator, FnFinder, FnIteratee } from '../constants';

import { _makeFinder } from './_makeFinder';
import { isTheSame } from '../public/isTheSame';

export function _diff(input: any[], exclude: any[], userOption?: DiffOption): any[] {

  const option: DiffOption = {
    compare: isTheSame,
  };

  // overwrite default option with user option
  Object.assign(option, userOption);

  if (!input || input.length === 0) return [];
  if (!exclude || exclude.length === 0) return input;

  return input.filter((item: any) =>
    !exclude.find(_makeFinder(item, option.iteratee, option.compare)));

}
