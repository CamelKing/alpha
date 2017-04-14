import { difference, differenceBy, differenceWith, isTheSame, round, roundDown, roundUp } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { FnComparator } from '../src/alpha';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Extract differences between arrays';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  difference,
  differenceWith,
  differenceBy,
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

tests['differenceWith'] = [
  'use a strong filter comparator on strings array.',
  'use a X2 comparator on numbers array.',
  'use a small number comparator on numbers array.',
];

tests['differenceBy'] = [
  'round before compare.',
  'round down before compare.',
  'round up before compare.',
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

const fnFilter: FnComparator = (a: any, b: any) => (!isTheSame(a, b));
const fnX2: FnComparator = (a: any, b: any) => (a < b * 2);
const fnSmall: FnComparator = (a: any, b: any) => (a > 100);

inputs['differenceWith'] = [
  [['a', 'b', 'c'], ['a'], fnFilter],
  [[1, 10, 100], [1, 5, 50], fnX2],
  [[1, 100, 1000], [1, 5, 50], fnSmall],
];

inputs['differenceBy'] = [
  [[1.4, 2.5, 3.6], [1, 2, 4], round],
  [[1.4, 2.5, 3.6], [1, 2, 4], roundDown],
  [[1.4, 2.5, 3.6], [1, 2, 4], roundUp],
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

answers['differenceWith'] = [
  ['a'],
  [100],
  [1, 100],
];

answers['differenceBy'] = [
  [2.5],
  [3.6],
  [2.5],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
