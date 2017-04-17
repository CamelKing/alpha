import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { inRange } from '../src/alpha';

should();

const suiteText: string = 'Checking Numbers within a given range';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  inRange,
];

tests['inRange'] = [
  'Integer within a positive range.',
  'Integer within a negative range.',
  'Integer across a positive-negative range.',
  'Integer not within a positive range.',
  'Integer not within a negative range.',
  'Integer not across a positive-negative range.',
  'Floats within a positive range.',
  'Floats within a negative range.',
  'Floats across a positive-negative range.',
  'Floats not within a positive range.',
  'Floats not within a negative range.',
  'Floats not across a positive-negative range.',
  'Integer within range by floats.',
  'Integer not within range by floats.',
  'Floats within range by integer.',
  'Floats not within range by integer.',
  'Check in range only with upto value.',
  'Check not in range only with upto value.',
  'Check in range with [upto, from] order.',
  'Check not in range with [upto, from] order.',
  'return false if null number',
  'return false if undefined number',
  'return false if NaN number',
];

inputs['inRange'] = [
  [10, 1, 100],
  [-10, -1, -100],
  [10, -1, 100],
  [101, 1, 100],
  [-101, -1, -100],
  [-10, -1, 100],

  [10.123, 1.456, 100.789],
  [-10.123, -1.456, -100.789],
  [10.123, -1.456, 100.789],
  [101.123, 1.456, 100.789],
  [-101.123, -1.456, -100.789],
  [-10.123, -1.456, 100.789],

  [10, -1.123, 100.456],
  [101, 1.123, 100.456],

  [10.123, -1, 100],
  [101.456, 1, 100],

  [10, 100],
  [101, 100],

  [10, 100, -1],
  [101, 100, 1],

  [null, 1, 100],
  [undefined, 1, 100],
  [NaN, 1, 100],
];

answers['inRange'] = [
  true, true, true,
  false, false, false,
  true, true, true,
  false, false, false,
  true, false,
  true, false,
  true, false,
  true, false,
  false, false, false,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
