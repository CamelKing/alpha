/**
 * Private function perform a binary search on an array, returning the
 * array element found, or undefined if not found.
 *
 * This is implemented using the _binarySearchArray() function to
 * locate the element.
 *
 * This is useful if the Array containing non primitives data, such
 * as object. Predicate can be used to search the array based on a
 * certain keys of the object, and the end result returned will be
 * the entire object intead.
 *
 * ASSUMPTION: Array is sorted in either asc or desc order.
 *
 * Read the options section in the _binarySearchArray() to
 * understand what kind of options can be set.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} array
 * @param {*} target
 * @param {BinarySearchOption} [option]
 * @returns {number}
 */

import { BinarySearchOption } from '../constants';
import { _binarySearchArray } from './_binarySearchArray';

export function _binarySearchValue(array: any[], target: any,
  option?: BinarySearchOption): any {

  const index: number
    = _binarySearchArray(array, target, option);

  return index >= 0 ? array[index] : undefined;

}
