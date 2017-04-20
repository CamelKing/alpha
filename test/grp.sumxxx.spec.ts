import { FnAny, FnIteratee } from '../src/constants';
import { expect, should } from 'chai';
import { sum, sumBy, sumDeep, sumDeepBy } from '../src/alpha';

import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Perform calculation over an array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  sumDeep,
  sumDeepBy,
  sum,
  sumBy,
];

const fn: FnIteratee = (o: object) => o ? o['age'] : undefined;

const arr1: Array<object> = [{ name: 'quick', age: 70 }, { name: 'brown', age: 50 }, [{ name: 'fox', age: 90 }, { name: 'jumps', age: 30 }], { name: 'over', age: 40 }, { name: 'lazy', age: 80 }, { name: 'dog', age: 60 }];

const arr2: Array<object> = [{ name: 'quick', age: 70 }, { name: 'brown', age: 50 }, [{ name: 'fox', age: 90 }, { name: 'jumps', age: 30 }], { name: 'over', age: 40 }, { name: 'lazy', age: 80 }, { name: 'dog', age: 60 }];


tests['sum'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return sum value for single element array.',
  'return sum value for two elements array.',
  'return sum value for multiple elements array.',
  'return sum value for multiple elements nested array.',
  'return sum value for multiple elements multilevel nested array.',
  'will compare numerical string and return the string (if answer).',
  'will ignore no numerical array elements.',
  'skip all non numeric elements from start.',
  'return undefined if no valid numeric in entire array.',
];

inputs['sum'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 1, 5, [3, 9]]],
  [[2, 3, [5, 7, [9, 1], 4], 6, 8, 10]],
  [['1', 2, 3, 4, 5, 6, 7, 8, '9', 10]],
  [[1, true, 3, false, 5, 'hello', 7, 8, {}, 0]],
  [['KL', true, 3, false, 5, 'hello', 7, 8, {}, 0]],
  [['KL', true, '~3', false, '5KK', 'hello', null, undefined, {}, '===']],
];

answers['sum'] = [
  null,
  undefined,
  undefined,
  1,
  4,
  25,
  14,
  29,
  55,
  24,
  23,
  undefined,
];

tests['sumBy'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return sum value for single element array.',
  'return sum value for two elements array.',
  'return sum value for multiple elements array.',
  'return sum value for multiple elements nested array.',
  'return sum value for multiple elements multilevel nested array.',
  'evaluate using shorthand iteratee.',
  'evaluate using function iteratee.',
  'evaluate using shorthand iteratee in nested arrays',
  'evaluate using function iteratee in nested arrays',
];

inputs['sumBy'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[1, 3, [5, 7, [9, 2], 8], 6, 4, 0]],
  [arr1, 'age'],
  [arr1, fn],
  [arr2, 'age'],
  [arr2, fn],
];

answers['sumBy'] = [
  null,
  undefined,
  undefined,
  1,
  4,
  25,
  16,
  14,
  300,
  300,
  300,
  300,
];

tests['sumDeep'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return sum value for single element array.',
  'return sum value for two elements array.',
  'return sum value for multiple elements array.',
  'return sum value for multiple elements nested array.',
  'return sum value for multiple elements multilevel nested array.',
];

inputs['sumDeep'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[2, 3, [5, 7, [9, 0], 4], 6, 8, 1]],
];

answers['sumDeep'] = [
  null,
  undefined,
  undefined,
  1,
  4,
  25,
  26,
  45,
];

tests['sumDeepBy'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return sum value for single element array.',
  'return sum value for two elements array.',
  'return sum value for multiple elements array.',
  'return sum value for multiple elements nested array.',
  'return sum value for multiple elements multilevel nested array.',
  'evaluate using shorthand iteratee.',
  'evaluate using function iteratee.',
  'evaluate using shorthand iteratee in nested arrays',
  'evaluate using function iteratee in nested arrays',
];

inputs['sumDeepBy'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[2, 3, [5, 7, [9, 0], 4], 6, 8, 1]],
  [arr1, 'age'],
  [arr1, fn],
  [arr2, 'age'],
  [arr2, fn],
];

answers['sumDeepBy'] = [
  null,
  undefined,
  undefined,
  1,
  4,
  25,
  26,
  45,
  420,
  420,
  420,
  420,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename, true);
