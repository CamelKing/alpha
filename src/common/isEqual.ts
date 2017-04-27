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

import { theTypeOf } from './theTypeOf';

export function isEqual(a: any, b: any): boolean {

  const ta: string = theTypeOf(a);
  const tb: string = theTypeOf(b);

  if (ta !== tb) return false;
  if (['undefined', 'null', 'nan'].includes(ta)) return true;
  if (['function', 'promise', 'set'].includes(ta)) return undefined;

  // if not object (by js def - object, error, date, array,
  // or anything Object()), then just return the simple === comparison
  // note: main objective of concurs() is to check if objects concur with
  // each others (at property level). However, since we must always return
  // either true or false, we have no choice but to create a side effect
  // of actually returning the comparison of two variables here
  if (typeof a !== 'object' || typeof b !== 'object') return a === b;

  // the following section of code is to take care of primitives being
  // objectified with Object() and then passed in for comparison.
  // as such we need to check it's primitives value using valueOf()
  // before comparing the properties
  // in this case, we only check the 4 types: string, number, boolean, symbol
  const valA: any = a.valueOf();
  const valB: any = b.valueOf();
  if (typeof valA !== typeof valB) return false;
  if (['string', 'number', 'boolean', 'symbol'].includes(typeof valA) && valA !== valB) return false;

  // retrieve all keys (string, and symbol, both enumerable and not)
  // but this won't retrieve inheritted properties
  const keyA: PropertyKey[] = Reflect.ownKeys(a);
  const keyB: PropertyKey[] = Reflect.ownKeys(b);

  // retrieve check the inherited properties as well (those up in __proto__)
  for (const key in a as any) {
    if (keyA.indexOf(key) < 0) keyA.push(key);
  }
  for (const key in b as any) {
    if (keyB.indexOf(key) < 0) keyB.push(key);
  }

  // first check - if not same number of keys = not concur
  const lenKeyA: number = keyA.length;
  if (lenKeyA !== keyB.length) return false;

  // a loop to check each and every key
  // if key does not appear on the other = not concur
  // if value not the same = not concur
  // make recursive call to isEqual() until we gets to
  // checking concurance of primitives
  for (let i: number = 0; i < lenKeyA; i++) {
    const key: PropertyKey = keyA[i];
    if (keyB.indexOf(key) < 0) return false;
    if (!isEqual(a[key], b[key])) return false;
  }

  // if non of the above checkings failed, then the two
  // objects concurs with each other
  return true;

}
