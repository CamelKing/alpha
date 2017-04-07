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
 * IMPORTANT: if the type of the two data passed in is not the same,
 * it will both to converted to string before comparison.
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

import { padLeft } from '../public/padLeft';

export function _orderBy(a: any, b: any,
  predicate?: FnPredicate): SortOrder {

  let c: any = predicate ? predicate(a) : a;
  let d: any = predicate ? predicate(b) : b;
  if (typeof c !== typeof d) {
    c = '' + c;
    d = '' + d;
    const lenC: number = c.length;
    const lenD: number = d.length;
    const lenMax: number = lenC > lenD ? lenC : lenD;
    c = padLeft(c, lenMax, '0');
    d = padLeft(d, lenMax, '0');
  }
  return c > d ? SortOrder.higher : c < d ? SortOrder.lower : SortOrder.same;

}
