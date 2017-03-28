/**
 * Wapper for pad() to produce right aligned space padded string
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {string} [padTxt]
 * @returns {string}
 */

import { Align, pad } from '../alpha';

export function rightAlign(input: string,
  len: number,
  padTxt?: string): string {

  return pad(input, len, padTxt, Align.right);

}

