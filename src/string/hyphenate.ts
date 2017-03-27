/**
 * truncate one line from a long string, and optionally
 * put a hyphen character to break the word being cut off,
 * if any.
 *
 * NOTE: Default hyphen character is '-'
 *
 * @export
 * @param {string} input
 * @param {number} [len=0]
 * @param {string} [hyphen='-']
 * @returns {string}
 */

import { _hyphenateToArray } from '../.private/string/_hyphenatetoarray';

export function hyphenate(input: string,
  len: number,
  hyphen?: string): string {

  return _hyphenateToArray(input, len, hyphen).join('');

}
