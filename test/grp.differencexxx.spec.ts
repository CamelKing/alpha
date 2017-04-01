import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';

import { difference } from '../src/alpha';

should();

const suiteText: string = 'XXXX() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  difference,
  // roundUp,
  // roundDown,
];

tests['difference'] = [
  'return [] if base array (1st) is empty.',
  'return [] if base array (1st) is null.',
  'return base array if exclude array (2nd) is null.',
  'return [] if no difference.',
  'extract differences with null.',
  'extract difference with number.',
  'extract difference with string.',
  'would not confuse between number and numeric string',
  'extract difference with boolean.',
  'extract difference in nested array.',
  'extract difference with objects.',
  'extract difference with nested objects.',
  'extract no difference with same date objects.',
  'extract difference with date objects.',
];

const d1: Date = new Date();
const d2: Date = new Date(d1.getTime() + 1000);

inputs['difference'] = [
  [[], [1, 2, 3, 4, 5]],
  [null, [1, 2, 3, 4, 5]],
  [[1, 2, 3, 4, 5], null],
  [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  [[null, 1, 2, 3], [1, 2, 3]],
  [[1, 2, 3, 4, 5], [1, 2, 3, 4]],
  [['1', '2', '3', '4', '5'], ['1', '2', '3', '4']],
  [['1', '2', '3', '4', '5'], [1, '2', '3', '4']],
  [[true, false], [true]],
  [[1, 2, [3, 4, 5]], [1, 3, [3, 4, 5]]],
  [[{ a: 1 }, { b: 1 }], [{ c: 1 }, { b: 1 }]],
  [[{ a: 1, b: { c: 1 } }, { b: 1, c: { a: 1 } }], [{ c: 1 }, { b: 1, c: { a: 1 } }]],
  [[d1], [d2]],
  [[d1], [d1]],
];

answers['difference'] = [
  [],
  [],
  [1, 2, 3, 4, 5],
  [],
  [null],
  [5],
  ['5'],
  ['1', '5'],
  [false],
  [2],
  [{ a: 1 }],
  [{ a: 1, b: { c: 1 } }],
  [d1],
  [],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
