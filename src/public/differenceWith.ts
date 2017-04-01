/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * pass in the comparator to control how the comparison is done.
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnCompare} comparator
 * @returns {any[]}
 */

import { FnCompare, _diff } from '../private/_diff';

export function differenceWith(input: any[], exclude: any[], comparator: FnCompare): any[] {
  if (!input || input.length === 0) return [];
  if (!exclude || exclude.length === 0) return input;
  return _diff(input, exclude, null, comparator);
}
