import { FnPredicate, SearchOption } from '../src/constants';
import { ascOrder, ascOrderBy, sortedIndexBy, sortedIndexOf, sortedInsertAt, sortedLastIndexBy, sortedLastIndexOf, sortedLastInsertAt } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Searching thru sorted Array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  sortedIndexOf,
  sortedIndexBy,
  sortedInsertAt,
  sortedLastIndexOf,
  sortedLastIndexBy,
  sortedLastInsertAt,
];

const a: number[] = [2, 3, 5, 7, 9, 2, 5, 6, 8, 9, 9, 9, 9, 10];
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

const d: number[] = a.concat(11, 11, 11);
d.sort(ascOrder);

const e: string[] = b.concat('11', '11', '11');
e.sort(ascOrder);

const f: Array<object> = c.concat([{ age: 90, name: 'dog' }, { age: 90, name: 'dog' }, { age: 90, name: 'dog' }]);


tests['sortedIndexOf'] = [
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

inputs['sortedIndexOf'] = [
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

answers['sortedIndexOf'] = [
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


tests['sortedIndexBy'] = [
  'return -1 for empty array.',
  'return -1 for null array.',
  'object[] return index of first item matched.',
  'object[] return index of first item matched using shorthand.',
  'object[] return -1 if not found.',
  'object[] using string compare for [number:string] match.',
  'object[] return -1 if searching with incompatible data type.',
  'object[] only return the lowest index for the matched items.',
];

inputs['sortedIndexBy'] = [
  [[], 1],
  [null, 1],
  [c, { age: 40 }, fn],
  [c, { age: 40 }, 'age'],
  [c, { age: 41 }, fn],
  [c, { age: '40' }, fn],
  [c, { age: 'hello world' }, fn],
  [c, { age: 78 }, fn],
];

answers['sortedIndexBy'] = [
  -1,
  -1,
  7,
  7,
  -1,
  7,
  -1,
  8,
];


tests['sortedInsertAt'] = [
  'return 0 for empty array.',
  'return -1 for null array.',
  'number[] return 0 if smaller than all elements.',
  'number[] return proper position for found in mid of array.',
  'number[] return proper position for not found in mid of array.',
  'number[] return proper position for found at end of array.',
  'number[] return proper position for not found at end of array.',
  'string[] return 0 if smaller than all elements.',
  'string[] return proper position for found in mid of array.',
  'string[] return proper position for not found in mid of array.',
  'string[] return proper position for found at end of array.',
  'string[] return proper position for not found at end of array.',
  'object[] return 0 if smaller than all elements.',
  'object[] return proper position for found in mid of array.',
  'object[] return proper position for not found in mid of array.',
  'object[] return proper position for found at end of array.',
  'object[] return proper position for not found at end of array.',
];

inputs['sortedInsertAt'] = [
  [[], 100],
  [null, 100],
  [a, 1],
  [a, 3],
  [a, 4],
  [a, 10],
  [a, 11],
  [b, '00'],
  [b, '03'],
  [b, '04abc'],
  [b, '10'],
  [b, '11'],
  [c, { age: 5 }, fn],
  [c, { age: 40 }, fn],
  [c, { age: 41 }, fn],
  [c, { age: 90 }, fn],
  [c, { age: 91 }, fn],
];

answers['sortedInsertAt'] = [
  0,
  -1,
  0,
  2,
  3,
  13,
  14,
  0,
  2,
  4,
  13,
  14,
  0,
  7,
  8,
  11,
  12,
];


tests['sortedLastIndexOf'] = [
  'return -1 for empty array.',
  'return -1 for null array.',
  'number[] return index of unique item matched.',
  'number[] return last index of non-unique item matched.',
  'number[] using string compare for [number:string] match.',
  'number[] return -1 if searching with incompatible data type.',
  'number[] return -1 if not found.',
  'string[] return index of unique item matched.',
  'string[] return last index of non-unique item matched.',
  'string[] using string compare for [number:string] match.',
  'string[] return -1 if searching with incompatible data type.',
  'string[] return -1 if not found.',
];

inputs['sortedLastIndexOf'] = [
  [[], 1],
  [null, 1],
  [a, 8],
  [a, 9],
  [a, '9'],
  [a, 'hello'],
  [a, 999],
  [b, '08'],
  [b, '09'],
  [b, 9],
  [b, true],
  [b, '08 hello'],
];

answers['sortedLastIndexOf'] = [
  -1,
  -1,
  7,
  12,
  12,
  -1,
  -1,
  7,
  12,
  12,
  -1,
  -1,
];


tests['sortedLastIndexBy'] = [
  'return -1 for empty array.',
  'return -1 for null array.',
  'object[] return index of unqiue item matched.',
  'object[] return last index of non unqiue item matched.',
  'object[] using string compare for [number:string] match.',
  'object[] return -1 if searching with incompatible data type.',
  'object[] return -1 if not found.',
];

inputs['sortedLastIndexBy'] = [
  [[], 1],
  [null, 1],
  [c, { age: 40 }, fn],
  [c, { age: 78 }, fn],
  [c, { age: '78' }, fn],
  [c, { age: 'hello' }, fn],
  [c, { age: 79 }, fn],

];

answers['sortedLastIndexBy'] = [
  -1,
  -1,
  7,
  10,
  10,
  -1,
  -1,
];


tests['sortedLastInsertAt'] = [
  'return 0 for empty array.',
  'return -1 for null array.',
  'number[] return 0 if smaller than all elements.',
  'number[] return proper position for unique found in mid of array.',
  'number[] return proper position for not found in mid of array.',
  'number[] return proper position for non unique found in mid of array.',
  'number[] return proper position for non unqiue found at end of array.',
  'number[] return proper position for not found at end of array.',
  'string[] return 0 if smaller than all elements.',
  'string[] return proper position for unique found in mid of array.',
  'string[] return proper position for not found in mid of array.',
  'string[] return proper position for not unqiue found at end of array.',
  'string[] return proper position for not found at end of array.',
  'object[] return 0 if smaller than all elements.',
  'object[] return proper position for unique found in mid of array.',
  'object[] return proper position for not found in mid of array.',
  'object[] return proper position for non unqiue found at end of array.',
  'object[] return proper position for not found at end of array.',
];

inputs['sortedLastInsertAt'] = [
  [[], 100],
  [null, 100],
  [d, 1],
  [d, 3],
  [d, 4],
  [d, 9],
  [d, 11],
  [d, 12],
  [e, '00'],
  [e, '03'],
  [e, '04abc'],
  [e, '11'],
  [e, '12'],
  [f, { age: 5 }, fn],
  [f, { age: 40 }, fn],
  [f, { age: 41 }, fn],
  [f, { age: 90 }, fn],
  [f, { age: 91 }, fn],
];

answers['sortedLastInsertAt'] = [
  0,
  -1,
  0,
  2,
  3,
  12,
  16,
  17,
  0,
  2,
  4,
  16,
  17,
  0,
  7,
  8,
  14,
  15,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
