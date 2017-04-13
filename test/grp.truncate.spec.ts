import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { truncate } from '../src/alpha';

should();

const suiteText: string = 'Truncate string to a shorter one.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  truncate,
];

tests['truncate'] = [
  'return \'\' for empty string.',
  'truncate string with all spaces as normal.',
  'return \'\' for  -ve length.',
  'return \'\' for  zero length.',
  'return copy of original string if length too long.',
  'make use the passed in padding string.',
  'limit padding string to half a word (3 char).',
  'use ... when length is >= 10 char.',
  'use … when length is < 10 char.',
  'return padding only if length is 3.',
  'return padding only if length is 2.',
  'return padding only if length is 1.',
];

const str: string = 'hello world to everyone.';

inputs['truncate'] = [
  ['', 50],
  ['   ', 50],
  [str, -1],
  [str, 0],
  [str, 50],
  [str, 10, '='],
  [str, 20, '======='],
  [str, 10],
  [str, 9],
  [str, 3, '==='],
  [str, 2, '==='],
  [str, 1, '==='],
];

answers['truncate'] = [
  '',
  '   ',
  '',
  '',
  str,
  'hello wor=',
  'hello world to ev===',
  'hello w...',
  'hello wo…',
  '===',
  '==',
  '=',
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
