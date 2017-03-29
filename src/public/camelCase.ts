/**
 * convert string to camel case.
 *
 * 'This is a test' => 'thisIsATest'
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _makeCase } from '../private/_makeCase';

export function camelCase(input: string): string {
  return _makeCase(input, 'camelCase');
}
