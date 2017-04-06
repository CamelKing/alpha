/**
 * private function used for sort/search comparison.
 *
 * When used in sort, this will produce an ascending sort [1,2,3].
 *
 * When used in search, this will assume the list is in asc order.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {*} a
 * @param {*} b
 * @returns {SortOrder}
 */

import { FnSortComparator, SortOrder } from '../constants';

export function _ascOrder(a: any, b: any): SortOrder {

  return (a < b ?
    SortOrder.lower :
    (a > b ? SortOrder.higher : SortOrder.same));

}
