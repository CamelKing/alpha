/**
 * fill up elements in an array with value passed in,
 * starting from start, all the way up to end, but not including end.
 *
 * Note: this behaviour is consistent with array.slice() method.
 *
 * @since 0.0.1
 * @category Array
 * 
 * @export
 * @param {any[]} input
 * @param {*} value
 * @param {number} [start]
 * @param {number} [end]
 * @returns
 */

import { isArray } from 'util';

export function fill(input: any[], value: any, start?: number, end?: number): any[] {

  if (!input || !isArray(input) || input.length === 0) return input;

  const output: any[] = input.slice(0);

  const len: number = input.length;

  start = start || 0;
  if (start < 0) start = len + start;
  else if (start >= len) return output;

  end = end || len;
  if (end < 0) end = len + end;
  else if (end > len) end = len;

  while (start < end) {
    output[start] = value;
    start++;
  }

  return output;

}
