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

import { Align, Space, StringOption } from '../constants';

import { assign } from './assign';
import { round } from './round';

export function pad(input: string, length: number,
  userOption?: StringOption): string {
  // pad?: string,
  // align?: Align): string {

  const option: StringOption = assign({ padText: Space, align: Align.left }, userOption);

  let output: string = input.slice(0);
  // return if len is short/-ve before proceed further
  // so we dont have a do a lot of range checking on len.
  if (length > input.length) {

    const padChar: string = '' + option.padText;
    const padText: string = padChar[0].repeat(length - output.length);

    switch (option.align) {

      case Align.right:
        output = padText + input;
        break;

      case Align.center:
        const plen: number = padText.length;
        const left: number = round(plen / 2, 0);
        const right: number = plen - left;
        output = padChar[0].repeat(left) + output + padChar[0].repeat(right);
        break;

      case Align.left:
      default:
        output += padText;
        break;

    }

  }

  return output;

}
