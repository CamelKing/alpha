/**
 * roundin up to the number in the next precision.
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

export function roundUp(value: any, precision?: number): number {
  return _round(value, precision, 'ceil');
}
