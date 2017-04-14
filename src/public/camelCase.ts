/**
 * convert string to camel case.
 *
 * 'This is a test' => 'thisIsATest'
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

import { _makeCase } from '../private/_makeCase';

export function camelCase(input: string): string {
  return _makeCase(input, 'camelCase');
}
