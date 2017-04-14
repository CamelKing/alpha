/**
 * convert string to snake case.
 *
 * 'This is a test' => 'this_is_a_test'
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

export function snakeCase(input: string): string {
  return _makeCase(input, 'snake_case');
}
