import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { theTypeOf } from '../src/alpha';

should();

const suiteText: string = 'Identify type information';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  theTypeOf,
];

tests['theTypeOf'] = [
  'return "string" for string variable.',
  'return "string" for empty string.',
  'return "undefined" for undefined variable.',
  'return "null" for null variable.',
  'return "nan" for NaN variable.',
  'return "number" for number variable.',
  'return "number" for -ve number variable.',
  'return "number" for -ve floating point number variable.',
  'return "boolean" for TRUE boolean variable.',
  'return "boolean" for FALSE boolean variable.',
  'return "array" for array variable.',
  'return "array" for nested array variable.',
  'return "object" for empty object variable.',
  'return "object" for normal object variable.',
  'return "object" for normal object variable.',
  'return "date" for a date object variable.',
  'return "error" for an error object.',
  'return "symbol" for an error object.',
  'return "function" for a variable storing function.',
  'return "promise" for a variable Promise object.',
];

inputs['theTypeOf'] = [
  ['hello world'],
  [''],
  [undefined],
  [null],
  [NaN],
  [123456],
  [-123456],
  [-123.456],
  [true],
  [false],
  [[123, 'hello', true]],
  [[123, ['hello', [true]]]],
  [{}],
  [{ a: 1, b: 2, c: 3, d: 4, e: 5 }],
  [{ a: 1, a2: { b: 2, c: 3, d: 4 }, e: 5 }],
  [new Date()],
  [new Error()],
  [Symbol()],
  [() => 'abc'],
  [Promise.resolve(5)],
];

answers['theTypeOf'] = [
  'string',
  'string',
  'undefined',
  'null',
  'nan',
  'number',
  'number',
  'number',
  'boolean',
  'boolean',
  'array',
  'array',
  'object',
  'object',
  'object',
  'date',
  'error',
  'symbol',
  'function',
  'promise',
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
