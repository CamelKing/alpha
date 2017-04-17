/**
 * Wapper for pad() to produce right aligned space padded string
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

export function rightAlign(input: string, len: number,
  padText?: string): string {

  return pad(input, len, { padText, align: Align.right });

}

