/**
 * This is a factory function, returning a comparator to be used
 * in array.sort(comparator) to sort the array in descending order.
 *
 * Suitable for array consist of same type of primitives
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 15, 2017
 *
 * @export
 * @returns {FnSorter}
 */

import { FnSorter } from '../constants';
import { _orderBy } from '../base/_orderBy';

export const descOrder: FnSorter = (a: any, b: any) => _orderBy(b, a);
