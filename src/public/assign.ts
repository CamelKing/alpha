/**
 * similar to Object.assign() with two key differences:
 *
 * 1) functional, so it does not mutate the target
 * 2) would not overwrite the key on target with null/undefined value
 *
 * @since 0.0.1
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

export function assign(target: any, ...sources: Array<object>): object {

  return _assign(target, sources);

}
