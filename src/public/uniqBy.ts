/**
 * Take an input array, and produce an output array with only the
 * unique items from the input array. All redundant items will only
 * appear once in output.
 *
 * [1,1,2,2,3,4] => [1,2,3,4]
 *
 * @export
 * @param {any[]} input
 * @param {FnPredicate} [predicate]
 * @returns {any[]}
 */

import { FnPredicate } from '../constants';
import { isTheSame } from './isTheSame';

export function uniqBy(input: any[], predicate?: FnPredicate): any[] {

  const output: any[] = [];

  let border: number = 0;

  if (Array.isArray(input)) {

    let prev: any = null;

    input.forEach((item: any) => {

      // if same as previous item, just skip it.
      if (item === prev) return;
      prev = item;

      let j: number;

      // if predicate was specified, then apply it on 
      // items before comparison
      if (predicate) {
        for (j = 0;
          j < border && !isTheSame(predicate(output[j]), predicate(item));
          j++);
      } else {
        for (j = 0; j < border && !isTheSame(output[j], item); j++);
      }

      if (j >= border) { output.push(item); border++; }

    });

  }

  return output;

}
