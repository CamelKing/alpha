/**
 * Private function to check if a rest params contain a function as the
 * last parameter. If it does, remove the function from the arguments
 * and return the function.
 *
 * NOTE: this is not a pure function, the arguments array will be altered.
 *
 * @since 0.0.1
 * @category Function
 *
 * @refactor April 14, 2017
 *
 * @param {any[]} args
 * @returns {FnAny}
 */

import { FnAny } from '../constants';
import { theTypeOf } from '../public/theTypeOf';

export function _getOptionalFunction(args: any[]): FnAny {

  let func: FnAny = null;

  let { length } = args;

  length--;

  if (theTypeOf(args[length]) === 'function') {
    func = args[length];
    args.pop();
  }

  return func;

}
