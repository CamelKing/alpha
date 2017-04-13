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

import { _round } from '../private/_round';
import { theTypeOf } from './theTypeOf';

export function roundDown(value: any, exp?: number): number {
  return _round(value, exp, 'floor');
}
