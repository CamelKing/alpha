/**
 * This is a factory function, returning a comparator to be used
 * in array.sort(comparator) to sort the array in descending order.
 *
 * A predicate can be passed in so every elements can be transformed
 * before performing comparison.
 *
 * Suitable for array consist of complex data types such as objects.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @returns {FnSortComparator}
 */

import { FnPredicate, FnSortComparator } from '../constants';

import { _orderBy } from '../private/_orderBy';

export function descOrderBy(predicate: FnPredicate): FnSortComparator {
  return (a: any, b: any) => _orderBy(b, a, predicate);
}
