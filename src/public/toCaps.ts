/**
 * Return a new string with first character of all words capitalised
 * and the rest in lower case.
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor 0.2.0 April 25, 2017
 *
 * @export
 * @param {string} input - original string to capitalised.
 * @param {boolean} [all=false] - true => capitalise all words
 * @returns {string}
 */

import { resUnicodeWorkBreakers } from '../constants';

export function toCaps(input: string): string {

  if (!input) return '';

  const byWords: RegExp
    = new RegExp(`[a-z]+[\\s${resUnicodeWorkBreakers}]*`, 'g');

  return input.toLowerCase()
    .replace(byWords, (s: string) => s.charAt(0).toUpperCase() + s.slice(1));

}
