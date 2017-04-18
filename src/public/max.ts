/**
 * Function to return the max numbers within the array passed in.
 *
 * Implemented as an wrapper by maxBy() without iteratee.
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor April 18, 2017
 *
 * @export
 * @param {Numerics[]} array
 * @returns {Numeric}
 */

import { Numeric, Numerics } from '../constants';

import { maxBy } from './maxBy';

export function max(array: Numerics[]): Numeric {
  return maxBy(array);
}
