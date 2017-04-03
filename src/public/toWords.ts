/**
 * break a string into an array of words.
 * All blank spaces, punctuations, and non printable characters
 * would be considered word break characters and totally ignored.
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string[]}
 */

import { Apostrophe, reAllWordBreakers, reLeftSingleQuote } from '../constants';

export function toWords(input: string): string[] {

  // Note 1:
  // to handle the differences and potential conflict of a legacy problem,
  // the interchangable use of single quote and apostrohe,
  // the program will swap any single quote into apostrophe, which would not be
  // considered a word breaker.
  //
  // Note 2:
  // BUT this swapping only happen if the single
  // quote is used by itself (such as "Joseph's"). Single quotes that is used
  // in consequtive manner (such as ''''') would not be swapped,
  // and will be treated as word breaker (hence removed in this function)

  return input ? input.split(reAllWordBreakers).filter((w: any) => !!w) : [];
}
