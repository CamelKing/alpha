/**
 * convert string to kebab case.
 *
 * 'This is a test' => 'this-is-a-test'
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

import { _makeCase } from '../private/_makeCase';

export function kebabCase(input: string): string {
  return _makeCase(input, 'kebab-case');
}
