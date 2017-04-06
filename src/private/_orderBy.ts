/**
 * private function used for sort/search comparison in ascending order.
 *
 * A predicate can be passed in to transform the items to be compared,
 * this is useful for scenario such as sorting/searching thru array of
 * objects.
 *
 * When used in sort, this will produce an ascending sort from a to b.
 * In order to do a descending sort, just pass in [b,a] instead, and 
 * it will order the items from b to a.
 *
 * When used in search, this will assume the list is in predetermined 
 * order, either ascending or descending..
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {*} a
 * @param {*} b
 * @param {FnPredicate} [predicate]
 * @returns {SortOrder}
 */

import { FnPredicate, SortOrder } from '../constants';

export function _orderBy(a: any, b: any,
  predicate?: FnPredicate): SortOrder {

  const c: any = predicate ? predicate(a) : a;
  const d: any = predicate ? predicate(b) : b;
  return c > d ? SortOrder.higher : c < d ? SortOrder.lower : SortOrder.same;

}
