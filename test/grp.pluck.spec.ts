import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';

import { pluck } from '../src/alpha';

should();

const suiteText: string = 'Pluck an element from within an array';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  pluck,
];

tests['pluck'] = [
  'return null for null a array',
  'return undefined for null a array',
  'return as is for non array',
  'return array as is if index > length',
  'default is plucking the first item',
  'pluck first item from the array',
  'pluck items from middle of array',
  'pluck last items at the end of array',
  'pluck second last items using -2 index.',
];

const a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

inputs['pluck'] = [
  [null, 1],
  [undefined, 1],
  ['not an array', 1],
  [a.slice(0), 20],
  [a.slice(0)],
  [a.slice(0), 0],
  [a.slice(0), 4],
  [a.slice(0), a.length - 1],
  [a.slice(0), -2],

];

answers['pluck'] = [
  null,
  undefined,
  'not an array',
  a,
  a.slice(1),
  a.slice(1),
  a.slice(0, 4).concat(a.slice(5)),
  a.slice(0, a.length - 1),
  a.slice(0, a.length - 2).concat(a.slice(a.length - 1)),
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
