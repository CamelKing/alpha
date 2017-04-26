/**
 * Take an input array, and produce an output array with only the
 * unique items from the input array. All redundant items will only
 * appear once in output.
 *
 * [1,1,2,2,3,4] => [1,2,3,4]
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {FnIteratee} [iteratee]
 * @returns {any[]}
 */

import { FnComparator } from '../constants';
import { _removeRedundants } from '../base/_removeRedundants';

export function uniqWith(input: any[], compare?: FnComparator): any[] {

  return _removeRedundants(input, { compare });

}
