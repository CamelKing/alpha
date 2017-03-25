/**
 * Return a new copy of string with leading and training white spaces removed.
 *
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @returns {string}
 */

export function trim(input: string): string {
  // \s - a single white space character,
  //      including space, tab, form feed, line feed
  //      and other Unicode spaces.
  //      [   \f\n\r\t\v\u00a0\u1680\u180e\u2000
  //        - \u200a\u2028\u2029\u202f\u205f\u3000\ufeff ]
  return input.replace(/^[\s]+|[\s]+$/g, '');
}
