/**
 * 
 * create a union out of a list of arrays.
 *
 * implemented using a loop that call private function _union()
 * to union-ize two arrays at a time.
 *
 * Comparison will be controlled by the past in comparator.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {...any[]} args
 * @param {FnComparator} compare // to be passed in as the last of args
 * @returns {any[]}
 */

import { FnComparator } from '../constants';
import { _removeRedundants } from '../private/_removeRedundants';
import { _union } from '../private/_union';
import { theTypeOf } from './theTypeOf';

export function unionWith(...args: any[]): any[] {

  // extract the last argument as comparator function (if applicable)

  let compare: FnComparator = null;

  let { length } = args;

  if (theTypeOf(args[length - 1]) === 'function') {
    compare = args[length - 1];
    args.pop();
    length--;
  }

  // minimum must pass in two arrays
  if (length < 1) return [];
  if (length === 1) return _removeRedundants(args[0].slice(0), null, compare);

  // use the first array as reference
  let uni: any[] = args[0];
  for (let i: number = 1; i < length && uni !== null; i++) {
    // find out what's the intersection between the currently
    // calculated intersection and the next array
    uni = _union(uni, args[i], null, compare);
  }

  return uni;

}
