/**
 * private function which removes 'false', null, undefined, '',
 * '0', '', NaN from an array.
 * Return a new copy of the array, original is not altered.
 *
 * Depends on the mode, this function can perform a shallow one
 * level compact, or deep level (nested) recursive compact on
 * nested array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 15, 2017
 *
 * @export
 * @param {any[]} input - array to compact
 * @returns {any[]} - a copy fo compacted array
 */

export function _compact(input: any[], deep: boolean = false): any[] {

  if (!input) return [];

  const { length } = input;
  const output: any[] = [];
  let inIndex: number = -1;
  let outIndex: number = 0;

  // loop thru the array and only copy/insert into output array
  // if it is not 'false'
  while (++inIndex < length) {
    const value: any = input[inIndex];
    if (value) {
      if (deep) {
        // if deep mode then recursively process nested array
        output[outIndex++]
          = (Array.isArray(value)) ? _compact(value, deep) : value;
      } else {
        // if shallow mode, just copy valye
        output[outIndex++] = value;
      }
    }
  }
  return output;

}
