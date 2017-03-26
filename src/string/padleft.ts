/**
 * Wapper for rightAlign() to produce string padded with space on the left.
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {string} padTxt
 * @returns {string}
 */

/*
TODO: for some reason this code won't work.
As of now, this is a duplicate code from rightAlign().

import { FnAlign, rightAlign } from '../alpha';
export const padLeft: FnAlign = rightAlign;
*/

import { Align, rightAlign } from '../alpha';

export function padLeft(input: string, len: number, padTxt?: string): string {
  return rightAlign(input, len, padTxt);
}
