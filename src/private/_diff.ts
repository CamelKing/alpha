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
 * before comparison takes place. bt default using _identity function
 * which does not alter the value at all.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnPredicate} [predicate]
 * @param {FnComparator} [compare]
 * @returns {any[]}
 */

import { FnComparator, FnPredicate } from '../constants';

import { _identity } from './_identity';
import { isTheSame } from '../public/isTheSame';

export function _diff(input: any[],
  exclude: any[],
  predicate?: FnPredicate,
  compare?: FnComparator): any[] {

  if (!input || input.length === 0) return [];
  if (!exclude || exclude.length === 0) return input;

  const output: any[] = [];
  const length: number = exclude.length;
  predicate = predicate || _identity;
  compare = compare || isTheSame;

  input.forEach((inspect: any) => {

    let found: boolean = false;
    for (let i: number = 0; i < length && !found; i++) {
      found = compare(predicate(inspect), predicate(exclude[i]));
    }
    if (!found) output.push(inspect);

  });

  return output;

}
