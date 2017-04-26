/**
 * Wapper for rightAlign() to produce string padded with space on the left.
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {string} [padTxt]
 * @returns {string}
 */

import { Align } from '../constants';
import { rightAlign } from './rightAlign';

export function padLeft(input: string, len: number, padTxt?: string): string {
  return rightAlign(input, len, padTxt);
}
