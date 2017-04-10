/**
 * remove an item from the array.
 * The position is identified by a zero based index param.
 * Array is altered.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {number} [index=0]
 * @returns {any[]}
 */

export function pluck(input: any[], index: number = 0): any[] {

  if (!Array.isArray(input)) return input;

  let len: number = input.length;

  // if index is negative, then count from end of array
  if (index < 0) index += len;

  // make sure if it within the range of [0...len-1]
  if (index < 0 || len <= index) return input;

  // copy till n-1 item, so len must be reduced by 1
  len--;

  // loop to move array items one step to the left
  // starting from the [index-th] position
  for (let i: number = index; i < len; i++) input[i] = input[i + 1];

  // remove the end element (now copied into n-1) from the array
  input.length--;

  return input;

}
