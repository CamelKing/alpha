/**
 * Private function that setup the operation of precision rounding
 *
 * @since 0.0.1
 * @category Number
 *
 * @param {*} value
 * @param {number} [exp=0]
 * @param {RoundOperand} [ops=defaultRoundOperand]
 * @returns {number}
 */

import { RoundOperand } from '../../_constants';
import { _decimalAdjust } from './_decimaladjust';
import { theTypeOf } from '../../object/thetypeof';

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
