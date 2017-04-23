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
  if (userOption) option.deep = userOption.deep || false;

  // initialis the output.
  // we make a copy of the target here so we do not mutate
  // the target passed in.

  let output: object;

  const targetType: string = theTypeOf(target);
  switch (targetType) {

    case 'object':
    case 'error':
      output = clone(target);
      break;

    case 'string':
    case 'number':
    case 'boolean':
    case 'array':
      output = {};
      output[targetType] = target;
      break;

    default:
      output = {};
      break;
  }

  // the following loop copies all the property from source(s)
  // to the output object (to)

  if (sources && sources.length > 0 && sources[0]) {
    sources.forEach((source: any) => {

      // array to store object keys to be assigned later
      let keys: string[] = [];

      // variable to store the source so that the assign operation will
      // not mutate the source objects
      let tempSource: any;

      // check type of source and make a copy in a temp variable
      const sourceType: string = theTypeOf(source);

      switch (sourceType) {

        case 'number':
        case 'string':
        case 'boolean':
        case 'array':
          tempSource = {};
          tempSource[targetType] = source;
          break;

        case 'object':
          tempSource = source;
          break;

        case 'error':
          // error object is rather unique, only getOwnPropertyNames() is able
          // to retrieve its properties (stack and messages)
          tempSource = source;
          keys = Object.getOwnPropertyNames(tempSource);
          break;

        default:
          tempSource = {};
          break;
      }

      // for ... in will retrieve all keys of the object (included inherited)
      for (const key in tempSource) keys.push(key);

      // loop to process all keys, and assigned to target base on
      // 1) if deep option, assign inherited keys as well
      // 2) if non deep option, only assign the normal keys (top level)
      keys.forEach((key: string) => {

        // check if the key is inherited (not on own Property)
        // or deep copying option
        if (option.deep || tempSource.hasOwnProperty(key)) {
          // assign if
          // (a) key in source is not null (overwrite target if already exist)
          // (b) key does not exist on target yet (create new key)
          if (!(tempSource[key] == null && output.hasOwnProperty(key))) {
            output[key] = tempSource[key];
          }

        }

      });

    });
  }

  return output;

}
