/**
 * return a copy of the string with the first character
 * converted to either lowercase or uppercase (depends
 * on the mode parameter)
 *
 * mode has to be either 'toLowerCase' or 'toUpperCase'
 *
 * Note: this function will skip all white spaces, punctuations
 *       and non printable character when deciding which is
 *       first character
 *
 * @export
 * @param {string} input
 * @param {CaseOperand} mode - 'toLowerCase' or 'toUpperCase'
 * @returns {string}
 */

import { CaseOperand, reFirstWord } from '../constants';

export function _firstCase(input: string, mode: CaseOperand): string {

  return input ?
    input.replace(reFirstWord, (match: string) => match[0][mode]() + match.slice(1)) : '';

}
