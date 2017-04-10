/**
 * Pull values from the input array, which will be altered.
 *
 * Implemented as wrapper for _pullAll;
 *
 * @export
 * @param {any[]} input
 * @param {any[]} values
 * @param {FnPredicate} [predicate] 
 * @param {FnComparator} [compare] 
 * @returns {any[]}
 */

import { FnComparator, FnPredicate } from '../constants';

import { _pullAll } from '../private/_pullAll';

export function pullAll(input: any[], values: any[],
  predicate?: FnPredicate, compare?: FnComparator): any[] {
  return _pullAll(input, values, predicate, compare);
}



