/**
 * Take an input array, and produce an output array with only the
 * unique items from the input array. All redundant items will only
 * appear once in output.
 *
 * [1,1,2,2,3,4] => [1,2,3,4]
 *
 * Implemented as wrapper for uniqBy() with the iteratee.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {FnIteratee} [iteratee]
 * @returns {any[]}
 */

import { _removeRedundants } from '../base/_removeRedundants';

export function uniq(input: any[]): any[] {
  return _removeRedundants(input);
}
