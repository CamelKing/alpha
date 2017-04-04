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
 * @export
 * @param {Pair[]} pairs
 * @returns {object}
 */

import { Pair, Pairs } from '../constants';

import { clone } from "./clone";
import { isNumeric } from './isNumeric';
import { theTypeOf } from './theTypeOf';

export function fromPairs(pairs: Pairs): object {

  const output: object = {};

  if (!Array.isArray(pairs) || pairs.length <= 0) return output;

  pairs.forEach((pair: Pair) => {

    const len: number = pair.length;
    const key: string = '' + pair[0];
    const value: any = pair[1];

    if (0 < len && len <= 2) {

      const type: string = theTypeOf(value);

      switch (type) {

        case 'number':
        case 'boolean':
          output[key] = value;
          break;

        case 'date':
          output[key] = new Date(value.getTime());
          break;

        case 'string':
          if (isNumeric(value)) output[key] = +value;
          else output[key] = value;
          break;

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

        case 'symbol':
          output[key] = value;
          break;

        default:
          output[key] = type;
          break;

      }

    } else if (len > 2) {
      output[key] = pair.slice(1);
    }

  });

  return output;

}
