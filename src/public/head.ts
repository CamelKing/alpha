/**
 * Return the first element of the array.
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

export function head(input: any[]): any {
  return nth(input, 0);
  // const [x] = input;
  // return x;
}
