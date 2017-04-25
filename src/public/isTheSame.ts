/**
 * Comparing 2 objects and return true if both has same data/structure
 *
 * Note:
 *      (1) for Date object, compare with getTime()
 *      (2) for function, compare return values from both
 *      (3) for object and array, perform deep compare on enumerable properties
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor 0.2.0 April 25, 2017
 *
 * @export
 * @param {*} a
 * @param {*} b
 * @param {boolean} [goDeep=false]
 * @returns {boolean}
 */

import { _concur } from '../private/_concur';
import { theTypeOf } from './theTypeOf';

export function isTheSame(a: any, b: any, goDeep: boolean = false): boolean {

  let same: boolean = true;

  const ta: string = theTypeOf(a);
  const tb: string = theTypeOf(b);

  if (ta !== tb) return false;

  switch (ta) {

    case 'array':
      const lenA: number = a.length;
      if (lenA !== b.length) return false;
      for (let i: number = 0; i < lenA; i++) {
        if (!isTheSame(a[i], b[i])) return false;
      }
      same = _concur(a, b, goDeep);
      break;

    case 'error':
    case 'object':
      same = _concur(a, b, goDeep);
      break;

    case 'date':
      same = a.getTime() === b.getTime() && _concur(a, b, goDeep);
      break;

    case 'function':
      same = isTheSame(a(), b(), goDeep);
      break;

    case 'symbol':
    case 'string':
    case 'boolean':
    case 'number':
      // take advantage that _concur will perform simple === comparison 
      // if either/both a and b is not object
      // note: a and b could be a objectify primitives by Object()
      same = _concur(a, b, goDeep);
      break;

    case 'undefined':
    case 'null':
    case 'nan':
      same = true;
      break;

    // case 'promise':
    default:
      same = false;
      break;

  }

  return same;

}
