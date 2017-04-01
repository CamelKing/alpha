/**
 * Convert a long string into a paragraph in the form of
 * an array, one item per line.
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @param {number} colsize
 * @returns {string[]}
 */

import { _hyphenateToArray } from '../private/_hyphenateToArray';
import { leftAlign } from './leftAlign';
import { trim } from './trim';
import { trimLeft } from './trimLeft';

export function toParagraph(input: string,
  colsize: number): string[] {

  if (!input) return [];

  const firstPass: string[] = input.split('\n');
  const finalPass: string[] = [];

  firstPass.forEach((line: string) => {

    while (line.length > colsize) {
      const newLines: string[] = _hyphenateToArray(line, colsize, '-');
      finalPass.push(leftAlign(trimLeft(newLines.join('')), colsize));
      // remove text already pushed on final pass, and continue
      // processing the remaining of the lines.
      line = line.substr(newLines[0].length);
    }
    finalPass.push(trim(line));
  });

  return finalPass;

}
