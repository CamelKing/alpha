/**
 * convert string to upper snake case.
 *
 * 'This is a test' => 'THIS_IS_A_TEST'
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _makeCase } from '../private/_makeCase';

export function upperSnakeCase(input: string): string {
  return _makeCase(input, 'UPPER_SNAKE_CASE');
}
