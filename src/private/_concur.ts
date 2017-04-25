/**
 * Private function to check if two objects concur with each others.
 * Concur means same number of property keys, and all keys have the
 * same value. Return true if concurs, false if other wise.
 *
 * Concurrance can happen at two level:
 * 1) Shallow - all string + symbol property, enumerable or not.
 * 2) Deep - shallow + inheritted properties (up in the __proto__ chain)
 *
 * If either or both items passed in is not objects, return a simple
 * a===b comparison result. Another approach would be to throw a type error
 * but the objective of this library is to ensure flexiblity.
 *
 * Default: only check for shallow concurrance.
 * pass in goDeep = true for deep concurrance checking.
 *
 * @since 0.2.0
 * @category Object
 *
 * @refactor 0.2.0 April 25, 2017
 *
 * @export
 * @param {object} a
 * @param {object} b
 * @param {boolean} [goDeep=false]
 * @returns {boolean}
 */

import { isTheSame } from '../public/isTheSame';

export function _concur(a: object, b: object, goDeep: boolean = false): boolean {

  // if not object (by js def - object, error, date, array,
  // or anything Object()), then just return the simple === comparison
  if (typeof a !== 'object' || typeof b !== 'object') return a === b;

  // retrieve all keys (string, and symbol, both enumerable and not)
  // but this won't retrieve inheritted properties
  const keyA: PropertyKey[] = Reflect.ownKeys(a);
  const keyB: PropertyKey[] = Reflect.ownKeys(b);

  // goDeep = check the ingerited properties as well
  if (goDeep) {
    for (const key in a as any) {
      if (keyA.indexOf(key) < 0) keyA.push(key);
    }
    for (const key in b as any) {
      if (keyB.indexOf(key) < 0) keyB.push(key);
    }
  }

  // first check - if not same number of keys = not concur
  const lenKeyA: number = keyA.length;
  if (lenKeyA !== keyB.length) return false;

  // a loop to check each and every key
  // if key does not appear on the other = not concur
  // if value not the same = not concur
  // make recursive call to isTheSame() until we gets to
  // checking concurance of primitives
  for (let i: number = 0; i < lenKeyA; i++) {
    const key: PropertyKey = keyA[i];
    if (keyB.indexOf(key) < 0) return false;
    if (!isTheSame(a[key], b[key])) return false;
  }

  // if non of the above checkings failed, then the two
  // objects concurs with each other
  return true;

}
