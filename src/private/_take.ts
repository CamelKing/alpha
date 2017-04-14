/**
 * private function to slice an array based on
 * 1) an acidTest function (slice while true)
 * 2) control max number of extraction
 * 3) direction from left or right
 *
 * Return a copy of array. Return as is if not array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {ArrayOption} [userOption]
 * @returns {any[]}
 */

import { ArrayOption, Direction } from '../constants';

import { _isFromLeft } from './_isFromLeft';
import { assign } from '../public/assign';

export function _take(input: any[], userOption?: ArrayOption): any[] {

  const option: ArrayOption
    = assign({ count: 1, direction: Direction.fromLeft }, userOption);

  if (!Array.isArray(input)) return input;

  const { length } = input;

  // keep max within range of [0,input.length]
  // use == to detect both null and undefined
  option.count
    = option.count == null ? length : option.count > length ? length :
      option.count < 0 ? 0 : option.count;

  // if empty array, or max count is zero, just return a new empty array
  if (!length || !option.count) return [];

  const start: number = _isFromLeft(option.direction) ? 0 : length - 1;
  const maxEnd: number = start + (option.count < length ? option.count : length) * option.direction;
  let end: number = start;

  while (end !== maxEnd) {
    if (option.match ? option.match(input[end]) : (!!input[end])) {
      end += option.direction;
    } else break;
  }

  // return input.slice(start, Math.abs(start - end) + 1);
  return option.direction === Direction.fromLeft ? input.slice(start, end) : input.slice(end + 1);

}
