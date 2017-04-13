import { expect, should } from 'chai';
import { isTheSame, randomInteger, randomText, toObject } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Deep Comparison of two objects';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  isTheSame,
];

tests['isTheSame'] = [
  'Identify the different string vs string, different length.',
  'Identify the different string vs string, same length.',
  'Identify the different string vs number.',
  'Identify the different string vs boolean.',
  'Identify the different number vs number.',
  'Identify the different number vs number string.',
  'Identify the different number vs text string.',
  'Identify the different number vs boolean.',
  'Identify the different boolean vs boolean.',
  'Identify the different boolean vs string.',
  'Identify the different boolean vs number.',
  'Identify the different date vs date.',
  'Identify the different date vs date string.',
  'Identify the different date vs number.',
  'Identify the different Symbol vs Symbol.',
  'Identify the different Undefined vs Null.',
  'Identify the different Null vs Undefined.',
  'Identify the different functions - return number vs string.',
  'Identify the different functions - return number vs number.',
  'Identify the different functions - return string vs string.',
  'Identify the different objects vs object, different keys.',
  'Identify the different objects vs object, first 1 has extra keys.',
  'Identify the different objects vs object, second 1 has extra keys.',
  'Identify the different objects vs string.',
  'Identify the different objects vs number.',
  'Identify the different objects vs function returning number.',
  'Identify the different objects vs function returning object w/ diff key.',
  'Identify the different objects vs function returning same object.',
  'Identify the different Error object vs Error object.',
  'Identify the different Error object vs object.',
  'Identify the different Error object vs Object.assign().',
  'Identify the different Array vs array.',
  'Identify the different Nested array vs nested array.',
  'Identify the different Promise vs promise.',
  'Identify the different Promises resolving to same value.',

  'Identify the same empty strings.',
  'Identify the same strings.',
  'Identify the same +ve numbers.',
  'Identify the same -ve numbers.',
  'Identify the different NaN vs NaN.',
  'Identify the same boolean True.',
  'Identify the same boolean False.',
  'Identify the same date objects.',
  'Identify the same date objects getTime().',
  'Identify the same empty arrays.',
  'Identify the same arrays.',
  'Identify the same nested arrays.',
  'Identify the same empty objects.',
  'Identify the same objects.',
  'Identify the same nested objects.',
  'Identify the same functions returning same value.',
  'Identify the same Undefined vs Undefined.',
  'Identify the same Null vs Null.',
  'Identify the same Error object vs toObject().',
  'Identify the same +0 vs +0.',
  'Identify the same +0 vs -0.',
  'Identify the same -0 vs -0.',
  'Identify the same -0 vs +0.',
];

const text1: string = randomText(50);
const date1: Date = new Date();
const num1: number = randomInteger(10, 1000);
const err1: any = new Error('This is Error');
const err2: any = {};
Object.assign(err2, err1);
const obj2: object = { b: num1 };

inputs['isTheSame'] = [
  [text1, randomText(20)],
  [text1, randomText(50)],
  ['123', 123],
  ['true', true],
  [123, 124],
  [123, '123'],
  [randomInteger(10, 100), randomText(20)],
  [0, false],
  [true, false],
  [true, 'true'],
  [false, 0],
  [date1, new Date(date1.getTime() + 1000)],
  [date1, date1.toString()],
  [date1, date1.getTime()],
  [Symbol(), Symbol()],
  [undefined, null],
  [null, undefined],
  [() => (4 + 5), () => ('4' + '5')],
  [() => (4 + 5), () => (4 + 5 + 1)],
  [() => ('4' + '5' + '7'), () => ('4' + '5' + '6')],
  [{ a: 123, b: 'hello', e: {} }, { a: 123, b: 'hello', f: {} }],
  [{ a: 123, b: 'hello', e: {} }, { a: 123, b: 'hello' }],
  [{ a: 123, b: 'hello' }, { a: 123, b: 'hello', d: {} }],
  [{ a: 'hello world' }, 'hello world'],
  [{ b: '123' }, 123],
  [{ b: num1 }, () => num1],
  [{ b: num1 }, () => ({ a: num1 })],
  [obj2, () => obj2],
  [err1, new Error('THIS IS ERROR')],
  [err1, { a: 1, b: 'hello', c: true }],
  [err1, err2],
  [[123, 'hello', true, [123, 'hello', true]], [123, 'hello', {}]],
  [[123, ['hello', [true]]], [123, ['hello', [false]]]],
  [Promise.resolve('hello'), Promise.resolve('hello world')],
  [Promise.resolve('hello'), Promise.resolve('hello')],

  ['', ''],
  [text1, text1],
  [1234, 1234],
  [-1234, -1234],
  [NaN, NaN],
  [true, true],
  [false, false],
  [date1, date1],
  [date1.getTime(), date1.getTime()],
  [[], []],
  [[1, 2, 3], [1, 2, 3]],
  [[1, [2, [3]]], [1, [2, [3]]]],
  [{}, {}],
  [obj2, obj2],
  [{ a: 1, b: { B: 'hello' } }, { a: 1, b: { B: 'hello' } }],
  [() => (4 + 5), () => (9)],
  [undefined, undefined],
  [null, null],
  [err1, toObject(err1)],
  [+0, +0],
  [+0, -0],
  [-0, -0],
  [-0, +0],
];

answers['isTheSame'] = [
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false,
  true, true, true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true, true, true,
  true, true, true
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
