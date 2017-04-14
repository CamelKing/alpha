/**
 * Private factory funciton to generate a function which call for
 * a comparator function to compare two values, which return
 * true if it is the same.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {AnyIteratee} [iteratee]
 * @param {FnComparator} [compare]
 * @returns {FnComparator}
 */

import { AnyIteratee, FnComparator, FnIteratee, SortOrder } from '../constants';

import { _makeIteratee } from './_makeIteratee';
import { theTypeOf } from '../public/theTypeOf';

export function _makeComparator(iteratee?: AnyIteratee,
  compare?: FnComparator): FnComparator {

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

  switch (combo) {

    // both function
    case 11:
      return (a: any, b: any) => compare(convert(a), convert(b));

    // only sorter is function
    case 10:
      return (a: any, b: any) => compare(a, b);

    // only iteratee is function
    case 1:
      return (a: any, b: any) => (convert(a) === convert(b));

    // both not function
    case 0:
    default:
      return (a: any, b: any) => (a === b);

  }

}
