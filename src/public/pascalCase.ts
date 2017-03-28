/**
 * convert string to Pascal case.
 *
 * 'This is a test' => 'ThisIsATest'
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _makeCase } from '../private/_makeCase';

export function pascalCase(input: string): string {
  return _makeCase(input, 'PascalCase');
}
