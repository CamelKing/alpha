import { theTypeOf } from './alpha';

/**
 * rounding up number, rounding precision determined by [exp]
 *
 * a positive [exp] means precision to the left of decimal point
 * a negative [exp] means precision to the right of the decimal point
 *
 * @export
 * @param {number} value
 * @param {number} [exp=0]
 * @returns {number}
 */
export function round(value: any, exp?: number): number {
  return _round(value, exp);
}

/**
 * rounding down by truncating the decimal point away
 *
 * @export
 * @param {number} value
 * @param {number} [exp=0]
 * @returns {number}
 */
export function roundDown(value: any, exp?: number): number {
  return _round(value, exp, 'floor');
}

/**
 * roundin up to the number in the next precision.
 *
 * @export
 * @param {number} value
 * @param {number} [exp=0]
 * @returns {number}
 */
export function roundUp(value: any, exp?: number): number {
  return _round(value, exp, 'ceil');
}

// private functions and declarations
// used by _roundxx() public functions above
type RoundOperand = 'round' | 'ceil' | 'floor';
const defaultRoundOperand: RoundOperand = 'round';

/**
 * Private function that setup the operation of precision rounding
 *
 * @param {RoundOperand} [ops=defaultRoundOperand]
 * @param {*} value
 * @param {number} [exp=0]
 * @returns {number}
 */
function _round(value: any,
                exp?: number,
                ops?: RoundOperand ): number {

  switch (theTypeOf(value)) {

    case 'function':
      return _round( value(), exp, ops );

    case 'number':
      return _decimalAdjust( value, exp, ops );

    case 'string':
      return _decimalAdjust( +value, exp, ops);

    default:
      return NaN;

  }

}

/**
 * Private function perfoming rounding by precision
 *
 * @param {number} value
 * @param {number} [exp=0]
 * @param {RoundOperand} ops
 * @returns {number}
 */
function _decimalAdjust(value: number,
                        exp?: number,
                        ops?: RoundOperand ): number {

  if (! ['round', 'ceil', 'floor'].includes( ops )) {
    ops = 'round';
  }

  exp = exp || 0;

  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || (exp % 1 !== 0)) {
    return NaN;
  }

  // If the exp is zero just return simple rounding by Math library
  if (exp === 0) {
    return Math[ops](value);
  }

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
