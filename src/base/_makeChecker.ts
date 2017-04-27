/**
 * Private factory function to produce a checking function, which
 * will check a pass in value against a predicate.
 *
 * The Predicate can comes in many forms,
 * 1) function which accept a param and return boolean
 * 2) array in [key,value] format
 * 3) string indicating a porperty for the item to check
 * 4) string, number, boolean, symbol - plain comparison
 * 5) deep comparision for object, error, date and NaN
 * 6) Any other predicate will always return a false
 *
 *
 * @since 0.0.1
 * @category Function
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {*} predicate
 * @param {FnComparator} [compare]
 * @returns {FnCheck}
 */

import { FnCheck, FnComparator } from '../constants';

import { isEqual } from '../common/isEqual';
import { theTypeOf } from '../common/theTypeOf';

export function _makeChecker(predicate: any, compare?: FnComparator): FnCheck {

  compare = compare || isEqual;

  switch (theTypeOf(predicate)) {

    case 'function':
      // predicate function = call it and pass over the item
      return (item: any) => predicate.call(null, item);

    case 'array':
      // for array, assume [key:value] format, use it to check
      // againt the passed in item.
      return (item: any) => (item.hasOwnProperty(predicate[0])
        && compare(item[predicate[0]], predicate[1]));

    case 'string':
      // string could mean two thigns:
      // 1) it is a key name and check the value of the key
      // 2) just a string to be compared with the array elements
      return (item: any) => (item.hasOwnProperty(predicate) ?
        item[predicate] : (predicate === item));

    case 'number':
    case 'boolean':
    case 'symbol':
      return (item: any) => (predicate === item);

    case 'nan':
    case 'date':
    case 'object':
    case 'error':
      // perform deep compare for all these data type
      return (item: any) => compare(predicate, item);

    default:
      // any other iteratee format will yield a falsey function
      return () => false;
  }

}
