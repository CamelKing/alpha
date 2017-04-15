/**
 * Split an array into chunks of smaller arrays,
 * as specified by the passed in size parameter.
 *
 * Note: adapted from the chunk() module from lodash.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 15, 2017
 *
 * @export
 * @param {any[]} input
 * @param {number} [size=1]
 * @returns {any[]}
 */

export function chunk(array: any[], size: number = 1): any[] {

  if (!Array.isArray(array)) return [];
  const { length } = array;
  if (length <= 0) return [];
  if (size <= 0) return array.slice(0);

  const output: any[] = new Array(Math.ceil(length / size));
  let outIndex: number = 0;
  let inIndex: number = 0;
  while (inIndex < length) {
    output[outIndex++] = array.slice(inIndex, inIndex += size);
  }
  return output;
}
