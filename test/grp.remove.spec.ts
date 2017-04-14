import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { FnMatcher } from '../src/constants';
import { _testSuites } from './__testSuites';
import { remove } from '../src/alpha';

should();

const suiteText: string = 'Remove items from an array using acid test function';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  remove,
];

const fnNeg: FnMatcher = (value: any) => (!!value);
const sym: Symbol = Symbol();
const test: any = ['start', true, false, 1, 0, -1, null, undefined, NaN, sym, '', 'end'];
const answer: any = ['start', true, 1, -1, sym, 'end'];

tests['remove'] = [
  'return as is for null.',
  'return as is for undefined.',
  'return as is for non array.',
  'return [] for empty array.',
  'using acid test to remove items from array.',
  'In the absence of acid test, remove all falsey elements.',
];

inputs['remove'] = [
  [null, fnNeg],
  [undefined, fnNeg],
  ['Not an array', fnNeg],
  [[], fnNeg],
  [test, fnNeg],
  [test],
];

answers['remove'] = [
  null,
  undefined,
  'Not an array',
  [],
  answer,
  answer,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
