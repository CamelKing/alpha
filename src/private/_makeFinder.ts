/**
 * Private factory to generate a function which call for
 * a comparator to compare two values. This is particular
 * useful as a callback for some of the javascript array
 * methods such as find(), findIndex().
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {*} value
 * @param {FnComparator} [fnComparator]
 * @returns {FnFind}
 */

import { FnComparator, FnFinder, FnIteratee } from '../constants';

import { _identity } from './_identity';
import { theTypeOf } from '../public/theTypeOf';

export function _makeFinder(value: any,
  iteratee?: FnIteratee, comparator?: FnComparator): FnFinder {

  const combo: number = (theTypeOf(comparator) === 'function' ? 10 : 0)
    + (theTypeOf(iteratee) === 'function' ? 1 : 0);

  // use another variable to store the value, just in case value is
  // an object || array being passed by reference
  const iteratedValue: any = (combo & 1) === 1 ? iteratee(value) : value;

  switch (combo) {

    // both function
    case 11:
      return (item: any) => comparator(iteratedValue, iteratee(item));

    // only comparator is function
    case 10:
      return (item: any) => comparator(iteratedValue, item);

    // only iteratee is function
    case 1:
      return (item: any) => (iteratedValue === iteratee(item));

    // both not function
    case 0:
    default:
      return (item: any) => (iteratedValue === item);

  }

}
