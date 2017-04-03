import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';

import { flatten } from '../src/alpha';

should();

const suiteText: string = 'Make multidimension array flat';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  flatten,
];

tests['flatten'] = [
  'flatten a 1D array.',
  'flatten a 2D array.',
  'flatten a 3D array.',
  'flatten a 4D array.',
  'flatten a deeply nested array.',
];

inputs['flatten'] = [
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  [[1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]],
  [[[1, [2, 3, 4], 5], [6, [7, 8, 9], 10]]],
  [[[1, [2, [3], 4], 5], [6, [7, [8], 9], 10]]],
  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]],
];

answers['flatten'] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename, true);



