/**
 * Return the first element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

import { nth } from './nth';

export function head(input: any[]): any {
  return nth(input, 0);
}
