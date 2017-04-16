/**
 * Produce an array with all the enum keys
 *
 * Note: 1) Typescript enum implementation,
 *       2) Does not work with const enum.
 *
 * @since 0.0.1
 * @category Collections
 *
 * @refactor April 16, 2017
 *
 * @export
 * @param {*} en
 * @returns {string[]}
 */

export function enumKeys(en: any): string[] {
  return Object.keys(en).
    filter((key: string) => !isNaN(Number(en[key])));
}
