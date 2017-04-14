/**
 * Compute and return the intersection (common members) of
 * all arrays being passed in, in an array.
 *
 * Implemented as a wrapper to the private function _interceptAll()
 * without iteratee and comparator.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

import { _intersectAll } from '../private/_intersectAll';

export function intersection(...arrays: any[]): any[] {
  return _intersectAll(arrays);
}
