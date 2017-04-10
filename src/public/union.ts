/**
 * create a union out of a list of arrays.
 *
 * implemented using a loop that call private function _union()
 * to union-ize two arrays at a time.
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

import { _union } from '../private/_union';

export function union(...arrays: any[]): any[] {

  const len: number = arrays.length;

  // minimum must pass in two arrays
  if (len < 1) return [];
  if (len === 1) return arrays[0].slice(0);

  // use the first array as reference
  let uni: any[] = arrays[0];
  for (let i: number = 1; i < len && uni.length !== 0; i++) {
    // repeatedly unionize two arrays at a time ...
    uni = _union(uni, arrays[i]);
  }

  // return the final result
  return uni;

}
