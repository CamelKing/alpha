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
  return _diff(input, exclude);
}
