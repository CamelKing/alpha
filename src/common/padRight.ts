/**
 * Wapper for pad() to produce string padded with space on the right.
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
import { leftAlign } from './leftAlign';

export function padRight(input: string, len: number, padTxt?: string): string {
  return leftAlign(input, len, padTxt);
}
