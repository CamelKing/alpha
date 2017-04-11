import { expect, should } from 'chai';
import { trim, trimLeft, trimRight } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';

should();

const suiteText: string = 'trim() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  trim,
  trimLeft,
  trimRight,
];

tests['trim'] = [
  'leave a string w/out trailing & leading spaces intact.',
  'trim leading spaces from string',
  'trim trailing spaces from string',
  'trim both leading and trailing spaces',
  'return \'\' for a string with only spaces.',
  'return \'\' for an empty string.',
  'return \'\' for a null string.',
  'return \'\' for an undefined string.',
];

tests['trimLeft'] = [
  'leave a string w/out trailing & leading spaces intact.',
  'trim leading spaces from string',
  'does not trim trailing spaces from string',
  'trim leading but leave trailing spaces',
  'return \'\' for a string with only spaces.',
  'return \'\' for an empty string.',
  'return \'\' for a null string.',
  'return \'\' for an undefined string.',
];

tests['trimRight'] = [
  'leave a string w/out trailing & leading spaces intact.',
  'does not trim leading spaces from string',
  'trim trailing spaces from string',
  'trim trailing but leave leading spaces',
  'return \'\' for a string with only spaces.',
  'return \'\' for an empty string.',
  'return \'\' for a null string.',
  'return \'\' for an undefined string.',
];

inputs['trim'] = [
  ['a quick brown fox'],
  ['          a quick brown fox'],
  ['a quick brown fox          '],
  ['          a quick brown fox          '],
  ['          '],
  [''],
  [null],
  [undefined],
];

inputs['trimLeft'] = inputs['trim'];
inputs['trimRight'] = inputs['trim'];

answers['trim'] = [
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown fox',
  '',
  '',
  '',
  '',
];

answers['trimLeft'] = [
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown fox          ',
  'a quick brown fox          ',
  '',
  '',
  '',
  '',
];

answers['trimRight'] = [
  'a quick brown fox',
  '          a quick brown fox',
  'a quick brown fox',
  '          a quick brown fox',
  '',
  '',
  '',
  '',
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
