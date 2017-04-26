/**
 * Private function perfoming rounding by precision
 *
 * Note: the implementation for tie breaker (0.5) is different from
 *       standard javascript (which is round up to the larger number),
 *       here the rounding is done as 'away from zero'.
 *        123.5 =>  124 (same as JS)
 *       -123.5 => -124 (JS = -123)
 *
 * @since 0.0.1
 * @category Number
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {*} input
 * @param {number} [precision]
 * @param {RoundOperand} [operand]
 * @returns {number}
 */

import { RoundOperand } from '../constants';
import { theTypeOf } from '../common/theTypeOf';

export function _round(input: any,
  precision?: number,
  operand?: RoundOperand): number {

  // this function accept the number to round in 3 formats:
  // number, string (which should converts to a number, or 0 if not),
  // and a function which returns one of these three types (recursive call).
  // anything other than these 3 will result in a NaN return value.

  // compute the actual number to round up based on the type of input
  let numberToRound: number;

  switch (theTypeOf(input)) {

    case 'function':
      return _round(input(), precision, operand);

    case 'number':
      numberToRound = input;
      break;

    case 'string':
      numberToRound = +input;
      break;

    default:
      return NaN;

  }

  // precision default to zero decimal, if not an integer return NaN
  precision = precision || 0;
  if (precision % 1 !== 0) return NaN;

  // default to just normal rounding
  if (!['round', 'ceil', 'floor'].includes(operand)) operand = 'round';

  // the problem with this is inconsistency in handling -ve numbers
  //
  // // If the precision is zero just return simple rounding by Math library
  // if (precision === 0) {
  //   return Math[ops](value);
  // }

  // save the negative flag
  const negative: number = (numberToRound < 0 ? -1 : 1);

  // turning all negatvie numbers positive, so rounding is done on value
  // of number alone (important for accounting). To be reversed at end.
  numberToRound *= negative;

  // convert into scientific form
  const valueStrings: string[] = numberToRound.toExponential().split('e');

  // get the base number
  const base: number = +valueStrings[0];

  // get the exponent part
  let exponent: number = +valueStrings[1];

  // adjust exponent by the precision required, so the Math.round() can
  // easily perform rounding at the right decimal precision.
  exponent -= precision;

  // reconstruct number  with precision adjusted scientific form
  const expForm: number = +(base + 'e' + exponent);

  // perform rounding, and reapply the negative flag
  const rounded: number = Math[operand](expForm) * negative;

  // remove precision adjustment done earlier and return the rounded value
  return +(rounded + 'e' + precision);

}
