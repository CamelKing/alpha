/**
 * Truncate a long strings into shorter one, optinally pad it
 * with trailing characters such as '...'
 *
 * truncateToArray() is the private function that do all the
 * works, returning an array with first item as truncated text,
 * and second item as padding text.
 *
 * truncate() is the exported function to be called by consumer.
 *
 * Note: default padding is '...' and '…'.
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {string} input
 * @param {number} [len=0]
 * @param {string} [pad='...']
 * @returns {string}
 */

import { _truncateToArray } from '../base/_truncateToArray';

export function truncate(input: string,
  length: number,
  pad?: string): string {

  return _truncateToArray(input, length, pad).join('');

}
