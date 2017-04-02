import { FnAny, _testSuites } from './_testSuites';
import { drop, dropRight, dropRightWhile, dropWhile } from '../src/alpha';
import { expect, should } from 'chai';

import { isTheSame } from '../src/public/isTheSame';

should();

const suiteText: string = 'Dropping elements from array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  drop,
  dropRight,
  dropWhile,
  dropRightWhile,
];

tests['drop'] = [
  'drop 1 item from the left by default.',
  'leave only the right most item of the array.',
  'return [] if drops more than the size of array.',
  'return [] if empty array.',
  'return [] if null array.',
  'drop 1 item from the left if count is null.',
  'drop 1 item from the left by default if count is undefined.',
  'return array as is if count is zero.',
  'return array as is if count is -ve.',
];

tests['dropRight'] = [
  'drop 1 item from the right by default.',
  'leave only the left most item of the array.',
  'return [] if drops more than the size of array.',
  'return [] if empty array.',
  'return [] if null array.',
  'drop 1 item from the right if count is null.',
  'drop 1 item from the right by default if count is undefined.',
  'return array as is if count is zero.',
  'return array as is if count is -ve.',
];

tests['dropWhile'] = [
  'return array as is if max drop count is -ve.',
  'return array as is if max drop count is 0.',
  'null predicate = drop by max drop count.',
  'default max drop count is length of array.',
  'using function as predicate.',
  'using object matching as predicate.',
  'drop nothing if wrong object type is used as predicate.',
  'drop nothing if empty object is used as predicate.',
  'using property(in array) matching as predicate.',
  'drop nothing if property in array does not exist.',
  'using propperty value as predicate.',
  'drop by matching a string.',
  'drop by matching a number.',
  'drop by matching a date.',
  'drop by matching an error object.',
  'drop by matching a boolean value.',
  'drop by matching a NaN value.',
  'drop by matching a symbol.',
  'ignore any other form of predicate e.g. promise.',
];

tests['dropRightWhile'] = [
  'return array as is if max drop count is -ve.',
  'return array as is if max drop count is 0.',
  'null predicate = drop by max drop count.',
  'default max drop count is length of array.',
  'using function as predicate.',
  'using object matching as predicate.',
  'drop nothing if wrong object type is used as predicate.',
  'drop nothing if empty object is used as predicate.',
  'using property(in array) matching as predicate.',
  'drop nothing if property in array does not exist.',
  'using propperty value as predicate.',
  'drop by matching a string.',
  'drop by matching a number.',
  'drop by matching a date.',
  'drop by matching an error object.',
  'drop by matching a boolean value.',
  'drop by matching a NaN value.',
  'drop by matching a symbol.',
];


inputs['drop'] = [
  [[1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5], 4],
  [[1, 2, 3, 4, 5], 10],
  [[], 1],
  [null, 1],
  [[1, 2, 3, 4, 5], null],
  [[1, 2, 3, 4, 5], undefined],
  [[1, 2, 3, 4, 5], 0],
  [[1, 2, 3, 4, 5], -1],
];

inputs['dropRight'] = [
  [[1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5], 4],
  [[1, 2, 3, 4, 5], 10],
  [[], 1],
  [null, 1],
  [[1, 2, 3, 4, 5], null],
  [[1, 2, 3, 4, 5], undefined],
  [[1, 2, 3, 4, 5], 0],
  [[1, 2, 3, 4, 5], -1],
];

const fnPdLeft: (o: any) => boolean = (o: any) => !o['active'];
const fnPdRight: (o: any) => boolean = (o: any) => o['active'];

const users: any[] = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true }
];

const strs: string[] = ['string', 'string', 'string',
  'number', 'number', 'number'];

const nums: number[] = [1, 1, 1, 2, 2, 2];

const d1: Date = new Date();
const d2: Date = new Date(d1.getTime() + 10000);
const dates: Date[] = [d1, d1, d1, d2, d2, d2];
const e1: Error = Error('This is Error One');
const e2: Error = Error('This si Error Two');
const errs: Error[] = [e1, e1, e1, e2, e2, e2];
const s1: Symbol = Symbol();

inputs['dropWhile'] = [
  [users, null, -1],
  [users, null, 0],
  [users, null, 1],
  [users, null],
  [users, fnPdLeft],
  [users, { user: 'barney', active: false }],
  [users, { userX: 'barney', active: false }],
  [users, {}],
  [users, ['active', false]],
  [users, ['activeX', false]],
  [users, 'active'],
  [strs, 'string'],
  [nums, 1],
  [dates, d1],
  [errs, e1],
  [[false, false, false, true, true, true], false],
  [[NaN, NaN, 1, 2, 3, 4], NaN],
  [[s1, s1, 1, 2, 3, 4], s1],
  [users, Promise.resolve({ user: 'barney', active: false })],
];

inputs['dropRightWhile'] = [
  [users, null, -1],
  [users, null, 0],
  [users, null, 1],
  [users, null],
  [users, fnPdRight],
  [users, { user: 'pebbles', active: true }],
  [users, { userX: 'barney', active: false }],
  [users, {}],
  [users, ['active', true]],
  [users, ['activeX', false]],
  [users, 'active'],
  [strs, 'number'],
  [nums, 2],
  [dates, d2],
  [errs, e2],
  [[false, false, false, true, true, true], true],
  [[1, 2, 3, 4, NaN, NaN], NaN],
  [[1, 2, 3, 4, s1, s1], s1],
];


answers['drop'] = [
  [2, 3, 4, 5],
  [5],
  [],
  [],
  [],
  [2, 3, 4, 5],
  [2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

answers['dropRight'] = [
  [1, 2, 3, 4],
  [1],
  [],
  [],
  [],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

answers['dropWhile'] = [
  users,
  users,
  [{ user: 'fred', active: false }, { user: 'pebbles', active: true }],
  [],
  [{ user: 'pebbles', active: true }],
  [{ user: 'fred', active: false }, { user: 'pebbles', active: true }],
  users,
  users,
  [{ user: 'pebbles', active: true }],
  users,
  users,
  ['number', 'number', 'number'],
  [2, 2, 2],
  [d2, d2, d2],
  [e2, e2, e2],
  [true, true, true],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  users,
];

answers['dropRightWhile'] = [
  users,
  users,
  [{ user: 'barney', active: false }, { user: 'fred', active: false }],
  [],
  [{ user: 'barney', active: false }, { user: 'fred', active: false }],
  [{ user: 'barney', active: false }, { user: 'fred', active: false }],
  users,
  users,
  [{ user: 'barney', active: false }, { user: 'fred', active: false }],

  users,
  [{ user: 'barney', active: false }, { user: 'fred', active: false }],
  ['string', 'string', 'string'],
  [1, 1, 1],
  [d1, d1, d1],
  [e1, e1, e1],
  [false, false, false],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
