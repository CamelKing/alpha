/**
 * Split an array into chunks of smaller arrays,
 * as specified by the passed in size parameter.
 *
 * Note: adapted from the chunk() module from lodash.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {number} [size=1]
 * @returns {any[]}
 */

export function chunk(array: any[], size: number = 1): any[] {

  const input: any[] = array ? array : [];
  const { length } = input;
  if (length <= 0) return [];
  if (size <= 0) return array.slice(0);

  size = Math.max(size, 1);
  const output: any[] = new Array(Math.ceil(length / size));
  let outIndex: number = 0;
  let inIndex: number = 0;
  while (inIndex < length) {
    output[outIndex++] = input.slice(inIndex, inIndex += size);
  }
  return output;
}
