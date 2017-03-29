/**
 * convert string to COBOL case.
 *
 * 'This is a test' => 'THIS-IS-A-TEST'
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _makeCase } from '../private/_makeCase';

export function cobolCase(input: string): string {
  return _makeCase(input, 'COBOL-CASE');
}
