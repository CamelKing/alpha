import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { toParagraph } from '../src/alpha';

should();

const suiteText: string = 'Fromat a string into a hyphenated paragraph.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  toParagraph,
];

tests['toParagraph'] = [
  'make a hyphenated paragraph.',
  'return [] for empty string.',
  'return [] for null string.',
  'return [] for undefined string.',
  'flow string filled with symbols as usual.',
];

// tslint:disable-next-line:max-line-length
const englishString: string = 'Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.';

// tslint:disable-next-line:max-line-length
const englishParagraph: string[] = [
  'Lorem ipsum dolor sit amet, consectetur, adipiscing elit,   ',
  'sed do eiusmod tempor incididunt ut labore et dolore magna  ',
  'aliqua.Ut enim ad minim veniam, quis nostrud exercitation   ',
  'ullamco laboris nisi ut aliquip ex ea commodo consequat.    ',
  'Duis aute irure dolor in reprehenderit in voluptate velit   ',
  'esse cillum dolore eu fugiat nulla pariatur.Excepteur sint  ',
  'occaecat cupidatat non proident, sunt in culpa qui officia  ',
  'deserunt mollit anim id est laborum.'
];

inputs['toParagraph'] = [
  [englishString, 60],
  ['', 60],
  [null, 60],
  [undefined, 60],
  [',./\';[]=-+_}{\":?\`~!@#$%^&*()><', 10],
];

answers['toParagraph'] = [
  englishParagraph,
  [],
  [],
  [],
  [',./\';[]=--', '+_}{\":?`~-', '!@#$%^&*(-', ')><']
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
