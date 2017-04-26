/**
 * rounding down a value by ignoring anything below the precision point
 *
 * @since 0.0.1
 * @category Number
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {number} value
 * @param {number} [exp]
 * @returns {number}
 */

import { _round } from '../base/_round';

export function roundDown(value: any, precision?: number): number {
  return _round(value, precision, 'floor');
}
