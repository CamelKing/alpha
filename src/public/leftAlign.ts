/**
 * Wapper for pad() to produce left aligned space padded string
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
import { pad } from './pad';

export function leftAlign(input: string, len: number, padTxt?: string): string {

  return pad(input, len, padTxt, Align.left);

}
