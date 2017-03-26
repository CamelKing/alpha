/**
 * Convert a string into a fixed width string.
 * If it is too long, it will be truncated, and padded with '…' if necessary.
 * If it is too short, it will be padded with space, left or right optional.
 *
 * @export
 * @param {string} input
 * @param {number} len
 * @param {boolean} [align] use Align.left, Align.right, or Align.center
 * @returns {string}
 */

import { Align, Space, pad, truncate } from '../../src/alpha';

export function toFixWidth(input: string, len: number, align?: Align): string {

  return pad(truncate(input, len), len, Space, align || Align.left);

}
