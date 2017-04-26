/**
 * This is a factory function, returning a comparator to be used
 * in array.sort(comparator) to sort the array in descending order.
 *
 * A iteratee can be passed in so every elements can be transformed
 * before performing comparison.
 *
 * Suitable for array consist of complex data types such as objects.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 15, 2017
 *
 * @export
 * @returns {FnSorter}
 */

import { AnyIteratee, FnSorter } from '../constants';

import { _orderBy } from '../base/_orderBy';

export function descOrderBy(iteratee: AnyIteratee): FnSorter {
  return (a: any, b: any) => _orderBy(b, a, iteratee);
}
