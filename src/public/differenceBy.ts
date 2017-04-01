/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * pass in the iteratee to transform the array elements 
 * before the comparison is done.
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnCompare} comparator
 * @returns {any[]}
 */

import { FnIteratee, _diff } from '../private/_diff';

export function differenceBy(input: any[], exclude: any[], iteratee: FnIteratee): any[] {
  if (!input || input.length === 0) return [];
  if (!exclude || exclude.length === 0) return input;
  return _diff(input, exclude, iteratee);
}
