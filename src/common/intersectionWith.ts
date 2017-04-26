/**
 * compute and return the intersection (common members) of
 * all arrays being passed in, in an array. Every element
 * will be transformed by a iteratee before the comparison.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {...any[]} args
 * @param {FnComparator} compare // to be passed in as the last of args
 * @returns {any[]}
 */

import { _getOptionalFunction } from '../base/_getOptionalFunction';
import { _intersectAll } from '../base/_intersectAll';

export function intersectionWith(...arrays: any[]): any[] {

  // extract the last argument as comparator function (if applicable)
  // this will drop that function from the arrays (if applicable)

  return _intersectAll(arrays, { compare: _getOptionalFunction(arrays) });

}
