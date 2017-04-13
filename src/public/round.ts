/**
 * rounding up number, rounding precision determined by [exp]
 *
 * a positive [exp] means precision to the left of decimal point
 * a negative [exp] means precision to the right of the decimal point
 *
 * @since 0.0.1
 * @category Number
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {number} value
 * @param {number} [precision]
 * @returns {number}
 */

import { _round } from '../private/_round';

export function round(value: any, precision?: number): number {
  return _round(value, precision);
}
