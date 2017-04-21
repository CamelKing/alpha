/**
 * Private function to handle all object property assignment.
 *
 * Works similar to Object.assign() with tje following differences:
 *
 * 1) functional, so it does not mutate the target
 * 2) would not overwrite the key on target with null/undefined value
 * 3) option to pass in customizer to transform property value during
 *    assignment
 * 4) Option to copy enumerable (shallow) and non-enumurable (deep)
 *    property
 *
 * @since 0.2.0
 * @category Object
 *
 * @refactor April 20, 2017
 *
 * @export
 * @param {*} target
 * @param {...Array<object>} sources
 * @returns {object}
 */

import { ObjectOption } from '../constants';
import { clone } from '../public/clone';
import { theTypeOf } from '../public/theTypeOf';

export function _assign(target: any, sources: Array<object>,
  userOption?: ObjectOption): object {

  // unlike other functions, _assign can't call assign(option, userOption)
  // to set default value for userOption
  const option: ObjectOption = {};
  if (userOption) {
    option.deep = userOption.deep || false;
  }

  // initialis the output (to).
  // we make a copy of the target here so we do not mutate
  // the target passed in.

  let to: object;

  const type: string = theTypeOf(target);
  switch (type) {

    case 'null':
    case 'undefined':
    case 'nan':
    case 'promise':
      to = {};
      break;

    case 'function':
      return _assign(target(), sources, userOption);

    case 'object':
    case 'error':
      to = clone(target);
      break;

    default:
      to = {};
      to[type] = target;
      break;
  }

  // the following loop copies all the property from source(s)
  // to the output object (to)

  if (sources && sources.length > 0 && sources[0]) {
    sources.forEach((source: object) => {

      // depends on how deep we doing, either shallow (Object.keys)
      // or deep (Object.getOwnPropertyNames)
      const keys: string[] = option.deep ? Object.getOwnPropertyNames(source) :
        Object.keys(source);

      keys.forEach((key: string) => {
        if (source[key] != null) to[key] = source[key];
        else if (!to.hasOwnProperty(key)) to[key] = source[key];
      });
    });
  }

  return to;

}
