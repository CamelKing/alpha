/**
 * remove an item from the array.
 * The position is identified by a zero based index param.
 * Array is altered.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {number} [index=0]
 * @returns {any[]}
 */

export function pluck(input: any[], index: number = 0): any[] {

  if (!Array.isArray(input)) return input;

  let { length } = input;

  // if index is negative, then try to count from end of array
  // note that if index is a big -ve number, this can still
  // be -ve
  if (index < 0) index += length;

  // make sure if it within the range of [0...len-1]
  if (index < 0 || length <= index) return input;

  // copy till n-1 item, so len must be reduced by 1
  length--;

  // loop to move array items one step to the left
  // starting from the [index-th] position
  for (let i: number = index; i < length; i++) input[i] = input[i + 1];

  // remove the end element (now copied into n-1) from the array
  input.length--;

  return input;

}
