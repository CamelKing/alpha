/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @returns {any[]}
 */

import { _diff } from '../private/_diff';

export function difference(input: any[], exclude: any[]): any[] {
  return _diff(input, exclude);
}
