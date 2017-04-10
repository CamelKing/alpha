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
 * @param {FnPredicate} [predicate]
 * @returns {any[]}
 */

import { FnPredicate } from '../constants';
import { _removeRedundants } from '../private/_removeRedundants';

export function uniqBy(input: any[], predicate?: FnPredicate): any[] {

  return _removeRedundants(input, predicate);

}
