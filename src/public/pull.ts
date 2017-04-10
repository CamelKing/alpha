/**
 * Pull items from the array. Array is changed in the process.
 *
 * @export
 * @param {any[]} input
 * @param {...any[]} args
 * @returns {any[]}
 */

import { _pullAll } from '../private/_pullAll';

export function pull(input: any[], ...args: any[]): any[] {
  return _pullAll(input, args);
}
