import { expect, should } from 'chai';
import { fromPairs, toPairs } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';

should();

const suiteText: string = 'Construct object from key:value pairs.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  fromPairs,
  toPairs,
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

tests['toPairs'] = [
  'return [] if null object.',
  'return [] if undefined object.',
  'return [] if empty object.',
  'return [] if date object.',
  'return [] if string.',
  'return [] if number.',
  'return [] if boolean.',
  'return [] if array.',
  'return [] if function.',
  'return [] if promise.',
  'extract simple pair from single property object.',
  'extract simple pair from double properties object.',
  'extract simple error object.',
  'extract a nested object.',
  'extract a nested object with an error object within.',
];

const e1: Error = Error('From Paris');
const a1: any[] = [1, 'hello', true];
const a2: any[] = [1, a1, 'hello'];
const d1: Date = new Date();
const s1: Symbol = Symbol();
const o1: object = { a: 1, b: 'hello' };
const o2: object = { c: true };
const o3: object = { d: 45.67, e: { f: true, h: 'world' } };
const o4: object = { d: 45.67, e: { f: e1 } };

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

inputs['toPairs'] = [
  [null],
  [undefined],
  [{}],
  [d1],
  ['hello'],
  [123],
  [true],
  [['a', '123']],
  [() => ['a', '123']],
  [Promise.resolve(['b', '456'])],
  [o2],
  [o1],
  [e1],
  [o3],
  [o4],
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

answers['toPairs'] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [['c', true]],
  [['a', 1], ['b', 'hello']],
  [['stack', e1.stack], ['message', 'From Paris']],
  [['d', 45.67], ['e', [['f', true], ['h', 'world']]]],
  [['d', 45.67], ['e', [['f', [['stack', e1.stack], ['message', 'From Paris']]]]]],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
