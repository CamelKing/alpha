
/**
 * return a copy of the string with the first character converted to uppercase
 * where applicable.
 *
 * Note: this function will skip all white spaces, punctuations
 *       and non printable character when deciding which is
 *       first character
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _firstCase } from '../private/_firstCase';

export function upperFirst(input: string): string {
  return _firstCase(input, 'toUpperCase');
}
