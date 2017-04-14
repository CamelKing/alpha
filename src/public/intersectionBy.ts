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
 * @param {...any[]} arrays
 * @param {FnIteratee} iteratee // to be passed in as the last of args
 * @returns {any[]}
 */

import { _getOptionalFunction } from '../private/_getOptionalFunction';
import { _intersectAll } from '../private/_intersectAll';

export function intersectionBy(...arrays: any[]): any[] {

  // extract the last argument as iteratee function (if applicable)
  // this will drop that function from the arrays (if applicable)
  return _intersectAll(arrays, _getOptionalFunction(arrays));

}
