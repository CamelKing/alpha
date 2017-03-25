import { _round } from '../_alpha';
import { theTypeOf } from '../alpha';

/**
 * rounding down a value by ignoring anything below the precision point
 *
 * @since 0.0.1
 * @category Number
 *
 * @export
 * @param {number} value
 * @param {number} [exp=0]
 * @returns {number}
 */
export function roundDown(value: any, exp?: number): number {
  return _round(value, exp, 'floor');
}
