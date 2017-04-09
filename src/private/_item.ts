/**
 * Return the first or last element of the array.
 *
 * If this is not an array, or an empty array, return undefined instead.
 *
 * @export
 * @param {any[]} input
 * @param {boolean} [last=false] - default is false = head
 * @returns {any[]}
 */

import { clone } from '../public/clone';
import { theTypeOf } from '../public/theTypeOf';

export function _item(input: any[], last: boolean = false): any {

  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return undefined;
  const item: any = input[last ? input.length - 1 : 0];

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
