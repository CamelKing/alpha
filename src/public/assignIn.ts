/**
 * similar to Object.assign() with three key differences:
 *
 * 1) functional, so it does not mutate the target
 * 2) would not overwrite the key on target with null/undefined value
 * 3) will assign non enumerable property as well
 *
 * Implemented as wrapper for _assign()
 *
 * @since 0.2.0
 * @category Object
 *
 * @refactor April 21, 2017
 *
 * @export
 * @param {*} target
 * @param {...Array<object>} sources
 * @returns {object}
 */

import { _assign } from '../private/_assign';
import { theTypeOf } from '../public/theTypeOf';

export function assignIn(target: any, ...sources: Array<object>): object {

  return _assign(target, sources, { deep: true });

}
