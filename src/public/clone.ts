/**
 * deep level cloning of object.
 * Recursive/cyclical references are taken care of.
 *
 *  Author: Camel King
 *
 *  Revision:
 *
 *      2017 Mac 11 : First version.
 *           Mac 28 : 1) remove shallow copying of object as that is now
 *                       easily supported in ES6 by = {...object} syntax.
 *                    2) Change from class appraach to simple function.
 *
 * TODO: May want to explore how to either turn this into one function, or
 *       break the sub functions into individual module/file.
 *
 * @refactor April 15, 2017
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {object} source
 * @returns {object}
 *
 */

import { theTypeOf } from './theTypeOf';

const _value: string = 'value';
const _proto: string = '__proto__';

export function clone(source: any[] | object | Error): any[] | object | Error {

  let target: any[] | object | Error;

  switch (theTypeOf(source)) {

    case 'array':
      target = [];
      break;

    case 'object':
      target = Object.create(Object.getPrototypeOf(source));
      break;

    case 'error':
      target = new Error((source as Error).message);
      break;

    // any other data type just return as is
    default:
      return source;

  }

  // setup control parameters
  const known: any[] = [source];
  const copied: any[] = [target];

  _deepPropertyCopy(source, target, known, copied);

  return target;
}

// TODO: May move these private functions into their own file.
// but currently there is too much dependency on the known and
// copied array, it does not make sense at all.
// TODO: refactor so there is no dependency on the passed in
// array pairs for handling cyclical reference.

/**
 * private function to copy property key from source to target
 * deep down. There is no worry of recursive or cyclical references
 * at this stage.
 *
 * Do take note that while this function makes call to _deepValueCopy(),
 * it will be recursively called by _deepValueCopy() as well.
 *
 * @param {object} source
 * @param {object} target
 * @param {any[]} known - array storing all the known key values
 * @param {any[]} copied - array storing all the copied key objects
 */

function _deepPropertyCopy(source: object, target: object,
  known: any[], copied: any[]): void {

  const descriptorMap: PropertyDescriptorMap = {};
  const keys: PropertyKey[] = Reflect.ownKeys(source);

  // loop thru all the property keys of source,
  // get the descriptor's value from source, and
  // if this is the descriptor for 'value' then call
  // a function to deep dive into it's value
  // before finally upserting into the new descriptor map created

  keys.forEach(function (key: PropertyKey): void {

    const descriptor: PropertyDescriptor
      = Object.getOwnPropertyDescriptor(source, key);

    // the follow is the only difference from shallow copy
    /* istanbul ignore else */
    if (_value in descriptor) {
      _deepValueCopy(descriptor, known, copied);
    }

    // insert descriptor into descriptor map
    Object.defineProperty(descriptorMap, key, { configurable: true, enumerable: true, value: descriptor });

  });

  // setup target object with the deep descriptor map derived
  Object.defineProperties(target, descriptorMap);

}


/**
 * private function to copy the descriptor (key:value pair)
 * and storing them into the known and copied array.
 *
 * Known array stores the value of all the known object
 * to this cloning exercise. Whenever any object is identified within
 * the descriptor, it will be search against the known array to see if
 * it is something we have cloned in the past, or recursive/cyclical
 * in nature.
 *
 * Copied array on the other hand stores the actual object (the value
 * of a property in the object to be cloned.) It is stored in the
 * corresponding index as per Known array for easy access purpose.
 *
 * Once a recusrive/cyclical reference is identified, the object will
 * be copied from the Copied array into the target object's descriptor's
 * value field; and there will be no further recursive copying down the
 * object (else it will be an infinite recursive loop)
 *
 * @param {PropertyDescriptor} descriptor
 * @param {any[]} known
 * @param {any[]} copied
 */

function _deepValueCopy(descriptor: PropertyDescriptor,
  known: any[], copied: any[]): void {

  // store the original descriptor passed in
  const value: any = descriptor[_value];

  // if the value of this descriptor is an object, and not a
  // recursive item (previously existed on the nested object structure )
  // - make a new object out of the object model stored it as the
  //   new key: value pair in descriptor
  // - perform .deepPropertyCopy on this new descriptor key:value pair
  //   as it is an object, and would have it's own nested version
  //   of properties we need to copy
  // - when recursive .deepPropertyCopy is done, store the copied
  //   key: value object onto the blown array (at the same index as
  //   known array stores the original value to be copied)


  // always reset found index before we start.
  let foundIndex: number = -1;

  // check if this is a recursive/cyclic property

  let isNew: boolean = false;
  if (typeof value === 'object' && value !== null) {
    foundIndex = known.indexOf(value);
    isNew = (foundIndex === -1 && known.push(value) > 0);
  }

  if (isNew) {

    // if it is a new property (hence not cyclic), just
    // carry on with a deep copy down this line

    // create a new descriptor based on what was passed in
    // could be an array or an object
    descriptor[_value] = Array.isArray(value) ?
      [] : Object.create(Object.getPrototypeOf(value));

    // carry out deep property copy down this descriptor
    _deepPropertyCopy(value, descriptor[_value], known, copied);

    // store the descriptor into the blown array to be used
    // for copying cyclic property if the need arises later
    // take note that we mirror the position of known array
    // when storing into blown array to speed up retrieving
    // later
    copied[known.indexOf(value)] = descriptor[_value];

  } else if (-1 < foundIndex && foundIndex in copied) {

    // it is a previously copied/referenced object (cyclical)
    // first check if .foudnIndex is > -1 , which double confirm
    // this is a previously copied/referenced object, and then check
    // if the index is a valid index in blown array (which stores
    // previously copied/referenced object)
    // if both condition met, this is a valid object, but it has
    // been previously copied,
    //
    //    note: this condition check will rule out all non object
    //    property, such as primitives value, which won't be
    //    cyclical in nature.
    //
    // as such we will just assigned the previously copied object
    // onto the descriptor.value key without performing any
    // further recursive deepcopy to prevent infinite recursive
    // looping

    descriptor[_value] = copied[foundIndex];

  }

}
