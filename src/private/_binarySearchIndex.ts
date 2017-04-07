/**
 * Private function perform a binary search on an array to determine
 * where to insert the target and maintain the sorting order.
 *
 * ASSUMPTION: Array is sorted in either asc or desc order.
 *
 * This is implemented as a wrapper for _binarySearchArray()
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

export function _binarySearchIndex(array: any[], target: any,
  option?: BinarySearchOption): number {

  option = option || {};
  option.insert = true;

  return _binarySearchArray(array, target, option);
}
