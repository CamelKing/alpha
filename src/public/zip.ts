import { zipWith } from './zipWith';

/**
 * Zip a series of array and return a copy of the zipped array.
 *
 * implemented as a wrapper over the zipWith() function without the
 * iterator function.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

export function zip(...arrays: any[]): any[] {

  return zipWith(...arrays);

  // const output: any[]
  //   = arrays[0].map((col: any[], i: number) => arrays.map((row: any[]) => row[i]));

  // return output;

}
