/**
 * private function to Truncate a string into a given length.
 * The truncation will be done by word break.
 * In the event it is not possible to truncate by word break,
 * or the omission of the last word result in a big gap in
 * the string, the word would be broken bt hypen.
 * (hence the name of this function)
 *
 * Result is returned in an array of strings.
 * [0] - the truncated string
 * [1] = the hyphen, if applicable.
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 14, 2017
 *
 * @param {string} input
 * @param {number} len
 * @param {string} [hyphen]
 * @returns {string[]}
 */

import { HalfWordLen, Hyphen } from '../constants';

export function _hyphenateToArray(input: string,
  length: number,
  hyphen: string = Hyphen): string[] {

  // short length or empty string, return empty array
  if (!input || length <= 0) return ['', ''];

  // if input string is short, just return a copy of it
  if (input.length <= length) return [input.slice(0), ''];

  // if truncated space is shorter than two words, disable hypehnation
  // by setting avg word length to full len of truncated string
  const avgWordLen: number
    = (length <= (HalfWordLen * 4 + 1)) ? length : HalfWordLen * 2;


  // if no line break found, set it to the end of string
  let lineBreak: number = input.search(/\n/);
  if (lineBreak < 0) lineBreak = input.length;

  // if the line is shorter than desired length,
  // return the line as is, with no hyphenation
  if (lineBreak <= length) return [input.substr(0, lineBreak + 1), ''];

  // find out where the last word break is in the truncated string
  const wordBreakBefore: number = input.substr(0, length).search(/\s+(?!.*\s+)/);

  // find out where the next word starts after the previous last word break
  const wordBreakAfter: number = length
    + input.substr(length, lineBreak).search(/\S/);

  if (wordBreakBefore === length - 1 || wordBreakAfter > length) {
    // the last word breaks fall on the last place we truncate
    // or
    // the next word starts after the truncation point,

    // so just return the current line with no hyphenation
    return [input.substr(0, length), ''];
  }

  if (wordBreakBefore <= length - avgWordLen) {
    // if the last word break is too far to the left
    // i.e. > one average word length
    // return truncated string with space reserved for hyphenation
    return [input.substr(0, length - hyphen.length), hyphen];
  }

  // if (wordBreakBefore > len - avgWordLen) {
  // if the next word is ok to be omitted
  // no hyphenation needed here
  return [input.substr(0, wordBreakBefore + 1), ''];

}
