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

import { FnComparator, FnFind, FnPredicate } from '../constants';

import { _identity } from './_identity';

export function _makeComparator(value: any,
  predicate?: FnPredicate, compare?: FnComparator): FnFind {

  predicate = predicate || _identity;

  return (item: any, ind: number, arr: any[]) =>
    compare ? compare(predicate(value), predicate(item))
      : (predicate(value) === predicate(item));

}
