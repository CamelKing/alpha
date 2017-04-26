/**
 * Function to return the sum numbers within the array passed in.
 *
 * This function will ignore any nested array.
 *
 * Implemented as an wrapper for _calcBy().
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor April 18, 2017
 *
 * @export
 * @param {Numerics[]} array
 * @returns {Numeric}
 */

import { Numeric, Numerics } from '../constants';

import { _calcBy } from '../base/_calcBy';

export function sum(array: Numerics[]): Numeric {
  return _calcBy(array, { operand: 'sum', deep: false });
}
