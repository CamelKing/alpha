import { FnComparator, FnIteratee } from '../src/constants';
import { expect, should } from 'chai';
import { union, unionBy, unionWith } from '../src/alpha';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { isTheSame } from '../src/public/isTheSame';

should();

const suiteText: string = 'Compute the union of arrays';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  union,
  unionBy,
  unionWith,
];

const a1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2: number[] = [11, 2, 31, 4, 15, 6, 17, 8, 19, 10];
const a3: number[] = [1, 22, 3, 4, 5, 6, 7, 28, 9, 10];
const a4: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 310];
const a5: number[] = [2, 2, 4, 4, 6, 6, 8, 8, 10, 10];

const s1: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const s2: string[] = ['11', '2', '31', '4', '15', '6', '17', '8', '19', '10'];
const s3: string[] = ['1', '22', '3', '4', '5', '6', '7', '28', '9', '10'];
const s4: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '310'];

const o1: object = { a: 1, b: 2, c: 3 };
const o2: object = { a: '1', b: 2, c: 3 };
const o3: object = { a: '1', b: 2, c: 3 };

const fnToString: FnIteratee = (x: any) => '' + x;
const fnToNumber: FnIteratee = (x: any) => +x;
const fnCompare: FnComparator = (a: any, b: any) => a === b;

tests['union'] = [
  'return [] if zero paramter.',
  'union by ignoring any empty array parameters.',
  'return the only array if only 1 paramter.',
  'union by ignoring any non array parameters.',
  'return [] if all the parameters is not array.',
  'return the correct union of two number arrays.',
  'return the correct union of three number arrays.',
  'return the correct union of four number arrays.',
  'would not convert strings to numbers, vice verse.',
  'return the correct union of two string arrays.',
  'return the correct union of three string arrays.',
  'return the correct intersection of four string arrays.',
  'perform deep comparison on objects.',
  'identify objects by key/values, not reference.',
  'can handle arrays of array.',
  'remove redundant array members in the result.',
];

tests['unionBy'] = [
  'return [] if zero paramter.',
  'union by ignoring any empty array parameters.',
  'return the only array if only 1 paramter.',
  'union by ignoring any non array parameters.',
  'return [] if all the parameters is not array.',
  'Omit iteratee at end = union()',
  'make use of toString iteratee to compute union.',
  'make use of toNumber iteratee to compute union.',
  'reversing the order of params does matter.',
];

tests['unionWith'] = [
  'return [] if zero paramter.',
  'union by ignoring any empty array parameters.',
  'return the only array if only 1 paramter.',
  'union by ignoring any non array parameters.',
  'return [] if all the parameters is not array.',
  'Omit comparator at end = union()',
  'make use of comparator to computer union.',
  'reversing the order of params could matter.',
];

inputs['union'] = [
  [],
  [a1, a2, []],
  [[1, 2, 3]],
  [1, [2]],
  [1, 2],
  [a1, a2],
  [a1, a2, a3],
  [a1, a2, a3, a4],
  [s1, a2],
  [s1, s2],
  [s1, s2, s3],
  [s1, s2, s3, s4],
  [[o1, o2], [o3]],
  [[o1, o2], [o1, o3]],
  [[a1, a2, a3], [a2, a3], [s1, a2]],
  [a5, a1],
];

inputs['unionBy'] = [
  [],
  [a1, a2, [], fnToNumber],
  [[1, 2, 3], fnToNumber],
  [1, [2]],
  [1, 2],
  [a1, a2, a3, a4],
  [s1, a1, fnToString],
  [a1, s1, fnToNumber],
  [s1, a1, fnToNumber],
];

inputs['unionWith'] = [
  [],
  [a1, a2, [], isTheSame],
  [[1, 2, 3], isTheSame],
  [1, [2]],
  [1, 2],
  [a1, a2, a3, a4],
  [a2, a1, fnCompare],
  [a1, a2, fnCompare],
];

answers['union'] = [
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19],
  [1, 2, 3],
  [2],
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19, 22, 28],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19, 22, 28, 310],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 11, 2, 31, 4, 15, 6, 17, 8, 19, 10],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '31', '15', '17', '19'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '31', '15', '17', '19', '22', '28'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '31', '15', '17', '19', '22', '28', '310'],
  [o1, o2],
  [o1, o2],
  [a1, a2, a3, s1],
  [2, 4, 6, 8, 10, 1, 3, 5, 7, 9],

];

answers['unionBy'] = [
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19],
  [1, 2, 3],
  [2],
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19, 22, 28, 310],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
];

answers['unionWith'] = [
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19],
  [1, 2, 3],
  [2],
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19, 22, 28, 310],
  [11, 2, 31, 4, 15, 6, 17, 8, 19, 10, 1, 3, 5, 7, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 15, 17, 19],

];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
