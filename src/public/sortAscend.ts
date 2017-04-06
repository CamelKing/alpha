import { _orderBy } from '../_alpha';

/**
 * Sort the array into an ascending order
 * 
 * @export
 * @param {any[]} input 
 * @returns {any[]} 
 */

export function sortAscend(input: any[]): any[] {

  if (!Array.isArray(input)) return input;

  return input.sort(_orderBy);

}
