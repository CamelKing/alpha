/**
 * Construct an object and populates it's property using
 * the Pairs array passed in.
 *
 * Pairs are array in the format of [key:value]
 *
 * Key will be created as property in object if does not
 * exist, else if's content will be updated.
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor April 16, 2017
 *
 * @export
 * @param {Pair[]} pairs
 * @returns {object}
 */

import { Pair, Pairs } from '../constants';

import { clone } from './clone';
import { theTypeOf } from './theTypeOf';

export function fromPairs(pairs: Pairs): object {

  const output: object = {};

  if (!Array.isArray(pairs) || pairs.length <= 0) return output;

  pairs.forEach((pair: Pair) => {

    const { length } = pair;

    // if empty array, skip it
    if (length === 0) return;

    // if the array only has one item, then [key, undefined]
    const key: string = pair[0];
    // take note that if pair only one element, pair[1] = undefined
    const value: any = pair[1];
    const type: string = theTypeOf(value);

    if (0 < length && length <= 2) {

      // switch case ensure we make a copy of the value rather than
      // making a reference (object, string, array)
      switch (type) {

        case 'number':
        case 'boolean':
        case 'symbol':
          output[key] = value;
          break;

        case 'date':
          output[key] = new Date(value.getTime());
          break;

        case 'string':
        case 'array':
          output[key] = value.slice(0);
          break;

        case 'object':
        case 'error':
          output[key] = clone(value);
          break;

        case 'nan':
          output[key] = NaN;
          break;

        case 'undefined':
        case 'null':
          output[key] = value;
          break;

        default:
          // any other type, such as promise, etc.
          // will have the value as their type.
          output[key] = type;
          break;

      }

    } else if (length > 2) {
      // if the arrays is more than a pair ... then assign the array [2nd, 3rd, ...] to the key [1st]
      output[key] = pair.slice(1);
    }

  });

  return output;

}
