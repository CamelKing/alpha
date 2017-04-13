/**
 * Generate a string comprises of random text up to
 * the specified length. There will be no spaces in
 * between generated text. [A-Z,a-z,0-9] only.
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {number} [len]
 * @returns {string}
 */

import { randomInteger } from './randomInteger';

export function randomText(len?: number): string {

  if (!len || len <= 0) len = randomInteger(5, 20);

  let str: string = '';
  do {
    str += Math.random().toString(36).substr(2, len);
  } while (str.length < len);
  return str.substr(0, len);

}

