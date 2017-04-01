/**
 * Comparing 2 objects and return true if both has same data/structure
 *
 * Note:
 *      (1) for Date object, compare with getTime()
 *      (2) for function, compare return values from both
 *      (3) for object and array, perform deep compare on enumerable properties
 *
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */

import { theTypeOf } from './theTypeOf';

// tslint:disable-next-line:cyclomatic-complexity
export function isTheSame(a: any, b: any): boolean {

  let same: boolean = true;

  const ta: string = theTypeOf(a);
  const tb: string = theTypeOf(b);

  if (ta !== tb) {
    return false;
  }

  switch (ta) {

    case 'array':

      const lenA: number = a.length;

      if (lenA !== b.length) {
        return false;
      }

      for (let i: number = 0; i < lenA; i++) {
        if (!isTheSame(a[i], b[i])) {
          return false;
        }
      }

      break;

    case 'error':
    case 'object':

      const keyA: string[] = Object.getOwnPropertyNames(a);
      const keyB: string[] = Object.getOwnPropertyNames(b);
      const lenKeyA: number = keyA.length;
      if (lenKeyA !== keyB.length) {
        return false;
      }

      for (let i: number = 0; i < lenKeyA; i++) {
        const key: string = keyA[i];
        if (keyB.indexOf(key) < 0) {
          return false;
        }
        if (!isTheSame(a[key], b[key])) {
          return false;
        }
      }
      break;

    case 'date':
      same = (a.getTime() === b.getTime());
      break;

    case 'function':
      same = isTheSame(a(), b());
      break;

    case 'symbol':
    case 'string':
    case 'boolean':
    case 'number':
      same = (a === b);
      break;

    case 'undefined':
      same = true;
      break;

    case 'null':
    case 'nan':
      same = true;
      break;

    case 'promise':
    default:
      same = false;
      break;

  }

  return same;

}
