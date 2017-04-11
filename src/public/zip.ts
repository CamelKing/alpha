import { zipWith } from './zipWith';

/**
 * Zip a series of array and return a copy of the zipped array.
 *
 * implemented as a wrapper over the zipWith() function without the
 * iterator function.
 *
 * @export
 * @param {...any[]} arrays
 * @returns {any[]}
 */

export function zip(...arrays: any[]): any[] {

  return zipWith(...arrays);

  // const output: any[]
  //   = arrays[0].map((col: any[], i: number) => arrays.map((row: any[]) => row[i]));

  // return output;

}


const a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const c: boolean[] = [true, false, true, false, true, false, true, false, true];
// const fn: FnAny = (a1: any, b1: any, c1: any) => (a1 + ' ' + b1 + ' ' + c1);

// const e: any[] = zipWith(...d);

console.log(a);
console.log(b);
console.log(c);

const d: any[] = zip(a, b, c);
console.log(d);
// console.log(e);
