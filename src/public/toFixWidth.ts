/**
 * Convert a string into a fixed width string.
 * If it is too long, it will be truncated, and padded with '…' if necessary.
 * If it is too short, it will be padded with space, left or right optional.
 *
 * @since 0.0.1
 * @category String
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {Align} [align] use Align.left, Align.right, or Align.center
 * @returns {string}
 */

import { Align, Space } from '../constants';

import { pad } from './pad';
import { truncate } from './truncate';

export function toFixWidth(input: string, len: number, align?: Align): string {

  return pad(truncate(input, len),
    len,
    { padText: Space, align: (align || Align.left) });

}
