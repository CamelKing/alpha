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

  array.forEach((item: Numerics) => {

    if (Array.isArray(item)) {
      item = option.deep ? _calcBy(item, option) : undefined;
    }

    let temp: Numeric = item != null ? convert(item) : undefined;

    if (isNumeric(temp)) {

      temp = +temp;

      switch (option.operand) {

        case 'max':
          if (temp > answer) {
            answer = temp;
            output = item;
          }
          break;

        case 'min':
          if (temp < answer) {
            answer = temp;
            output = item;
          }
          break;

        case 'sum':
          answer += temp;
          output = answer;
          break;

        case 'mean':
          answer = (((answer * (count)) + temp) / (count + 1));
          count++;
          output = answer;
          break;

      }

    }

  });

  return output;

}

