/**
 * Private function returning a copy of the string with
 * the first character converted to either lowercase
 * or uppercase (depends on the mode parameter)
 *
 * mode has to be either 'toLowerCase' or 'toUpperCase', default
 * is upperCase.
 *
 * Note: this function will skip all white spaces, punctuations
 *       and non printable character when deciding which is
 *       first character
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {string} input
 * @param {CaseOperand} mode - 'toLowerCase' or 'toUpperCase'
 * @returns {string}
 */

import { CaseOperand, reFirstWord } from '../constants';

import { theTypeOf } from '../common/theTypeOf';

export function _firstCase(input: string, mode?: CaseOperand): string {

  if (theTypeOf(input) !== 'string') return '';
  if (input.length === 0) return input.slice(0);
  if (!['toLowerCase', 'toUpperCase'].includes(mode)) mode = 'toUpperCase';

  return input.replace(reFirstWord, (match: string) => match[0][mode]() + match.slice(1));

}
