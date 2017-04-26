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

import { _concur } from '../base/_concur';
import { theTypeOf } from './theTypeOf';

export function isTheSame(a: any, b: any, goDeep: boolean = false): boolean {

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
      return _concur(a, b, goDeep);

    case 'error':
    case 'object':
      return _concur(a, b, goDeep);

    case 'date':
      return a.getTime() === b.getTime() && _concur(a, b, goDeep);

    case 'symbol':
    case 'string':
    case 'boolean':
    case 'number':
      return _concur(a, b, goDeep);

    case 'undefined':
    case 'null':
    case 'nan':
      return true;

  }

  return false;

}
