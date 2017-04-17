
/**
 * zip together two arrays and produce an object assuming [key:value]
 * for the two array.
 *
 * If we zip together the two arrays, then we can use fromPairs() to
 * produce the same object
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {string[]} keys
 * @param {any[]} values
 * @returns {object}
 */

export function zipObject(keys: string[], values: any[]): object {

  if (!Array.isArray(keys) || !Array.isArray(values)) return {};

  const output: object = {};

  keys.forEach((key: string, index: number) => {
    if (key != null && key.length > 0) output[key] = values[index];
  });

  return output;

}
