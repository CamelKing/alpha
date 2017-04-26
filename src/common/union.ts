/**
 * create a union out of a list of arrays.
 *
 * implemented using a loop that call private function _union()
 * to union-ize two arrays at a time.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 15, 2017
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

import { _removeRedundants } from '../base/_removeRedundants';
import { _union } from '../base/_union';

export function union(...arrays: any[]): any[] {

  const { length } = arrays;

  // minimum must pass in two arrays
  if (length < 1) return [];
  if (length === 1) return _removeRedundants(arrays[0].slice(0));

  // use the first array as reference
  let uni: any[] = arrays[0];
  for (let i: number = 1; i < length && uni.length !== 0; i++) {
    // repeatedly unionize two arrays at a time ...
    uni = _union(uni, arrays[i]);
  }

  // return the final result
  return uni;

}
