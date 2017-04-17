/**
 * Return the type of object passed in, in a lowercase string
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {*} obj - object/primitives/any to indentify the type of
 * @returns {string}
 */

export function theTypeOf(obj: any): string {
  const type: string
    = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  if (type === 'number' && isNaN(obj)) return 'nan';
  return type;
};
