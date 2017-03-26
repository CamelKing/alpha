/**
 * Wapper for pad() to produce string padded with space on the right.
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
As of now, this is a duplicate code from leftAlign().

import { Align, leftAlign } from '../alpha';
export type FnAlign = (s: string, l: number, p?: string, a?: Align) => string;
export const padRight: FnAlign = leftAlign;
*/

import { Align, leftAlign } from '../alpha';

export type FnAlign = (s: string, l: number, p?: string, a?: Align) => string;


export function padRight(input: string, len: number, padTxt?: string): string {
  return leftAlign(input, len, padTxt);
}
