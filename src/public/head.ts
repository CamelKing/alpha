/**
 * Return the first element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

import { _item } from '../private/_item';

export function head(input: any[]): any {
  return _item(input, false);
}
