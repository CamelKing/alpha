import { FnComparator, FnPredicate, intersection, intersectionBy, intersectionWith } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';

should();

const suiteText: string = 'Compute the intersection of arrays';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  intersection,
  intersectionBy,
  intersectionWith,
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

const fnToString: FnPredicate = (x: any) => '' + x;
const fnToNumber: FnPredicate = (x: any) => +x;

const fnCompare: FnComparator = (a: any, b: any) => a > b;


tests['intersection'] = [
  'return [] if zero paramter.',
  'return [] if any paramter is empty array.',
  'return [] if only 1 paramter.',
  'return [] if one of the parameters is not array.',
  'return [] if both of the (2) parameters is not array.',
  'return the correct intersection of two number arrays.',
  'return the correct intersection of three number arrays.',
  'return the correct intersection of four number arrays.',
  'would not convert strings to numbers, vice verse.',
  'return the correct intersection of two string arrays.',
  'return the correct intersection of three string arrays.',
  'return the correct intersection of four string arrays.',
  'perform deep comparison on objects.',
  'identify objects by key/values, not reference.',
  'can handle arrays of array.',
  'remove redundant array members in the result.',
];

tests['intersectionBy'] = [
  'return [] if zero paramter.',
  'return [] if any paramter is empty array.',
  'return [] if only 1 paramter.',
  'return [] if one of the parameters is not array.',
  'return [] if both of the (2) parameters is not array.',
  'Omit predicate at end = intersection()',
  'make use of toString predicate to compute intersection.',
  'make use of toNumber predicate to compute intersection.',
  'reversing the order of params does matter.',
];

tests['intersectionWith'] = [
  'return [] if zero paramter.',
  'return [] if any paramter is empty array.',
  'return [] if only 1 paramter.',
  'return [] if one of the parameters is not array.',
  'return [] if both of the (2) parameters is not array.',
  'Omit comparator at end = intersection()',
  'make use of comparator to computer intersection.',
  'reversing the order of params could matter.',
];

inputs['intersection'] = [
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

inputs['intersectionBy'] = [
  [],
  [a1, a2, []],
  [[1, 2, 3]],
  [1, [2]],
  [1, 2],
  [a1, a2, a3, a4],
  [s1, a1, fnToString],
  [a1, s1, fnToNumber],
  [s1, a1, fnToNumber],
];

inputs['intersectionWith'] = [
  [],
  [a1, a2, []],
  [[1, 2, 3]],
  [1, [2]],
  [1, 2],
  [a1, a2, a3, a4],
  [a2, a1, fnCompare],
  [a1, a2, fnCompare],
];

answers['intersection'] = [
  [],
  [],
  [],
  [],
  [],
  [2, 4, 6, 8, 10],
  [4, 6, 10],
  [4, 6],
  [],
  ['2', '4', '6', '8', '10'],
  ['4', '6', '10'],
  ['4', '6'],
  [{ a: '1', b: 2, c: 3 }],
  [{ a: 1, b: 2, c: 3 }, { a: '1', b: 2, c: 3 }],
  [a2],
  [2, 4, 6, 8, 10],
];

answers['intersectionBy'] = [
  [],
  [],
  [],
  [],
  [],
  [4, 6],
  s1,
  a1,
  s1,
];

answers['intersectionWith'] = [
  [],
  [],
  [],
  [],
  [],
  [4, 6],
  a2,
  [3, 4, 5, 6, 7, 8, 9, 10],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
