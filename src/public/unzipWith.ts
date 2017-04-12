/**
 * Reverse the zip process, and reconstruct the original
 * arrays as nested arrays. Pass in iterator to control
 * how the final array is composed.
 *
 * implemented as a wrapper over the zipWith() function.
 *
 * NOTE: Once an iterator is specified, the function will mostly
 * produce a single dimension array, as iterator always combine
 * various elements into one, and only return one element.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[][]} arrays
 * @returns {any[]}
 */

import { FnAny } from '../constants';
import { unzip } from './unzip';
import { zip } from './zip';
import { zipWith } from './zipWith';

export function unzipWith(arrays: any[], iterator?: FnAny): any[] {
  // must do some of the checking here as calling
  // zipWith(...arrays) is assuming arrays is of array type
  // and it will throw if data type is wrong.
  if (!arrays || arrays.length <= 0) return [];
  if (!Array.isArray(arrays)) return [];

  // check the passed in parameter,
  // if it consists of at least one array, then it will be passed with
  // separator to the zipWith() function. It is not a nested array at all,
  // then it will be passed as it to the ZipWith(), to make itself the array
  // element.
  // Reason: if pass a single dimension array to zipWith() using ... separator,
  // the result would be : [1,2,3]
  // where as passed as single argument to zipWith(), the output would be
  // [[1],[2],[3]]. The later is the desired behavior.
  let nestedArray: boolean = false;
  const { length } = arrays;
  for (let i: number = 0; i < length; i++) {
    if (Array.isArray(arrays[i])) {
      nestedArray = true;
      break;
    }
  }

  // use zipWith() to transform the array back to before zip
  const output: any[] = nestedArray ? zipWith(...arrays, iterator) : zipWith(arrays, iterator);

  return output.map((array: any[]) => {
    if (Array.isArray(array)) {
      // loop thru every individual array and remove null or undefined
      // at the tail end of the array as this is added by zip() due to
      // non uniform size of array
      let { length } = array;
      do length--; while (length > 0 && array[length] == null);
      array.length = length + 1;
    }
    return array;
  });
}
