/**
 * Produce a string in JSON format for any standard json object
 *
 * Implemented as a data pre-prearator and wrapper for JSON.stringify()
 *
 * Note: (1) will handle a function by executing it and stringify the result
 *       (2) will ignore Symbol, undefined, null and promises
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {*} input
 * @returns {string}
 */

import { _stringifyReplacer } from '../base/_stringifyReplacer';
import { theTypeOf } from './theTypeOf';

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
      str = JSON.stringify(input, _stringifyReplacer);
      break;
  }

  // escape the output json string
  return str.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

}
