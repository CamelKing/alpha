/**
 * Split an array into chunks of smaller arrays,
 * as specified by the passed in size parameter.
 *
 * Note: adapted from the chunk() module from lodash.
 *
 * @since 0.0.1
 * @category array
 *
 * @export
 * @param {any[]} input
 * @param {number} size
 * @returns {any[]}
 */

export function chunk(array: any[], size: number): any[] {

  size = Math.max(size, 0);
  // use a holder variable (input) pointing to array,
  // or make a new [] so we wont affect any change on
  // array (which is passed by reference)
  const input: any[] = array && array.slice(0) ? array : [];
  const { length } = input;

  if (!length) return [];
  if (size <= 1) return input;

  const output: any[] = new Array(Math.ceil(length / size));

  let outIndex: number = 0;
  let inIndex: number = 0;

  while (inIndex < length) {
    output[outIndex++] = input.slice(inIndex, inIndex += size);
  }

  return output;

}
