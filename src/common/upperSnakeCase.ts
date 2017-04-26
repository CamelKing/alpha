/**
 * convert string to upper snake case.
 *
 * 'This is a test' => 'THIS_IS_A_TEST'
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

export function upperSnakeCase(input: string): string {
  return _makeCase(input, 'UPPER_SNAKE_CASE');
}
