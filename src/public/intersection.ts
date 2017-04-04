/**
 * compute and return the intersection (common members) of
 * all arrays being passed in, in an array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

import { _intersection } from '../private/_intersection';

export function intersection(...arrays: any[]): any[] {

  const len: number = arrays.length;

  // minimum must pass in two arrays
  if (len <= 1) return [];

  // use the first array as reference
  let intersect: any[] = arrays[0];
  for (let i: number = 1; i < len && intersect.length !== 0; i++) {
    // find out what's the intersection between the currently
    // calculated intersection and the next array
    intersect = _intersection(intersect, arrays[i]);
  }

  return intersect;

}
