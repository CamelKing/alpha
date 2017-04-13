import { AnyIteratee, FnIteratee, FnSorter, SortOrder } from '../constants';

import { _makeIteratee } from './_makeIteratee';
import { theTypeOf } from '../public/theTypeOf';

/**
 * Private factory to generate a function which call for
 * a sorter function to compare two values, which return
 * the SortOrder enum. This is typically useful
 * for Javascript function which compares for sorting.
 *
 * This function could have been simplified by just return
 * ()=>sorter(iteratee(), iteratee())
 *
 * However, for sorting without iteratee, this will introduce heavy
 * overhead for every sort search and compare. It is probably better
 * to have this one time over head to create the sorter function
 * instead.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {FnSorter} [fnSorter]
 * @returns {FnFind}
 */


export function _makeSorter(iteratee?: AnyIteratee, sorter?: FnSorter): FnSorter {

  // acceptable iteratee, a function, or a string/number as shorthand 
  // to object/array.
  const anyIteratee: string[] = ['function', 'number', 'string'];

  // construct combo as an indicator of what is to be included 
  // in the output function.
  const combo: number = (theTypeOf(sorter) === 'function' ? 10 : 0)
    + (anyIteratee.indexOf(theTypeOf(iteratee)) >= 0 ? 1 : 0);

  // construct iteratee function
  // this could have been put into the switch case block,
  // but it then need to appear in two of four conditions.
  const convert: FnIteratee = _makeIteratee(iteratee);

  switch (combo) {

    // both function
    case 11:
      return (a: any, b: any) => sorter(convert(a), convert(b));

    // only sorter is function
    case 10:
      return (a: any, b: any) => sorter(a, b);

    // only iteratee is function
    case 1:
      return (a: any, b: any) => {
        const a1: any = convert(a);
        const b1: any = convert(b);
        return (a1 > b1) ? SortOrder.higher : (a1 < b1) ? SortOrder.lower : SortOrder.same;
      };

    // both not function
    case 0:
    default:
      return (a: any, b: any) =>
        (a > b) ? SortOrder.higher : (a < b) ? SortOrder.lower : SortOrder.same;

  }

}
