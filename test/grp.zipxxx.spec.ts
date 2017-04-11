import { expect, should } from 'chai';
import { zip, zipWith } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';

should();

const suiteText: string = 'Zip a series a arrays (Matrix Tranpose)';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  zip,
  zipWith,
];

const a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const c: boolean[] = [true, false, true, false, true, false, true, false, true];
const a1: number[][] = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
const ab: any[] = [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e'], [6, 'f'], [7, 'g'], [8, 'h'], [9, 'i']];
const abc: any[] = [[1, 'a', true], [2, 'b', false], [3, 'c', true], [4, 'd', false], [5, 'e', true], [6, 'f', false], [7, 'g', true], [8, 'h', false], [9, 'i', true]];

const n1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n10: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const n100: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const n1a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n10a: number[] = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const n100a: number[] = [111, 222, 333, 444, 555, 666, 777, 888, 999];

const fn: FnAny = (i: number, j: number, k: number) => ((i || 0) + (j || 0) + (k || 0));

tests['zip'] = [
  'return [] if no param passed in.',
  'return [] if no array element passed in.',
  'convert every element into an array within if only one array.',
  'zip 2 arrays into 1.',
  'zip 3 arrays into 1.',
  'ignore non array, null and undefined amongst param.',
];

tests['zipWith'] = [
  'return [] if no param passed in.',
  'return [] if no array element passed in.',
  'convert every element into an array within if only one array.',
  'zip 2 arrays into 1.',
  'zip 3 arrays into 1.',
  'ignore non array, null and undefined amongst param.',
];


inputs['zip'] = [
  [],
  [null, undefined, 123, 'Hello World', true, Symbol()],
  [a],
  [a, b],
  [a, b, c],
  ['hello', a, null, b, undefined, c, 123],
];

inputs['zipWith'] = [
  [],
  [null, undefined, 123, 'Hello World', true, Symbol()],
  [n1, fn],
  [n1, n10, fn],
  [n1, n10, n100, fn],
  ['hello', n1, null, n10, undefined, n100, 123, fn],
];

answers['zip'] = [
  [],
  [],
  a1,
  ab,
  abc,
  abc,
];

answers['zipWith'] = [
  [],
  [],
  n1a,
  n10a,
  n100a,
  n100a,
];


_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
