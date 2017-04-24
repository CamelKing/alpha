/**
 * return an object out of any variables passed in.
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor 0.2.0 April 25, 2017
 *
 * @export
 * @param {*} anyObj
 * @returns {object}
 */

import { clone } from './clone';
import { theTypeOf } from './theTypeOf';

export function toObject(input: any): object {

  let output: object = {};

  switch (theTypeOf(input)) {

    case 'error':
    case 'object':
      output = clone(input);
      break;

    case 'array':
      output = input.slice(0);
      break;

    default:
      // plainObj[type] = anyVar;
      output = Object(input);
      break;
  }

  return output;

};
