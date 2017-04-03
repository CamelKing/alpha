/**
 * Check if a particular value is numeric in nature.
 *
 * only Number, NaN, and String which can be converted to numbers
 * will result in True.
 *
 * empty string, any other data type will result in false.
 *
 * @since 0.0.1
 * @category Number
 *
 * @export
 * @param {*} input
 * @returns {boolean}
 */

import { theTypeOf } from './theTypeOf';
import { trim } from './trim';

export function isNumeric(input: any): boolean {

  const type: string = theTypeOf(input);

  switch (type) {

    case 'string':
      if (trim(input) === '') return false;
      return !isNaN(input);

    case 'number':
    case 'nan':
      return true;

    default:
      return false;

  }

}
