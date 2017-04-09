/**
 * Return the first element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @export
 * @param {any[]} input
 * @returns {any[]}
 */

import { clone } from './clone';
import { theTypeOf } from './theTypeOf';

export function head(input: any[]): any {

  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return undefined;

  switch (theTypeOf(input[0])) {

    case 'null':
      return null;

    case 'undefined':
      return undefined;

    case 'object':
    case 'error':
      return clone(input[0]);

    case 'date':
      return new Date(input[0].getTime());

    case 'array':
    case 'string':
      return input[0].slice(0);

    // case 'symbol':
    // case 'boolean':
    // case 'number':
    default:
      return input[0];

  }

}
