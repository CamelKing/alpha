/**
 * Private factory function to make an interatee function so
 * we can call the passed in iteratee, or just return plain
 * value if it is null or undefined.
 *
 * @since 0.0.1
 * @category Function
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {FnIteratee} iteratee
 * @returns {FnIteratee}
 */

import { AnyIteratee, FnIteratee } from '../constants';

import { theTypeOf } from '../public/theTypeOf';

export function _makeIteratee(iteratee: AnyIteratee): FnIteratee {

  switch (theTypeOf(iteratee)) {

    case 'function':
      // return value after applying iteratee on it
      // return (value: any) => (iteratee as FnIteratee)(value);
      return iteratee as FnIteratee;

    case 'string':
    case 'number':
      // short hand for object property, or array index
      return (value: any) => value[iteratee as number | string];

    default:
      // else just give a function that return the passed in value
      return (value: any) => value;

  }

}
