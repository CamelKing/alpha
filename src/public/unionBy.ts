/**
 * create a union out of a list of arrays.
 *
 * implemented using a loop that call private function _union()
 * to union-ize two arrays at a time.
 *
 * Every element will be transformed by a predicate before
 * the comparison.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {...any[]} arrays
 * @param {FnPredicate} predicate // to be passed in as the last of args
 * @returns {any[]}
 */

import { FnPredicate } from '../constants';
import { _getTrailingFunction } from '../private/_getTrailingFunction';
import { _removeRedundants } from '../private/_removeRedundants';
import { _union } from '../private/_union';
import { theTypeOf } from './theTypeOf';

export function unionBy(...args: any[]): any[] {

  // extract the last argument as predicate function (if applicable)
  const predicate: FnPredicate = _getTrailingFunction(args);

  const { length } = args;

  // minimum must pass in two arrays
  if (length < 1) return [];
  if (length === 1) return _removeRedundants(args[0].slice(0), predicate);

  // use the first array as reference
  let uni: any[] = args[0];
  for (let i: number = 1; i < length; i++) {
    // find out what's the intersection between the currently
    // calculated intersection and the next array
    uni = _union(uni, args[i], predicate);
  }

  return uni;

}
