/**
 * Replacer function used in JSON.stringify so special object
 * such as error object can be handled correctly.
 *
 * Usage: JSON.stringify( object, fnError2JSON, ' ');
 *
 * @since 0.0.1
 * @category Object
 *
 * @refactor April 17, 2017
 *
 * Not exported at the moment, private function used by stringify().
 *
 * @export
 * @param {string} key
 * @param {*} value
 * @returns {*}
 */

export function _stringifyReplacer(key: string, value: any): any {

  if (value instanceof Error) {

    // special handlinf for error object
    // construct a plain object with the same property
    // so stringify can work correctly
    const errorObject: object = {};
    Object.getOwnPropertyNames(value)
      .forEach((vkey: string) => (errorObject[vkey] = value[vkey]));
    return errorObject;

  } else {

    // any other data, just return as is and default conversion
    // should work fine
    return value;

  }

}
