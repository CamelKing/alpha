/**
 * Private function to check if a rest params contain a function as the
 * last parameter. If it does, remove the function from the arguments
 * and return the function.
 *
 * The arguments array will be altered. 
 * 
 * @since 0.0.1
 * @category Function
 *
 * @param {any[]} args
 * @returns {FnAny}
 */

import { FnAny } from '../constants';
import { theTypeOf } from '../public/theTypeOf';

export function _getTrailingFunction(args: any[]): FnAny {

  let func: FnAny = null;

  const length: number = args.length - 1;

  if (theTypeOf(args[length]) === 'function') {
    func = args[length];
    args.pop();
  }

  return func;

}
