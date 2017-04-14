/**
 * Pull values from the input array, which will be altered.
 *
 * Both array items and values will be transformed by  the
 * iteratee function before any comparison is done.
 *
 * Implemented as wrapper for _pullAll;
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {any[]} values
 * @param {FnIteratee} [iteratee]
 * @returns {any[]}
 */

import { FnIteratee } from '../constants';
import { _pullAll } from '../private/_pullAll';

export function pullAllBy(input: any[], values: any[], iteratee?: FnIteratee): any[] {

  return _pullAll(input, values, { iteratee });

}
