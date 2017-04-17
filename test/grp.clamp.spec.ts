import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { clamp } from '../src/alpha';

should();

const suiteText: string = 'Clamping numeric value';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  clamp,
];

tests['clamp'] = [
  'Clamp value within upper limit',
  'Clamp value within lower limit',
  'Return as is if within range',
  'Swapping lower and upper limit, clamp by upper',
  'Swapping lower and upper limit, clamp by lower',
  'Swapping lower and upper limit, within range',
  'Clamp valye by upper limit, with no lower limit',
  'return null if null number',
  'return undefined if undefined number',
  'return NaN if NaN number',
  'Clamp floats within upper limit',
  'Clamp floats within lower limit',
  'Clamp floats within range',
  'Clamp with floats upper limit',
  'Clamp with floats lower limit',
  'Clamp within floats range',
];

inputs['clamp'] = [
  [100, 1, 10],
  [100, 1000, 1010],
  [100, 50, 200],
  [100, 10, 1],
  [100, 1010, 1000],
  [100, 200, 50],
  [100, 99],
  [null, 99, 1],
  [undefined, 99, 1],
  [NaN, 99, 1],
  [100.234, 99, 1],
  [100.234, 199, 101],
  [100.234, 199, 99],
  [100.234, 99.123, 1.456],
  [100.234, 199.123, 101.456],
  [100.234, 199.123, 99.456],
];

answers['clamp'] = [
  10,
  1000,
  100,
  10,
  1000,
  100,
  99,
  null,
  undefined,
  NaN,
  99,
  101,
  100.234,
  99.123,
  101.456,
  100.234,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
