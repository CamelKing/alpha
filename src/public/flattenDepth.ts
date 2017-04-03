/**
 * flatten deeply nested array into a single dimension array.
 * 
 * The level of flattening can be controlled by the depth param.
 * Default is Infinity - deep flatten.
 *
 * Note: (1) not using recursive call because after 100k nesting
 *           levels, the function will result in out of stack
 *           error.
 *
 *  Revision History:
 *  Feb 16: changed from a recursive to loop to avoid heap
 *          stack error when facing large nested array
 *  Apr 3: flatten the loop structure and simplify the logic,
 *         reduce looping time and lots of condition checking.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} nArr
 * @param {number} [depth=Infinity]
 * @returns {any[]}
 */

export function flattenDepth(array: any[], depth: number = Infinity): any[] {

  if (!Array.isArray(array)) return array;
  if (array.length === 0) return [];

  if (depth <= 0) return array.slice(0);

  // make a copy of the passed in array (so we wont change it)
  // call concat to remove one level from array
  let output: any[] = [].concat.apply([], array.slice(0));
  depth--;

  // loop thru from left to right and flattening along the way
  // Feb 16: changed from a recursive to loop to avoid heap
  //         stack error when facing large nested array
  // Apr 3: flatten the loop structure and simplify the logic,
  //        reduce looping time and lots of condition checking.

  let index: number = 0;

  // as output is changing due to flattening,
  // it is important to use output.length as loop condition
  while ((index < output.length) && (depth > 0)) {
    if (Array.isArray(output[index])) {
      output = [].concat.apply([], output);
      depth--;
    } else index++;
  }

  return (output);

}

