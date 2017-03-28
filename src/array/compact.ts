/**
 * removes 'false', null, undefined, '', '0', '', NaN from an array
 * return a new copy of the array, original is not altered.
 *
 * @since 0.0.1
 * @category array
 *
 * @export
 * @param {any[]} input - array to compact
 * @returns {any[]} - a copy fo compacted array
 */

// TODO: handle nested array?

export function compact(input: any[]): any[] {

  const output: any[] = [];

  let inIndex: number = -1;
  let outIndex: number = 0;
  const length: number = input === null || input === undefined ? 0 : input.length;

  // loop thru the array and only copy/insert into output array
  // if it is not 'false'

  while (++inIndex < length) {
    const value: any = input[inIndex];
    if (value) {
      output[outIndex++] = (Array.isArray(value)) ? compact(value) : value;
    }
  }

  return output;

}
