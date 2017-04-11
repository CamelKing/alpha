import { FnAny } from '../constants';
import { _getTrailingFunction } from '../private/_getTrailingFunction';

/**
 * Zip a series of array by calling an iterator function to process
 * each rows of the combine array.
 *
 * Any non array being passed in will be ignored and omitted in the output.
 *
 * Iterator function to be passed as as the final argument.
 *
 * This function make use of array.map() extensively, as such
 * it is returning a copy of the newly produced combined/zipped array
 * without changing the original array.
 *
 * Note: Zip function basically treat the passed in arrays as a 2D array,
 * and perform a tranpose on it.
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

export function zipWith(...arrays: any[]): any[] {

  // check and extract if an iterator function is being 
  // passed in as the final argument
  const func: FnAny = _getTrailingFunction(arrays);

  // the outer map basically take the first array and transform
  // it into an nested array, where every element of this new array
  // is an array made up with nth element from all the passed in
  // array.

  // the inner map is to produce an array with the nth element
  // from all the passed in arrays

  const output: any[][]
    = arrays[0].map((col: any[], i: number) => {
      const values: any[] = arrays.map((row: any[]) => row[i]);
      return func ? func(...values) : values;
    });

  return output;

}
