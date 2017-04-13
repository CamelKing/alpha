/**
 * Private function perform a binary search on an array, returning the
 * array element found, or undefined if not found.
 *
 * This is implemented using the _searchArray() function to
 * locate the element.
 *
 * This is useful if the Array containing non primitives data, such
 * as object. Predicate can be used to search the array based on a
 * certain keys of the object, and the end result returned will be
 * the entire object intead.
 *
 * ASSUMPTION: Array is sorted in either asc or desc order.
 *
 * Read the options section in the _searchArray() to
 * understand what kind of options can be set.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} sortedArray
 * @param {*} target
 * @param {SearchOption} [userOption]
 * @returns {*}
 */

import { SearchOption } from '../constants';
import { _searchArray } from './_searchArray';

export function _binarySearchValue(sortedArray: any[], target: any,
  userOption?: SearchOption): any {

  const index: number
    = _searchArray(sortedArray, target, userOption);

  return index >= 0 ? sortedArray[index] : undefined;

}
