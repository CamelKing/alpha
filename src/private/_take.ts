import { FnAcidTest } from '../constants';
import { _Direction } from '../_constants';

/**
 * private function to slice an array based on
 * 1) an acidTest function (slice while true)
 * 2) control max number of extraction
 * 3) direction from left or right
 *
 * Return a copy of array. Return as is if not array.
 *
 * @export
 * @param {any[]} input
 * @param {FnAcidTest} [acidTest]
 * @param {number} [max=input.length]
 * @param {_Direction} [direction=_Direction.fromLeft]
 * @returns {any[]}
 */

export function _take(input: any[],
  acidTest?: FnAcidTest,
  max?: number,
  direction: _Direction = _Direction.fromLeft): any[] {

  if (!Array.isArray(input)) return input;

  const { length } = input;

  // keep max within range of [0,input.length]
  // use == to detect both null and undefined
  max = max == null ? length : max > length ? length : max < 0 ? 0 : max;

  // if empty array, or max count is zero, just return a new empty array
  if (!length || !max) return [];

  const start: number = direction === _Direction.fromLeft ? 0 : length - 1;
  const maxEnd: number = start + (max < length ? max : length) * direction;
  let end: number = start;

  while (end !== maxEnd) {
    if (acidTest ? acidTest(input[end]) : (!!input[end])) {
      end += direction;
    } else break;
  }

  // return input.slice(start, Math.abs(start - end) + 1);
  return direction === _Direction.fromLeft ? input.slice(start, end) : input.slice(end + 1);

}
