import { FnAny, _testSuites } from './_testSuites';
import { ascOrder, sortedIndex } from '../src/alpha';
import { expect, should } from 'chai';

import { FnPredicate } from '../src/constants';
import { ascOrderBy } from '../src/public/ascOrderBy';
import { sortedIndexBy } from '../src/public/sortedIndexBy';

should();

const suiteText: string = 'Searching thru sorted Array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  sortedIndex,
  sortedIndexBy,
];

const a: number[] = [1, 3, 5, 7, 9, 2, 4, 6, 8, 9, 9, 9, 9, 10];
a.sort(ascOrder);

const b: string[] = ['01', '03', '05', '07', '09', '02', '04', '06', '08', '09', '09', '09', '09', '10'];
b.sort(ascOrder);

const c: Array<object> = [
  { age: 10, name: 'A' },
  { age: 20, name: 'quick' },
  { age: 28, name: 'brown' },
  { age: 30, name: 'fox' },
  { age: 15, name: 'jumps' },
  { age: 40, name: 'over' },
  { age: 78, name: 'the' },
  { age: 78, name: 'lazy' },
  { age: 90, name: 'dog' },
  { age: 35, name: 'hahaha' },
  { age: 78, name: 'so' },
  { age: 12, name: 'funny' },
];

const fn: FnPredicate = (o: object) => o['age'];

c.sort(ascOrderBy(fn));

tests['sortedIndex'] = [
  'return -1 for empty array.',
  'return -1 for null array.',
  'number[] return index of first item matched.',
  'number[] return -1 if not found.',
  'number[] using string compare for [number:string] match.',
  'number[] return -1 if searching with incompatible data type.',
  'number[] only return the lowest index for the matched items.',
  'string[] return index of first item matched.',
  'string[] return -1 if not found.',
  'string[] using string compare for [number:string] match.',
  'string[] return -1 if searching with incompatible data type.',
  'string[] only return the lowest index for the matched items.',
];

tests['sortedIndexBy'] = [
  'return -1 for empty array.',
  'return -1 for null array.',
  'object[] return index of first item matched',
  'object[] return -1 if not found.',
  'object[] using string compare for [number:string] match.',
  'object[] return -1 if searching with incompatible data type.',
  'object[] only return the lowest index for the matched items.',
];

inputs['sortedIndex'] = [
  [[], 1],
  [null, 1],
  [a, 8],
  [a, 11],
  [a, '10'],
  [a, 'abc'],
  [a, 9],
  [b, '08'],
  [b, '11'],
  [b, 10],
  [b, 123],
  [b, '09'],
];

inputs['sortedIndexBy'] = [
  [[], 1],
  [null, 1],
  [c, 40, fn],
  [c, 41, fn],
  [c, '40', fn],
  [c, 'hello world', fn],
  [c, 78, fn],
];

answers['sortedIndex'] = [
  -1,
  -1,
  7,
  -1,
  13,
  -1,
  8,
  7,
  -1,
  13,
  -1,
  8,
];

answers['sortedIndexBy'] = [
  -1,
  -1,
  7,
  -1,
  7,
  -1,
  8,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
