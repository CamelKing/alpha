import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { isNumeric } from '../src/alpha';

should();

const suiteText: string = 'Test for numeric variable.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  isNumeric,
  // roundUp,
  // roundDown,
];

tests['isNumeric'] = [
  'test positive for +ve round numbers.',
  'test positive for -ve round numbers.',
  'test positive for +ve float numbers.',
  'test positive for -ve float numbers.',
  'test positive for zero.',
  'test positive for NaN.',
  'test positive for +ve round numbers string.',
  'test positive for -ve round numbers string.',
  'test positive for +ve float numbers string.',
  'test positive for -ve float numbers string.',
  'test positive for zero number string.',
  'test positive for +ve numbers string with leading spaces.',
  'test positive for -ve numbers string with leading spaces.',
  'test positive for zero numbers string with leading spaces.',

  'test negative for number text string e.g. \'One\'.',
  'test negative for numbers string with spaces in between.',
  'test negative for \'NaN\' string.',
  'test negative for typical text string.',
  'test negative for text string starts with numbers.',
  'test negative for text string ends with numbers.',
  'test negative for empty string.',
  'test negative for empty space string.',
  'test negative for boolean true.',
  'test negative for boolean false.',
  'test negative for boolean text \'true\'.',
  'test negative for boolean text \'false\'.',
  'test negative for date object.',
  'test negative for error object.',
  'test negative for empty object.',
  'test negative for empty array.',
  'test negative for array with number.',
  'test negative for symbol.',
  'test negative for function returning number.',
  'test negative for promise resolving into number.',


];

inputs['isNumeric'] = [
  [1],
  [-1],
  [1.234],
  [-1.234],
  [0],
  [NaN],
  ['1'],
  ['-1'],
  ['1.234'],
  ['-1.234'],
  ['0'],
  ['     1'],
  ['     -1'],
  ['     0'],

  ['one'],
  ['     123   123   '],
  ['NaN'],
  ['Hello World'],
  ['123 Hello World'],
  ['Hello World 123'],
  [''],
  ['   '],
  [true],
  [false],
  ['true'],
  ['false'],
  [new Date()],
  [new Error('IsNum')],
  [{}],
  [[]],
  [[1]],
  [Symbol()],
  [() => 100],
  [Promise.resolve(100)],
];

answers['isNumeric'] = [
  true, true, true, true, true,
  true, true, true, true, true,
  true, true, true, true,

  false, false, false, false, false,
  false, false, false, false, false,
  false, false, false, false, false,
  false, false, false, false, false,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
