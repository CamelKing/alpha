import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';

import { fromPairs } from '../src/alpha';

should();

const suiteText: string = 'Construct object from key:value pairs.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  fromPairs,
];

tests['fromPairs'] = [
  'return {} for empty array',
  'return {} for non-array - number',
  'return {} for non-array - string',
  'return {} for non-array - boolean false',
  'return {} for empty array',
  'return {} for array with empty key:value pair.',
  'return {} for array with 2 empty key:value pairs.',
  'return {key: undefined} for single element array',
  'return {key: value} for [key:symbol] pair.',
  'return {key: value} for [key:NaN] pair.',
  'return {key: value} for [key:Object] pair.',
  'return {key: value} for [key:Error] pair.',
  'return {key: value} for [key:Array] pair.',
  'return {key: value} for [key:nested Array] pair.',
  'return {key: value} for [key:Date] pair.',
  'return {key: value} for [key:Boolean true] pair.',
  'return {key: value} for [key:Boolean false] pair.',
  'return {key: value} for [key:+ve integer] pair.',
  'return {key: value} for [key:-ve integer] pair.',
  'return {key: value} for [key:+ve float] pair.',
  'return {key: value} for [key:-ve float] pair.',
  'return {key: value} for [key:Zero] pair.',
  'return {key: value} for [key:+ve numeric string] pair.',
  'return {key: value} for [key:-ve numeric string] pair.',
  'return {key: value} for [key:+ve float numeric string] pair.',
  'return {key: value} for [key:-ve float numeric string] pair.',
  'return {key: value} for [key:zero numeric string] pair.',
  'return {key: value} for [key:text string] pair.',
  'return {key: [values]} where values is the 2nd arg onwards.',
  'return {key: [values...]} with null in between.',
  'return {key: [values...]} with undefined in between.',
  'return object with with 3 key:value pairs.',
];

const s1: Symbol = Symbol();
const o1: object = { a: 1, b: 'hello' };
const e1: Error = Error('From Paris');
const a1: any[] = [1, 'hello', true];
const a2: any[] = [1, a1, 'hello'];
const d1: Date = new Date();

inputs['fromPairs'] = [
  [[]],
  [123],
  ['hello world'],
  [false],
  [[]],
  [[[]]],
  [[[], []]],
  [[['value']]],
  [[['key', s1]]],
  [[['key', NaN]]],
  [[['key', o1]]],
  [[['key', e1]]],
  [[['key', a1]]],
  [[['key', a2]]],
  [[['key', d1]]],
  [[['key', true]]],
  [[['key', false]]],
  [[['key', +123]]],
  [[['key', -123]]],
  [[['key', +123.456]]],
  [[['key', -123.456]]],
  [[['key', 0]]],
  [[['key', '+123']]],
  [[['key', '-123']]],
  [[['key', '+123.456']]],
  [[['key', '-123.456']]],
  [[['key', '0']]],
  [[['key', 'hello world']]],
  [[['key', 1, true, 'hello world']]],
  [[['key', 1, true, null, 'hello world']]],
  [[['key', 1, true, undefined, 'hello world']]],
  [[['key1', 1], ['key2', true], ['key3', 'hello']]],
];

answers['fromPairs'] = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { value: 'undefined' },
  { key: s1 },
  { key: NaN },
  { key: o1 },
  { key: e1 },
  { key: a1 },
  { key: a2 },
  { key: d1 },
  { key: true },
  { key: false },
  { key: +123 },
  { key: -123 },
  { key: +123.456 },
  { key: -123.456 },
  { key: 0 },
  { key: +123 },
  { key: -123 },
  { key: +123.456 },
  { key: -123.456 },
  { key: 0 },
  { key: 'hello world' },
  { key: [1, true, 'hello world'] },
  { key: [1, true, null, 'hello world'] },
  { key: [1, true, undefined, 'hello world'] },
  { key1: 1, key2: true, key3: 'hello' },
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
