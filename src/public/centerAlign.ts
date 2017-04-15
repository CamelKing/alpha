/**
 * Wapper for pad() to produce center aligned space padded string
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 15, 2017
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {string} [padTxt]
 * @returns {string}
 */

import { Align } from '../constants';
import { pad } from './pad';

export function centerAlign(input: string, len: number, padTxt?: string): string {

  return pad(input, len, padTxt, Align.center);

}
