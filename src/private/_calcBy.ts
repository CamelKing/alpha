/**
 * Function to perform calculation on all the numbers within an array
 *
 * Potential operands: Min, Max, Sum, Mean
 *
 * Nested array will be searched deep inside as well.
 *
 * All non numeric items will be disregard.
 *
 * If there is not a single numeric item, the function will return undefined.
 *
 * Option to pass in an iteratee to convert all value before checking
 * for max.
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor April 18, 2017
 *
 * @export
 * @param {Numerics[]} array
 * @param {MathOption} userOption
 * @returns {Numeric}
 */

import { AnyIteratee, FnIteratee, MathOption, Numeric, Numerics } from '../constants';

import { _makeIteratee } from './_makeIteratee';
import { assign } from '../public/assign';

export function _calcBy(array: Numerics[], userOption?: MathOption): Numeric {

  if (!Array.isArray(array)) return array == null ? array : +array;
  if (array.length === 0) return undefined;


  const option: MathOption = assign({ operand: 'sum', deep: true }, userOption);
  const convert: FnIteratee = _makeIteratee(option.iteratee);

  let accResult: number = undefined;
  let accCounter: number = 0;
  let output: Numeric = undefined;

  const { length } = array;
  let i: number;
  let j: number;

  // first loop to skip all the non numeric array elements 
  // and capture the first numeric element
  for (i = 0; i < length && accResult === undefined; i++) {
    let currentItem: Numeric = array[i];
    if (Array.isArray(currentItem)) {
      // only loop thru nested array if deep mode else ignore as undefined
      currentItem = option.deep ? _calcBy(currentItem, option) : undefined;
    }
    accResult = +convert(currentItem);
    if (Number.isNaN(accResult)) accResult = undefined;
    else { output = currentItem; accCounter++; }
  }

  // second loop to perform calculation for the rest of the array
  for (j = i; j < length; j++) {

    let currentItem: Numeric = array[j];

    if (Array.isArray(currentItem)) {
      // only loop thru nested array if deep mode else ignore as undefined
      currentItem = option.deep ? _calcBy(currentItem, option) : undefined;
    }

    const currentResult: number = +convert(currentItem);
    if (Number.isNaN(currentResult)) continue;
    accCounter++;

    switch (option.operand) {

      case 'max':
        // max will compare and cache the bigger result
        // but return the element in the array
        if (currentResult > accResult) {
          accResult = currentResult;
          output = currentItem;
        }
        break;

      case 'min':
        // max will compare and cache the bigger result
        // but return the element in the array
        if (currentResult < accResult) {
          accResult = currentResult;
          output = currentItem;
        }
        break;

      case 'sum':

        // sum will accumulate all the calculated result
        // the return value is the result itself rather than
        // the array element
        accResult += currentResult;
        output = accResult;
        break;

      case 'mean':

        // mean will perform ongoing averaging on the array as it loops thru
        // the return value is the result itself rather than
        // the array element
        accResult
          = (((accResult * (accCounter - 1)) + currentResult) / accCounter);
        output = accResult;
        break;

    }

  }

  return output;

}
