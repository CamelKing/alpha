/**
 * Private utility function/shorthand to check
 * if the direction is fromLeft.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @param {Direction} dir
 * @returns {boolean}
 */

import { Direction } from '../constants';

export function _isFromLeft(dir: Direction): boolean {
  return (dir === Direction.fromLeft);
}
