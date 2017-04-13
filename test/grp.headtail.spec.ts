import { expect, should } from 'chai';
import { head, nth, tail } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Head, Tail and nth element of an array';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  head,
  tail,
  nth,
];

tests['head'] = [
  'return undefined for no param.',
  'return undefined for non array.',
  'return undefined for null.',
  'return undefined for undefined.',
  'return undefined for empty array.',
  'return first element for number array',
  'return first element for string array',
  'return first element for boolean array',
  'return first element for symbol array',
  'return first element for object array',
  'return first element for error object array',
  'return first element for date object array',
  'return first element(array) for a nested array',
  'return null if first element is null',
  'return undefined if first element is undefined',
];

tests['tail'] = [
  'return undefined for no param.',
  'return undefined for non array.',
  'return undefined for null.',
  'return undefined for undefined.',
  'return undefined for empty array.',
  'return last element for number array',
  'return last element for string array',
  'return last element for boolean array',
  'return last element for symbol array',
  'return last element for object array',
  'return last element for error object array',
  'return last element for date object array',
  'return last element(array) for a nested array',
  'return null if last element is null',
  'return undefined if last element is undefined',
];

tests['nth'] = [
  'return undefined for no param.',
  'return undefined for non array.',
  'return undefined for null.',
  'return undefined for undefined.',
  'return undefined for empty array.',
  'return second element for number array',
  'return second element for string array',
  'return second element for boolean array',
  'return second element for symbol array',
  'return second element for object array',
  'return second element for error object array',
  'return second element for date object array',
  'return second element(array) for a nested array',
  'return null if second element is null',
  'return undefined if second element is undefined',
];


const e1: Error = new Error('TEST 1');
const e2: Error = new Error('TEST 2');
const e3: Error = new Error('TEST 3');

const d1: Date = new Date();
const d2: Date = new Date(d1.getTime() + 10000);
const d3: Date = new Date(d2.getTime() + 10000);

const s1: Symbol = Symbol();
const s2: Symbol = Symbol();
const s3: Symbol = Symbol();

inputs['head'] = [
  [],
  [123],
  [null],
  [undefined],
  [[]],
  [[1, 2, 3, 4, 5]],
  [['quick', 'brown', 'fox', 'jumps', 'over']],
  [[true, false, true, false, true]],
  [[s1, s2, s3]],
  [[{ a: 1, b: true }, { a: 2, b: true }, { a: 3, b: true }]],
  [[e2, e1, e3]],
  [[d2, d1, d3]],
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
  [[null, null, null]],
  [[undefined, undefined, undefined]],
];

inputs['tail'] = [
  [],
  [123],
  [null],
  [undefined],
  [[]],
  [[1, 2, 3, 4, 5]],
  [['quick', 'brown', 'fox', 'jumps', 'over']],
  [[true, false, true, false, true]],
  [[s1, s2, s3]],
  [[{ a: 1, b: true }, { a: 2, b: true }, { a: 3, b: true }]],
  [[e2, e1, e3]],
  [[d2, d1, d3]],
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
  [[null, null, null]],
  [[undefined, undefined, undefined]],
];

inputs['nth'] = [
  [null, 1],
  [123, 1],
  [null, 1],
  [undefined, 1],
  [[], 1],
  [[1, 2, 3, 4, 5], 1],
  [['quick', 'brown', 'fox', 'jumps', 'over'], 1],
  [[true, false, true, false, true], 1],
  [[s1, s2, s3], 1],
  [[{ a: 1, b: true }, { a: 2, b: true }, { a: 3, b: true }], 1],
  [[e2, e1, e3], 1],
  [[d2, d1, d3], 1],
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1],
  [[null, null, null], 1],
  [[undefined, undefined, undefined], 1],
];

answers['head'] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  1,
  'quick',
  true,
  s1,
  { a: 1, b: true },
  e2,
  d2,
  [1, 2, 3],
  null,
  undefined,
];

answers['tail'] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  5,
  'over',
  true,
  s3,
  { a: 3, b: true },
  e3,
  d3,
  [7, 8, 9],
  null,
  undefined,
];

answers['nth'] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  2,
  'brown',
  false,
  s2,
  { a: 2, b: true },
  e1,
  d1,
  [4, 5, 6],
  null,
  undefined,
];


_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
