/**
 * Return the type of object passed in, in a lowercase string
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {*} obj - object/primitives/any to indentify the type of
 * @returns {string}
 */
export function theTypeOf(obj: any): string {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
