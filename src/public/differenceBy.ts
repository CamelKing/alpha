/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * pass in the iteratee to transform the array elements
 * before the comparison is done.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {AnyIteratee} [iteratee]
 * @returns {any[]}
 */

import { AnyIteratee } from '../constants';
import { _diff } from '../private/_diff';

export function differenceBy(input: any[], exclude: any[],
  iteratee?: AnyIteratee): any[] {
  return _diff(input, exclude, { iteratee });
}
