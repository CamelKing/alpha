/**
 * Return the last element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

import { nth } from './nth';

export function tail(input: any[]): any {
  return nth(input, -1);
}
