/**
 *  Copy : Utility to copy an object to another one.
 *         Choice of shallow and deep copy (which handles nested
 *         and recursive data structure within the object).
 *
 *  NOTE: This utility is implemented as a class with the two methods.
 *
 *  Key Interface:
 *
 *    - .shallow() - simple copying of object properties
 *    - .deep()    - deep copying of object properties,
 *                   includeing all nested and recursive
 *                   structure.
 *
 *  Author: Camel King
 *
 *  Revision:
 *
 *      2017 Mac 11 : First version.
 *
 */

const _value: string = 'value';
const _proto: string = '__proto__';

class XCopy {

  private known: any[] = [];
  private blown: any[] = [];
  private foundIndex: number = -1;

  constructor() {
    return this;
  }

  public deep(source: object): object {
    const me: XCopy = this;
    const target: object = me.makeNew(source);
    me.known = [source];
    me.blown = [target];
    me.deepPropertyCopy(source, target);
    me.cleanUp();
    return target;
  }

  public shallow(source: object): object {
    const me: XCopy = this;
    const target: object = me.makeNew(source);
    me.shallowPropertyCopy(source, target);
    return target;
  }

  // tslint:disable:prefer-function-over-method

  private shallowPropertyCopy(source: object, target: object): void {

    const me: XCopy = this;
    const descriptors: PropertyDescriptorMap = {};
    const keys: PropertyKey[] = Reflect.ownKeys(source);

    // loop thru all the property keys of source,
    // get the descriptor's value from source, and
    // upsert into the new descriptor map created

    keys.forEach(function (key: PropertyKey): void {

      const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(source, key);

      me.upsertDescriptorKey(descriptors, key, descriptor);

    });

    // setup target object with the descriptor map derived
    Object.defineProperties(target, descriptors);

  }

  private cleanUp(): void {
    // resetting the arrays to hopefully release memories
    // used update by massively recursive objects
    this.known = [];
    this.blown = [];
    this.foundIndex = -1;
  }

  /**
   * Update/Insert a key:vaue pair into the descriptor map
   *
   * @private
   * @param {PropertyDescriptorMap} descriptors - where key: value pair
   *                                  to be upsert into
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} value
   *
   * @memberOf Yondu
   */
  private upsertDescriptorKey(descriptors: PropertyDescriptorMap,
    key: PropertyKey,
    value: PropertyDescriptor): void {

    // if the key is already in the descriptor map, update it, else
    // create a new key in the map with the value
    if (key in descriptors) {
      Object.defineProperty(descriptors, key,
        { configurable: true, enumerable: true, value }
      );
    } else {
      descriptors[key] = value;
    }

  }

  /**
   * Make a new array or new object, modeled after what was passed in
   *
   * @private
   * @param {(any[]|object)} source - either an array, or an object  to be
   *                                  modeled after for making a new object
   * @param {PropertyDescriptorMap} [descriptors] - optional descriptors
   *                                  map used for setting the new object's
   *                                  properties
   * @returns {(any[]|object)}        return either a new array, or object
   *
   * @memberOf Yondu
   */
  private makeNew(source: any[] | object,
    descriptors?: PropertyDescriptorMap): any[] | object {

    // create newObj to be either an array,
    // or an object (with prototyped copied)
    const newObj: any[] | object
      = Array.isArray(source) ?
        [] : Object.create(Object.getPrototypeOf(source));

    // if descriptors map are passed in, then define the array/object
    // property with it, else just return the plain new object
    return descriptors ?
      Object.defineProperties(newObj, descriptors) : newObj;

  }

  private deepPropertyCopy(source: object,
    target: object): void {

    const me: XCopy = this;
    const descriptors: PropertyDescriptorMap = {};
    const keys: PropertyKey[] = Reflect.ownKeys(source);

    // loop thru all the property keys of source,
    // get the descriptor's value from source, and
    // if this is the descriptor for 'value' then call
    // a function to deep dive into it's value
    // before finally upserting into the new descriptor map created

    keys.forEach(function (key: PropertyKey): void {

      const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(source, key);

      // the follow is the only difference from shallow copy
      if (_value in descriptor) {
        me.deepValueCopy(descriptor);
      }

      me.upsertDescriptorKey(descriptors, key, descriptor);

    });

    // setup target object with the deep descriptor map derived
    Object.defineProperties(target, descriptors);

  }

  private deepValueCopy(descriptor: PropertyDescriptor): void {

    const me: XCopy = this;
    const value: object = descriptor[_value];

    // if the value of this descriptor is an object, and not a
    // recursive item (previously existed on the nexted object structure )
    // - make a new object out of the object model stored it as the
    //   new key: value pair in descriptor
    // - perform .deepPropertyCopy on this new descriptor key:value pair
    //   as it is an object, and would have it's own nested version
    //   of properties we need to copy
    // - when recursive .deepPropertyCopy is done, store the copied
    //   key: value object onto the blown array (at the same index as
    //   known array stores the original value to be copied)

    if (me.notRecursiveObject(value)) {

      descriptor[_value] = me.makeNew(value);
      me.deepPropertyCopy(value, descriptor[_value]);
      me.blown[me.known.indexOf(value)] = descriptor[_value];

    } else if (-1 < me.foundIndex && me.foundIndex in me.blown) {

      // in the event it is a recursive object
      // first check if .foudnIndex is > -1 , which indicate found
      // and then check if the index is a valid index in blown array
      // if both condition met, this is a valid object, but it has
      // been previously copied,
      // as such we will just assigned the previously copied object
      // onto the descriptor.value key without performing any
      // recursive deepDefine to prevent infinite recursive looping

      descriptor[_value] = me.blown[me.foundIndex];

    }

  }

  private notRecursiveObject(value: string | object | any): boolean {

    const me: XCopy = this;

    // if the value is an object,
    // and it is not already register in the known array
    // we will return true when successfully added on
    // to the known array.
    // This is to verify this is not a repeated value
    // (recursive structure)items and should be copied

    if (me.isValidObject(value)) {
      me.foundIndex = me.known.indexOf(value);
      if (me.foundIndex === -1) {
        return (me.known.push(value) > 0);
      }
    }
    return false;
  }

  private isValidObject(value: any): boolean {
    // return true if this is an object and it is not null
    return (typeof value === 'object' && value !== null);
  }

}

const copy: XCopy = new XCopy;

export const deepCopy: (source: object) => object = copy.deep;
export const shallowCopy: (source: object) => object = copy.shallow;
