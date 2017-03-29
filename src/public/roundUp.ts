import { _round } from '../private/_round';
import { theTypeOf } from './theTypeOf';

/**
 * roundin up to the number in the next precision.
 *
 * @since 0.0.1
 * @category Number
 *
 * @export
 * @param {number} value
 * @param {number} [exp]
 * @returns {number}
 */
export function roundUp(value: any, exp?: number): number {
  return _round(value, exp, 'ceil');
}
