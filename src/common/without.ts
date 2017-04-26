/**
 * Return a copy of array without values passed in.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {...any[]} values
 * @returns {any[]}
 */

import { isTheSame } from '../common/isTheSame';

export function without(input: any[], ...values: any[]): any[] {

  if (!Array.isArray(input)) return input;

  const { length } = values;

  if (length === 0) return input;

  let output: any[] = input.slice(0);

  for (let i: number = 0; i < length; i++) {
    output = output.filter((item: any) => !isTheSame(item, values[i]));
  }

  return output;

}
