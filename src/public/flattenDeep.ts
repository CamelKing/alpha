/**
 * wrapper function for flattenDepth.
 * flatten deeply nested array into a single dimension array
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} nArr
 * @returns {any[]}
 */

import { flattenDepth } from './flattenDepth';

export function flattenDeep(array: any[]): any[] {
  return flattenDepth(array, Infinity);
}
