/**
 * Private factory function to generate a function which call
 * for a comparator to compare two values. This is particular
 * useful as a callback for some of the javascript array
 * methods such as find(), findIndex().
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {*} value
 * @param {AnyIteratee} [iteratee]
 * @param {FnComparator} [compare]
 * @returns {FnMatcher}
 */

import { AnyIteratee, FnComparator, FnIteratee, FnMatcher } from '../constants';

import { _makeIteratee } from './_makeIteratee';
import { theTypeOf } from '../public/theTypeOf';

export function _makeMatcher(value: any,
  iteratee?: AnyIteratee, compare?: FnComparator): FnMatcher {

  // acceptable iteratee, a function, or a string/number as shorthand
  // to object/array.
  const anyIteratee: string[] = ['function', 'number', 'string'];

  // construct combo as an indicator of what is to be included
  // in the output function.
  const combo: number = (theTypeOf(compare) === 'function' ? 10 : 0)
    + (anyIteratee.includes(theTypeOf(iteratee)) ? 1 : 0);

  // construct iteratee function
  // this could have been put into the switch case block,
  // but it then need to appear in two of four conditions.
  const convert: FnIteratee = _makeIteratee(iteratee);

  // use another variable to store the value, just in case value is
  // an object || array being passed by reference
  const iteratedValue: any = (combo & 1) === 1 ? convert(value) : value;

  switch (combo) {

    // both function
    case 11:
      return (item: any) => compare(iteratedValue, convert(item));

    // only comparator is function
    case 10:
      return (item: any) => compare(iteratedValue, item);

    // only iteratee is function
    case 1:
      return (item: any) => (iteratedValue === convert(item));

    // both not function
    case 0:
    default:
      return (item: any) => (iteratedValue === item);

  }

}
