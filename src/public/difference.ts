/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnCompare} comparator
 * @returns {any[]}
 */

import { _diff } from '../private/_diff';

export function difference(input: any[], exclude: any[]): any[] {
  if (!input || input.length === 0) return [];
  if (!exclude || exclude.length === 0) return input;
  return _diff(input, exclude);
}
