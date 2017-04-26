/**
 * Generate a string comprises of random text up to
 * the specified length. There will be no spaces in
 * between generated text. [A-Z,a-z,0-9] only.
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {number} [len]
 * @returns {string}
 */

import { randomInteger } from './randomInteger';

export function randomText(length?: number): string {

  length = (!length || length <= 0) ? randomInteger(5, 20) : length;

  let str: string = '';
  do {
    str += Math.random().toString(36).substr(2, length);
  } while (str.length < length);
  return str.substr(0, length);

}

