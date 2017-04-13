/**
 * internal function to perform dropping of elements from an array, base on
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
 * @export
 * @param {any[]} input
 * @param {*} iteratee
 * @param {number} [maxDrop]
 * @param {_Direction} [direction]
 * @returns {any[]}
 */

import { Direction, FnIteratee } from '../constants';

import { isTheSame } from '../public/isTheSame';
import { theTypeOf } from '../public/theTypeOf';

// tslint:disable-next-line:cyclomatic-complexity
export function _drop(input: any[],
  predicate: any,
  maxDrop?: number,
  direction?: Direction): any[] {

  // blank array, return
  if (!input) return [];

  // get hold of size of input array
  const { length } = input;

  // calculate what should be max drop
  if (maxDrop == null || maxDrop > length) maxDrop = length;
  if (maxDrop <= 0) return input;

  // setup direction, default from the left
  direction = direction || Direction.fromLeft;

  // if no iteratee, just perform normal dropping
  // note: can't use if(!predicate) becauase predicate can be 
  // a boolean value.
  // this is as far as drop() and dropRight() goes
  if (predicate == null) {
    if (direction === Direction.fromLeft) return input.slice(maxDrop);
    return input.slice(0, length - maxDrop);
  }

  // get the type of iteratee
  const type: string = theTypeOf(predicate);

  // initialise drop count
  let dropCount: number = 0;

  // use to stop looping once while condition expires,
  // or max drop count reached
  let stop: boolean = false;

  // loop that perform checking on iteratee condition
  while (!stop && dropCount < length && dropCount < maxDrop) {

    // base on direction, current drop count, calculate
    // which item in the array we are working on
    const item: any = input[(dropCount * direction)
      + (direction === Direction.fromLeft ? 0 : (length - 1))];

    switch (type) {

      // iteratee with a function, run it and stop on when it returns false
      case 'function':
        stop = !predicate.call(null, item);
        break;

      // for object, do a deep comparison, stop if return false
      case 'object':
        stop = !isTheSame(predicate, item);
        break;

      // for array, check if property exist, and also check it value is true
      // stop when either one not true
      case 'array':
        stop = !(item.hasOwnProperty(predicate[0])
          && isTheSame(item[predicate[0]], predicate[1]));
        break;

      // string could mean two thigns:
      // 1) it is a key name and we shall check the value of the key,
      //    stop when false
      // 2) it is to be compare with the array elements, stop when
      //    no the same
      case 'string':
        if (item.hasOwnProperty(predicate)) {
          stop = !item[predicate];
        } else {
          stop = !isTheSame(item, predicate);
        }
        break;

      // everything else compare and stop when not match
      case 'number':
      case 'boolean':
      case 'date':
      case 'error':
      case 'nan':
      case 'symbol':
        stop = !isTheSame(item, predicate);
        break;

      // any other iteratee format would not perform any drop at all
      default:
        stop = true;
        break;
    }

    // if not stop yet, then increase drop count by 1 and continue looping
    if (!stop) dropCount++;

  }

  // base on direction of dropping, return either left or rigth slice of array
  if (direction === Direction.fromLeft) return input.slice(dropCount);
  return input.slice(0, length - dropCount);

}




// export function makeiteratee(): FnIteratee {

// }