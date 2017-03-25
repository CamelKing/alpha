/**
 * Private function that setup the operation of precision rounding
 *
 * @param {*} value
 * @param {number} [exp=0]
 * @param {RoundOperand} [ops=defaultRoundOperand]
 * @returns {number}
 */

import { _decimalAdjust } from './_alpha';
import { theTypeOf } from '../alpha';

// private functions and declarations
// used by _roundxx() public functions above
export type RoundOperand = 'round' | 'ceil' | 'floor';

export function _round(value: any,
  exp?: number,
  ops?: RoundOperand): number {

  switch (theTypeOf(value)) {

    case 'function':
      return _round(value(), exp, ops);

    case 'number':
      return _decimalAdjust(value, exp, ops);

    case 'string':
      return _decimalAdjust(+value, exp, ops);

    default:
      return NaN;

  }

}
