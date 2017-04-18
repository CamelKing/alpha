/**
 * Function to return the max numbers within the array passed in.
 *
 * Nested array will be searched deep inside as well.
 *
 * Option to pass in an iteratee to convert all value before checking
 * for max.
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor April 18, 2017
 *
 * @export
 * @param {Numerics[]} array
 * @param {AnyIteratee} [iteratee]
 * @returns {Numeric}
 */

import { AnyIteratee, FnIteratee, Numeric, Numerics } from '../constants';

import { _makeIteratee } from '../private/_makeIteratee';

export function maxBy(array: Numerics[], iteratee?: AnyIteratee): Numeric {

  if (!Array.isArray(array)) return array;
  if (array.length === 0) return undefined;

  const convert: FnIteratee = _makeIteratee(iteratee);

  let oldMax: number = undefined;

  return array.reduce((prevItem: Numerics, currentItem: Numerics) => {

    // micro optimization: only do iteratee converison on the first
    // run, subsequently we just have to use the cached data
    if (oldMax === undefined) oldMax = convert(prevItem);

    // recursively extract max numbers within nested array
    if (Array.isArray(currentItem)) currentItem = maxBy(currentItem, iteratee);

    const youngMax: number = convert(currentItem);

    if (youngMax > oldMax) {
      // cache the new max
      oldMax = youngMax;
      return currentItem;
    } else return prevItem;

  });

}
