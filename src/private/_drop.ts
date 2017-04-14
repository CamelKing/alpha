/**
 * private function to perform dropping of elements from an array, base on
 *
 * 1) a iteratee which will be used as a checking condition to see if we
 *    shall continue dropping. Take note this iteratee is not used against
 *    entire array, just at the start, and stop once condition no longer met.
 *    For entire array, one can use filter instead.
 *
 * 2) a max drop count indictating the maximum number of items to drop, and
 *    also when iteratee is absence, this become the number of items to drop
 *
 * 3) direction of drop, either from left or right.
 *
 * This function will return result in a new copy of array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 14, 2017
 *
 * @export
 * @param {any[]} input
 * @param {*} iteratee
 * @param {number} [maxDrop]
 * @param {_Direction} [direction]
 * @returns {any[]}
 */

import { Direction, DropOption, FnCheck } from '../constants';

import { _isFromLeft } from './_isFromLeft';
import { _makeChecker } from './_makeChecker';

// tslint:disable-next-line:cyclomatic-complexity
export function _drop(input: any[], userOption: DropOption): any[] {
  // predicate: any,
  // maxDrop?: number,
  // direction?: Direction): any[] {

  const option: DropOption = {
    count: 1,
    direction: Direction.fromLeft
  };

  // overwrite default option with user option
  Object.assign(option, userOption);

  // blank array, return
  if (!input) return [];

  // get hold of size of input array
  const { length } = input;

  // calculate what should be max drop
  if (option.count > length) option.count = length;
  if (option.count <= 0) return input;

  // if no iteratee, just perform normal dropping
  // note: can't use if(!predicate) becauase predicate can be
  // a boolean value.
  // this is as far as drop() and dropRight() goes
  if (option.predicate == null) {
    if (_isFromLeft(option.direction)) return input.slice(option.count);
    return input.slice(0, length - option.count);
  }

  // compare function to check a certain item against the predicate
  const ifSame: FnCheck = _makeChecker(option.predicate);

  // shorthand function to extract the current item in the input array
  // taking into consideration current cropcount and direction
  const atCurrent: (i: number) => any = (i: number) => input[(i * option.direction)
    + (_isFromLeft(option.direction) ? 0 : (length - 1))];

  // use to stop looping once while condition expires,
  // or max drop count reached
  let keepGoing: boolean = true;

  // initialise array index
  let index: number = 0;

  // loop that perform checking on iteratee condition
  // while (keepGoing && index < length && index < maxDrop) {
  while (keepGoing && index < option.count) {

    // check if the current item is to be dropped
    keepGoing = ifSame(atCurrent(index));

    // increase drop count by 1 and continue looping if still the same
    if (keepGoing) index++;

  }

  // base on direction of dropping, return either left or rigth slice of array
  if (_isFromLeft(option.direction)) return input.slice(index);
  return input.slice(0, length - index);

}


