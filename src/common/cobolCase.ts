/**
 * convert string to COBOL case.
 *
 * 'This is a test' => 'THIS-IS-A-TEST'
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _makeCase } from '../base/_makeCase';

export function cobolCase(input: string): string {
  return _makeCase(input, 'COBOL-CASE');
}
