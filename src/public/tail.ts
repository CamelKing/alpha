/**
 * Return the last element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

import { _item } from '../private/_item';

export function tail(input: any[]): any {
  return _item(input, true);
}
