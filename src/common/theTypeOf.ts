/**
 * Return the type of object passed in, in a lowercase string
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor 0.2.0 April 27, 2017
 *
 * @export
 * @param {*} obj - object/primitives/any to indentify the type of
 * @returns {string}
 */

export function theTypeOf(obj: any): string {
  if (Number.isNaN(obj)) return 'nan';
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
