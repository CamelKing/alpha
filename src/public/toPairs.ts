/**
 * Enumerate thru an object's own property and produce an array of
 * [key:value] Pairs.
 *
 * Note: only handle genuine object and error object.
 * Others such as Date object, function object etc. will not be handled.
 *
 * Order of pair within the Pairs array is not guaranteed.
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {object} obj
 * @returns {Pairs}
 */

import { Pairs } from '../constants';
import { theTypeOf } from './theTypeOf';

export function toPairs(input: object): Pairs {

  if (!input) return [];

  const type: string = theTypeOf(input);

  if (!(['object', 'error'].includes(type))) return [];

  const output: Pairs = [];

  Object.getOwnPropertyNames(input).forEach((key: string) => {

    const valueType: string = theTypeOf(input[key]);
    switch (valueType) {

      case 'object':
      case 'error':
        output.push([key, toPairs(input[key])]);
        break;

      default:
        output.push([key, input[key]]);
        break;
    }
  });

  return output;

}
