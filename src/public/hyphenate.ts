/**
 * truncate one line from a long string, and optionally
 * put a hyphen character to break the word being cut off,
 * if any.
 *
 * NOTE: Default hyphen character is '-'
 *
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {string} [hyphen]
 * @returns {string}
 */

import { _hyphenateToArray } from '../private/_hyphenateToArray';

export function hyphenate(input: string,
  len: number,
  hyphen?: string): string {

  return _hyphenateToArray(input, len, hyphen).join('');

}
