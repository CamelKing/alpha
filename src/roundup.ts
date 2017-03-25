import { _round } from './internal/_alpha';
import { theTypeOf } from './alpha';

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
