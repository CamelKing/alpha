/**
 * Return the nth element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {any[]} input
 * @param {boolean} [last=false] - default is false = head
 * @returns {any[]}
 */

import { clone } from '../public/clone';
import { theTypeOf } from '../public/theTypeOf';

export function nth(input: any[], index: number = 0): any {

  if (!Array.isArray(input)) return undefined;

  const item: any = input[index < 0 ? input.length + index : index];

  // switch block to make sure we make a copy of the value

  switch (theTypeOf(item)) {

    case 'null':
      return null;

    case 'undefined':
      return undefined;

    case 'object':
    case 'error':
      return clone(item);

    case 'date':
      return new Date(item.getTime());

    case 'array':
    case 'string':
      return item.slice(0);

    // case 'symbol':
    // case 'boolean':
    // case 'number':
    default:
      return item;

  }

}
