import { theTypeOf } from './alpha';

/**
 * Produce a string in JSON format for any standard json object
 *
 * Note: (1) will handle a function by executing it and stringify the result
 *       (2) will ignore Symbol, undefined, null and promises
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {*} input
 * @param {string} [space] - used for spacing between for JSON strings
 * @returns {string}
 */

export function stringify(input: any): string {

  let str: string;
  const type: string = theTypeOf(input);

  switch (type) {

    case 'function':
      str = stringify(input());
      break;

    case 'symbol':
    case 'promise':
    case 'undefined':
    case 'null':
      str = '';
      break;

    default:
      str = JSON.stringify(input, errorReplacer);
      break;
  }

  return str.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

}

/**
 * Replacer function used in JSON.stringify to handle error object.
 *
 * Usage: JSON.stringify( object, fnError2JSON, ' ');
 *
 *
 * @since 0.0.1
 * @category Object
 *
 * Not exported at the moment, private function used by stringify().
 *
 * @export
 * @param {string} key
 * @param {*} value
 * @returns {*}
 */
function errorReplacer(key: string, value: any): any {
  if (value instanceof Error) {
    const error: object = {};
    Object.getOwnPropertyNames(value)
      .forEach(function (vkey: string): void {
        error[vkey] = value[vkey];
      });
    return error;
  } else {
    return value;
  }
}
