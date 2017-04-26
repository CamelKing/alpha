import { ObjectOption } from '../constants';
import { clone } from '../common/clone';
import { theTypeOf } from '../common/theTypeOf';
import { toObject } from '../common/toObject';
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


export function _assign({ target, sources, goDeep = false }: ObjectOption): object {

  // export function _assign(target: any, sources: Array<object>,
  // userOption?: ObjectOption): object {

  // unlike other functions, _assign can't call assign(option, userOption)
  // to set default value for userOption
  // const option: ObjectOption = {};
  // goDeep = goDeep || false;

  // initialis the output.
  // we make a copy of the target here so we do not mutate
  // the target passed in.

  const output: object = toObject(target);

  // the following loop copies all the property from source(s)
  // to the output object (to)

  if (sources && sources.length > 0 && sources[0]) {
    sources.forEach((source: any) => {

      // copy of source
      const input: any = toObject(source);
      // array to store object keys to be assigned later
      const keys: PropertyKey[] = Reflect.ownKeys(source);
      for (const key in input) {
        if (keys.indexOf(key) < 0) keys.push(key);
      }

      // loop to process all keys, and assigned to target base on
      // 1) if deep option, assign inherited keys as well
      // 2) if non deep option, only assign the normal keys (top level)
      keys.forEach((key: PropertyKey) => {

        // only copy if it is own keys (not inheritted) or
        // option to goDeep
        // note: must use hasOwnProperty() to check, as in operator 
        // and Reflect.has() will return true for inheritted property
        // console.log('CHECK >>>', input, key, input.hasOwnProperty(key), input.hasOwnProperty(key));
        if (input.hasOwnProperty(key) || goDeep) {
          // assign if
          // (a) key in source is not null (overwrite target if already exist)
          // (b) key does not exist on target yet (create new key)
          if (!(input[key] == null && Reflect.has(output, key))) {
            output[key] = input[key];
          }

        }

      });

    });
  }

  return output;

}
