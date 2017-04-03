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
 * @param {FnIteratee} [iteratee]
 * @param {FnCompare} [comparator]
 * @returns {any[]}
 */

import { _identity } from './_identity';
import { isTheSame } from '../public/isTheSame';

export type FnCompare = (a: any, b: any) => boolean;
export type FnIteratee = (v: any) => any;

export function _diff(input: any[],
  exclude: any[],
  iteratee?: FnIteratee,
  comparator?: FnCompare): any[] {

  if (!input || input.length === 0) return [];
  if (!exclude || exclude.length === 0) return input;

  const output: any[] = [];
  const length: number = exclude.length;
  iteratee = iteratee || _identity;
  comparator = comparator || isTheSame;

  input.forEach((inspect: any) => {

    let found: boolean = false;
    for (let i: number = 0; i < length && !found; i++) {
      found = comparator(iteratee(inspect), iteratee(exclude[i]));
    }
    if (!found) output.push(inspect);

  });

  return output;

}
