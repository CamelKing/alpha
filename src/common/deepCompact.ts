/**
 * removes 'false', null, undefined, '', '0', '', NaN from an array
 * return a new copy of the array, original is not altered.
 *
 * This will perform a deep compact, rather than the first level
 * compact by the compact().
 *
 * Implemented as a wrapper for _compact()
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 15, 2017
 *
 * @export
 * @param {any[]} input - array to compact
 * @returns {any[]} - a copy fo compacted array
 */

import { _compact } from '../base/_compact';

export function deepCompact(input: any[]): any[] {
  return _compact(input, true);
}
