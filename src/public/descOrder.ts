/**
 * This is a factory function, returning a comparator to be used
 * in array.sort(comparator) to sort the array in descending order.
 *
 * Suitable for array consist of same type of primitives
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @returns {FnSortComparator}
 */

import { FnSortComparator } from '../constants';
import { _orderBy } from '../private/_orderBy';

// export function descOrder(): FnSortComparator {
//   return (a: any, b: any) => _orderBy(b, a);
// }

export const descOrder: FnSortComparator = (a: any, b: any) => _orderBy(b, a);
