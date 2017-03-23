import { theTypeOf } from './alpha';

/**
 * return an object out of any variables passed in.
 *
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {*} anyObj
 * @returns {object}
 */


export function toObject(anyVar: any): object {

  let plainObj: object = {};

  const type: string = theTypeOf(anyVar);

  switch (type) {

    case 'undefined':
    case 'null':
      break;

    case 'function':
      // use this verbose version of the code instead of
      //  plainObj[anyVar.name || type] = anyVar;
      // due to complain from Istanbul coverage report
      // (type='' condition not testable)
      if (anyVar.name) { plainObj[anyVar.name] = anyVar; }
      else { plainObj[type] = anyVar; }
      break;

    case 'error':
      plainObj = new Error(anyVar.message);
      // for error object, must use this method to copy out
      // all the non-enumerable properties, rather than object.assign()
      // which does not copy non enumerable properties
      Object.getOwnPropertyNames(anyVar).forEach((key: string) => {
        plainObj[key] = anyVar[key];
      });
      break;

    case 'object':
      Object.getOwnPropertyNames(anyVar).forEach((key: string) => {
        plainObj[key] = anyVar[key];
      });
      break;

    case 'array':
      plainObj[type] = Array.from(anyVar);
      break;

    case 'number':
      /* istanbul ignore else */
      if (!isNaN(anyVar)) { plainObj[type] = anyVar; }
      break;

    // case 'date':
    // case 'string':
    // case 'boolean':
    // case 'symbol':
    // case 'promise':
    default:
      plainObj[type] = anyVar;
      break;
  }

  return plainObj;

};
