/**
 * Take an input array, and produce an output array with only the
 * unique items from the input array. All redundant items will only
 * appear once in output.
 *
 * [1,1,2,2,3,4] => [1,2,3,4]
 *
 * Implemented as wrapper for uniqBy() with the predicate.
 * 
 * @export
 * @param {any[]} input
 * @param {FnPredicate} [predicate]
 * @returns {any[]}
 */

import { sortedUniqBy } from './sortedUniqBy';

export function sortedUniq(input: any[]): any[] {
  return sortedUniqBy(input);
}