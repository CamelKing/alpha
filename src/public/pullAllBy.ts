/**
 * Pull values from the input array, which will be altered.
 *
 * Both array items and values will be transformed by  the
 * predicate function before any comparison is done.
 *
 * Implemented as wrapper for _pullAll;
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {any[]} values
 * @param {FnPredicate} [predicate]
 * @returns {any[]}
 */

import { FnPredicate } from '../constants';
import { _pullAll } from '../private/_pullAll';

export function pullAllBy(input: any[], values: any[], predicate?: FnPredicate): any[] {

  return _pullAll(input, values, predicate);

}
