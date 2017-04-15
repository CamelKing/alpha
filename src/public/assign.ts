/**
 * similar to Object.assign() with two key differences:
 *
 * 1) functional, so it does not mutate the target
 * 2) would not overwrite the key on target with null/undefined value
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor April 15, 2017
 *
 * @export
 * @param {*} target
 * @param {...Array<object>} sources
 * @returns {object}
 */

import { theTypeOf } from '../public/theTypeOf';

export function assign(target: any, ...sources: Array<object>): object {

  switch (theTypeOf(target)) {

    case 'null':
    case 'undefined':
    case 'NaN':
    case 'promise':
      return {};

    case 'function':
      return assign(target(), ...sources);

    default:
      break;
  }

  const to: object = Object(target);

  if (sources && sources.length > 0 && sources[0]) {
    sources.forEach((source: object) => {
      Object.keys(source).forEach((key: string) => {
        if (source[key] != null) to[key] = source[key];
        else if (!to.hasOwnProperty(key)) to[key] = source[key];
      });
    });
  }

  return to;

}
