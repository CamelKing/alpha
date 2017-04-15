import { compact, deepCompact } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Compact an array removing all falsey elements';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  compact,
  deepCompact,
];

const sym: Symbol = Symbol();
const fn: any = () => false;

tests['compact'] = [
  'remove all falsey element from an array.',
  'remove only one level falsey element within a nested array.',
  'won\'t remove functions which returns a false result.',
  'returns [] when pass in an empty array.',
  'returns [[]] when pass in a nested empty array.',
  'returns [] when pass in a null array.',
  'returns [] when pass in an undefined array.',
];

inputs['compact'] = [
  [['start', true, false, 1, 0, -1, null, undefined, NaN, sym, 'end']],
  [['start', [true], false, [1, [0, [-1, [null, [undefined, [NaN, ['end']]]]]]]]],
  [['start', true, false, 1, 0, -1, null, undefined, NaN, fn, 'end']],
  [[]],
  [[[]]],
  [null],
  [undefined],
];

answers['compact'] = [
  ['start', true, 1, -1, sym, 'end'],
  ['start', [true], [1, [0, [-1, [null, [undefined, [NaN, ['end']]]]]]]],
  ['start', true, 1, -1, fn, 'end'],
  [],
  [[]],
  [],
  [],
];


tests['deepCompact'] = [
  'remove all falsey element from an array.',
  'remove all falsey element within a nested array.',
  'won\'t remove functions which returns a false result.',
  'returns [] when pass in an empty array.',
  'returns [[]] when pass in a nested empty array.',
  'returns [] when pass in a null array.',
  'returns [] when pass in an undefined array.',
];

inputs['deepCompact'] = [
  [['start', true, false, 1, 0, -1, null, undefined, NaN, sym, 'end']],
  [['start', [true, [false, [1, [0, [-1, [null, [undefined, [NaN, ['end']]]]]]]]]]],
  [['start', true, false, 1, 0, -1, null, undefined, NaN, fn, 'end']],
  [[]],
  [[[]]],
  [null],
  [undefined],
];

answers['deepCompact'] = [
  ['start', true, 1, -1, sym, 'end'],
  ['start', [true, [[1, [[-1, [[[['end']]]]]]]]]],
  ['start', true, 1, -1, fn, 'end'],
  [],
  [[]],
  [],
  [],
];


_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
