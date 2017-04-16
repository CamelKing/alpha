/**
 * Produce a new copy of string, padded with specific char on right, or left
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {string} input
 * @param {number} length = if < input.length then return same input
 * @param {string} [padChar]  = only first char would be used
 * @param {Align} [align]
 * @returns {string}
 */

import { Align, Space } from '../constants';

import { round } from './round';

export function pad(input: string,
  length: number,
  pad?: string,
  align?: Align): string {

  let output: string = input.slice(0);
  // return if len is short/-ve before proceed further
  // so we dont have a do a lot of range checking on len.
  if (length > input.length) {

    const padChar: string = '' + (pad || Space);
    const padText: string = padChar[0].repeat(length - output.length);

    // no need to assign default value to align,
    // as the default: in switch will take care of this
    // align = align || Align.left;

    switch (align) {

      case Align.right:
        output = padText + input;
        break;

      case Align.center:
        const plen: number = padText.length;
        const left: number = round(plen / 2, 0);
        const right: number = plen - left;
        output = padChar[0].repeat(left) + output + padChar[0].repeat(right);
        break;

      // case Align.left:
      default:
        output += padText;
        break;

    }

  }

  return output;

}
