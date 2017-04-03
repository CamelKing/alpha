import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';
import { flatten, flattenDeep, flattenDepth } from '../src/alpha';

should();

const suiteText: string = 'Make multidimension array flat';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  flatten,
  flattenDeep,
  flattenDepth,
];

tests['flatten'] = [
  'flatten a 1D array.',
  'flatten a 2D array.',
  'flatten a 3D array.',
  'flatten a 4D array.',
  'flatten a deeply nested array.',
  'flatten a multi pocket deeply nested array.',
  'return null is if null array',
  'return undefined is if undefined array',
  'return [] is if empty array',
];

tests['flattenDeep'] = [
  'flatten a 1D array.',
  'flatten a 2D array.',
  'flatten a 3D array.',
  'flatten a 4D array.',
  'flatten a deeply nested array.',
  'flatten a multi pocket deeply nested array.',
  'return null is if null array',
  'return undefined is if undefined array',
  'return [] is if empty array',
];

tests['flattenDepth'] = [
  'flatten a 1D array.',
  'flatten a 2D array.',
  'flatten a 3D array.',
  'flatten a 4D array.',
  'flatten a deeply nested array.',
  'flatten a deeply nested array by 1 level.',
  'flatten a deeply nested array by 2 level.',
  'flatten a deeply nested array by 4 level.',
  'flatten a deeply nested array by 6 level.',
  'flatten a deeply nested array beyond nested level.',
  'flatten a multi pocket deeply nested array.',
  'flatten a multi pocket deeply nested array by 1 level.',
  'flatten a multi pocket deeply nested array by 2 level.',
  'flatten a multi pocket deeply nested array by 3 level.',
  'flatten a multi pocket deeply nested array by 4 level.',
  'flatten a multi pocket deeply nested array > nested level.',
  'return copy of array as is if level = 0',
  'return copy of array as is if level = -ve',
  'return null is if null array',
  'return undefined is if undefined array',
  'return [] is if empty array',
];

inputs['flatten'] = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  [[1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]],
  [[[1, [2, 3, 4], 5], [6, [7, 8, 9], 10]]],
  [[[1, [2, [3], 4], 5], [6, [7, [8], 9], 10]]],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10]],
  [null],
  [undefined],
  [[]],
];

inputs['flattenDeep'] = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  [[1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]],
  [[[1, [2, 3, 4], 5], [6, [7, 8, 9], 10]]],
  [[[1, [2, [3], 4], 5], [6, [7, [8], 9], 10]]],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10]],
  [null],
  [undefined],
  [[]],
];

inputs['flattenDepth'] = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  [[1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]],
  [[[1, [2, 3, 4], 5], [6, [7, 8, 9], 10]]],
  [[[1, [2, [3], 4], 5], [6, [7, [8], 9], 10]]],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]], 1],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]], 2],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]], 4],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]], 6],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]], 20],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10]],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], 1],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], 2],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], 3],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], 4],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], 5],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], 0],
  [[1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10], -1],
  [null],
  [undefined],
  [[]],
];

answers['flatten'] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, [2, 3, 4], 5, 6, [7, 8, 9], 10],
  [1, [2, [3], 4], 5, 6, [7, [8], 9], 10],
  [1, 2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]],
  [1, 2, [3, [4]], 5, 6, [7, [8, [9]]], 10],
  null,
  undefined,
  [],
];

answers['flattenDeep'] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  null,
  undefined,
  [],
];

answers['flattenDepth'] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]],
  [1, 2, 3, [4, [5, [6, [7, [8, [9, [10]]]]]]]],
  [1, 2, 3, 4, 5, [6, [7, [8, [9, [10]]]]]],
  [1, 2, 3, 4, 5, 6, 7, [8, [9, [10]]]],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, [3, [4]], 5, 6, [7, [8, [9]]], 10],
  [1, 2, 3, [4], 5, 6, 7, [8, [9]], 10],
  [1, 2, 3, 4, 5, 6, 7, 8, [9], 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10],
  [1, [2, [3, [4]]], 5, [6, [7, [8, [9]]]], 10],
  null,
  undefined,
  [],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
