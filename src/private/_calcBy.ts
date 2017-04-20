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
 * @refactor April 20, 2017
 *
 * @export
 * @param {Numerics[]} array
 * @param {MathOption} userOption
 * @returns {Numeric}
 */

import { AnyIteratee, FnIteratee, MathOption, Numeric, Numerics } from '../constants';

import { _makeIteratee } from './_makeIteratee';
import { assign } from '../public/assign';
import { isNumeric } from '../public/isNumeric';

export function _calcBy(array: Numerics[], userOption: MathOption): Numeric {

  if (!Array.isArray(array)) return array == null ? array : +array;
  if (array.length === 0) return undefined;

  const option: MathOption = assign({ operand: 'sum', deep: true }, userOption);
  const convert: FnIteratee = _makeIteratee(option.iteratee);

  let answer: number = undefined;
  let count: number = 0;
  let output: Numeric = undefined;

  switch (option.operand) {
    case 'max': answer = -Infinity;
      break;
    case 'min': answer = +Infinity;
      break;
    case 'sum': answer = 0;
      break;
    case 'mean': answer = 0;
      break;
  }

  // tslint:disable-next-line:cyclomatic-complexity
  array.forEach((item: Numerics) => {

    // use the temp variable to store the current item
    // so we are not mutating the array (when nested)
    let temp: Numeric;

    // special treatment for nested array

    if (Array.isArray(item)) {
      // only process the nested array if option.deep is set to true
      temp = option.deep ? _calcBy(item, option) : undefined;
      if (option.operand === 'min' || option.operand === 'max') {
        // only perform conversion for min/max as this will
        // return the item in its original format (such as object)
        temp = temp != null ? convert(temp) : undefined;
      }
    } else {
      // if not array, call the convert iteratee
      temp = item != null ? convert(item) : undefined;
    }

    // if result is numeric
    if (isNumeric(temp)) {

      // force a conversion to number format
      temp = +temp;

      switch (option.operand) {

        case 'max':
          if (temp > answer) {
            answer = temp;
            // output the original element format (could be object)
            output = item;
          }
          break;

        case 'min':
          if (temp < answer) {
            answer = temp;
            // output the original element format (could be object)
            output = item;
          }
          break;

        case 'mean':
        case 'sum':
          answer += temp;
          // output the sum regardless of the element format
          output = answer;
          // increase counter, used by mean to perform division at the end
          count++;
          break;

        // case 'mean':
        //   answer = (((answer * (count)) + temp) / (count + 1));
        //   count++;
        //   // output the mean regardless of the element format
        //   output = answer;
        //   break;

      }

    }

  });

  // if it is mean, the output is actually the sum at this stage,
  // hence return the sum/count for the mean average
  return option.operand === 'mean' ? output ? (output as number) / count : output : output;

}

