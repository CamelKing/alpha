/**
 * Return a new string with first character capitalised
 * and the rest in lower case.
 *
 * 'A QUICK BROWN FOX' => 'A quick brown fox'
 * '1 QUICK BROWN FOX' => '1 quick brown fox'
 * '# QUICK BROWN FOX' => '# quick brown fox'
 * '' => ''
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {string} input - original string to capitalised.
 * @returns {string}
 */

export function capitalise(input: string): string {
  if (!input) return '';
  return input[0].toUpperCase()
    + (input.length > 1 ? input.slice(1).toLowerCase() : '');
}
