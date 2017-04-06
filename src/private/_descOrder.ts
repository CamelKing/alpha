/**
 * private function used for sort/search comparison.
 * Implemented as a wrapper for _ascOrder by reversing the order.
 *
 * When used in sort, this will produce an descending sort [3,2,1].
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

import { SortOrder } from '../constants';
import { _ascOrder } from './_ascOrder';

export function _descOrder(a: any, b: any): SortOrder {
  return _ascOrder(b, a);
}
