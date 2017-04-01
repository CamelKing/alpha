/**
 * Private function perfoming rounding by precision
 *
 * @since 0.0.1
 * @category Number
 *
 * Note: the implementation for tie breaker (0.5) is different from
 *       standard javascript (which is round up to the larger number),
 *       here the rounding is done as 'away from zero'.
 *        123.5 =>  124 (same as JS)
 *       -123.5 => -124 (JS = -123)
 *
 * @param {number} value
 * @param {number} [exp]
 * @param {RoundOperand} [ops]
 * @returns {number}
 */

import { RoundOperand } from '../_constants';

export function _decimalAdjust(value: number,
  exp?: number,
  ops?: RoundOperand): number {

  if (!['round', 'ceil', 'floor'].includes(ops)) {
    ops = 'round';
  }

  exp = exp || 0;

  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || (exp % 1 !== 0)) {
    return NaN;
  }

  // // If the exp is zero just return simple rounding by Math library
  // if (exp === 0) {
  //   return Math[ops](value);
  // }

  // negative flag
  const negative: number = (value < 0 ? -1 : 1);

  // turning all negatvie numbers positive, so rounding is done on value
  // of number alone (important for accounting). To be revered at end.
  value *= negative;

  // convert into scientific form
  const valueStr: string[] = value.toExponential().split('e');

  // get the base number
  const base: number = +valueStr[0];

  // get the exponent part
  let exponent: number = +valueStr[1];

  // adjust exponent by the precision required, so the Math.round() can
  // easily perform rounding at the right decimal precision.
  exponent -= exp;

  // reconstruct number  with precision adjusted scientific form
  const expForm: number = +(base + 'e' + exponent);

  // perform rounding, and reapply the negative flag
  const rounded: number = Math[ops](expForm) * negative;

  // remove precision adjustment done earlier and return the rounded value
  return +(rounded + 'e' + exp);

}
