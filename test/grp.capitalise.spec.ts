import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';
import { capitalise } from '../src/alpha';

should();

const suiteText: string = 'Produce capitalised string.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  capitalise,
];

tests['capitalise'] = [
  'capitalise the first char of a string.',
  'OK with first char already capitalised.',
  'OK with if first char is numerical.',
  'OK with if first char is symbol.',
  'return \'\' with empty string.',
  'return \'\' with null string.',
  'return \'\' with undefined.',
];

inputs['capitalise'] = [
  ['a quick BROWN FOX'],
  ['A quick brown fox'],
  ['1 quick BROWN FOX'],
  ['# quick BROWN FOX'],
  [''],
  [null],
  [undefined],
];

answers['capitalise'] = [
  'A quick brown fox',
  'A quick brown fox',
  '1 quick brown fox',
  '# quick brown fox',
  '',
  '',
  '',
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);



