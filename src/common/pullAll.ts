/**
 * Pull values from the input array, which will be altered.
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
 * @param {FnComparator} [compare]
 * @returns {any[]}
 */

import { FnComparator, FnIteratee } from '../constants';

import { _pullAll } from '../base/_pullAll';

export function pullAll(input: any[], values: any[],
  iteratee?: FnIteratee, compare?: FnComparator): any[] {

  return _pullAll(input, values, { iteratee, compare });

}
