/**
 * This is a factory function, returning a comparator to be used
 * in array.sort(comparator) to sort the array in ascending order.
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

// export function ascOrder(): FnSortComparator {
//   return (a: any, b: any) => _orderBy(a, b);
// }

export const ascOrder: FnSortComparator = (a: any, b: any) => _orderBy(a, b);
