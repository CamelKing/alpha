/**
 * fill up elements in an array with value passed in,
 * starting from start, all the way up to end, but not including end.
 *
 * Note: this behaviour is consistent with array.slice() method.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 16, 2017
 *
 * @export
 * @param {any[]} input
 * @param {*} value
 * @param {number} [start]
 * @param {number} [end]
 * @returns
 */

export function fill(input: any[], value: any,
  start?: number, end?: number): any[] {

  if (!input || !Array.isArray(input) || input.length === 0) return input;

  const output: any[] = input.slice(0);

  const { length } = input;

  start = start == null ? 0 :
    start < 0 ? length + start : start;

  if (start >= length) return output;

  end = end == null ? length :
    end < 0 ? length + end :
      end > length ? length : end;

  // it is possible end < 0, if end starts with a big -ve numbers
  // the loop below will then result in the return of just output


  // start = start || 0;
  // if (start < 0) start = length + start;
  // else if (start >= length) return output;

  // end = end || length;
  // if (end < 0) end = length + end;
  // else if (end > length) end = length;

  while (start < end) output[start++] = value;

  return output;

}
