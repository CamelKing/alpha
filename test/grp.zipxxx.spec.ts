import { expect, should } from 'chai';
import { unzip, unzipWith, zip, zipObject, zipWith } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Zip a series a arrays (Matrix Tranpose)';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  zip,
  zipWith,
  unzip,
  unzipWith,
  zipObject,
];

const a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const c: boolean[] = [true, false, true, false, true, false, true, false, true];
const d: string[] = ['h', 'e', 'l', 'l', 'o'];
const a1: number[][] = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
const ab: any[] = [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [5, 'e'], [6, 'f'], [7, 'g'], [8, 'h'], [9, 'i']];
const abc: any[] = [[1, 'a', true], [2, 'b', false], [3, 'c', true], [4, 'd', false], [5, 'e', true], [6, 'f', false], [7, 'g', true], [8, 'h', false], [9, 'i', true]];

const abcd: any[] = [[1, 'a', true, 'h'], [2, 'b', false, 'e'], [3, 'c', true, 'l'], [4, 'd', false, 'l'], [5, 'e', true, 'o'], [6, 'f', false, undefined], [7, 'g', true, undefined], [8, 'h', false, undefined], [9, 'i', true, undefined]];

const n1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n10: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const n100: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const n1b: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const n1a: number[][] = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];

const n10a: number[] = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const n100a: number[] = [111, 222, 333, 444, 555, 666, 777, 888, 999];

const fn1: FnAny = (i: number, j: number, k: number) => ((i || 0) + (j || 0) + (k || 0));

const fn2: FnAny = (i: number, j: number, k: number) => [((i || 0) + (j || 0) + (k || 0))];

tests['zip'] = [
  'return [] if no param passed in.',
  'return [] if no array element passed in.',
  'convert [1,2,3] into a nested array [[1],[2],[3]].',
  'zip 2 arrays into 1.',
  'zip 3 arrays into 1.',
  'zip 4 arrays with non uniform size into 1.',
  'ignore non array, null and undefined amongst param.',
];

tests['zipWith'] = [
  'return [] if no param passed in.',
  'return [] if no array element passed in.',
  'convert [1,2,3] into a nested array [[1],[2],[3]].',
  'zip 2 arrays into 1.',
  'zip 3 arrays into 1.',
  'ignore non array, null and undefined amongst param.',
];

tests['unzip'] = [
  'return [] if no param passed in.',
  'return [] if not array param.',
  'return [] if empty array.',
  'convert [1,2,3] into a nested array [[1],[2],[3]].',
  'unzip a 2 elements zipped array.',
  'unzip a 3 elements zipped array.',
  'unzip a 4 elements non uniform array.',
];

tests['unzipWith'] = [
  'return [] if no param passed in.',
  'return [] if not array param.',
  'return [] if empty array.',
  'convert [1,2,3] into a nested array [[1],[2],[3]] (no iterator).',
  'convert [1,2,3] into a nested array [[1],[2],[3]] (with iterator).',
];

tests['zipObject'] = [
  'return {} if first param is not array.',
  'return {} if second param is not array.',
  'return {} if first param is an empty array.',
  'assign undefined for missing values for key.',
  'disregard extra values, limit objects properties to keys.',
  'disregard null keys.',
  'disregard undefined keys.',
  'disregard empty \'\' keys.',
];

inputs['zip'] = [
  [],
  [null, undefined, 123, 'Hello World', true, Symbol()],
  [a],
  [a, b],
  [a, b, c],
  [a, b, c, d],
  ['hello', a, null, b, undefined, c, 123],
];

inputs['zipWith'] = [
  [],
  [null, undefined, 123, 'Hello World', true, Symbol()],
  [n1, fn1],
  [n1, n10, fn1],
  [n1, n10, n100, fn1],
  ['hello', n1, null, n10, undefined, n100, 123, fn1],
];

inputs['unzip'] = [
  [],
  [123],
  [[]],
  [n1],
  [ab],
  [abc],
  [abcd],
];

inputs['unzipWith'] = [
  [],
  [123],
  [[]],
  [n1],
  [n1, fn2],
  [n1, n10, fn2],
  [n1, n10, n100, fn1],
  ['hello', n1, null, n10, undefined, n100, 123, fn1],
];

inputs['zipObject'] = [
  [123, []],
  [[], 123],
  [[], [1, 2, 3]],
  [['first', 'second', 'third'], [true, false]],
  [['first', 'second'], ['true', 'false', 'maybe']],
  [[null, 'second'], ['true', 'false']],
  [[undefined, 'second'], ['true', 'false']],
  [['', 'second'], ['true', 'false']],
];

answers['zip'] = [
  [],
  [],
  a1,
  ab,
  abc,
  abcd,
  abc,
];

answers['zipWith'] = [
  [],
  [],
  n1b,
  n10a,
  n100a,
  n100a,
];

answers['unzip'] = [
  [],
  [],
  [],
  n1a,
  [a, b],
  [a, b, c],
  [a, b, c, d],
];

answers['unzipWith'] = [
  [],
  [],
  [],
  n1a,
  n1a,
];

answers['zipObject'] = [
  {},
  {},
  {},
  { first: true, second: false, third: undefined },
  { first: 'true', second: 'false' },
  { second: 'false' },
  { second: 'false' },
  { second: 'false' },
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
