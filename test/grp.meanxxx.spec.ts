import { FnAny, FnIteratee } from '../src/constants';
import { expect, should } from 'chai';
import { mean, meanBy, meanDeep, meanDeepBy } from '../src/alpha';

import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Perform calculation over an array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  meanDeep,
  meanDeepBy,
  mean,
  meanBy,
];

const fn: FnIteratee = (o: object) => o ? o['age'] : undefined;

const arr1: Array<object> = [{ name: 'quick', age: 70 }, { name: 'brown', age: 50 }, [{ name: 'fox', age: 90 }, { name: 'jumps', age: 30 }], { name: 'over', age: 40 }, { name: 'lazy', age: 80 }, { name: 'dog', age: 60 }];

const arr2: Array<object> = [{ name: 'quick', age: 70 }, { name: 'brown', age: 50 }, [{ name: 'fox', age: 90 }, { name: 'jumps', age: 30 }], { name: 'over', age: 40 }, { name: 'lazy', age: 80 }, { name: 'dog', age: 60 }];


tests['mean'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return mean value for single element array.',
  'return mean value for two elements array.',
  'return mean value for multiple elements array.',
  'return mean value for multiple elements nested array.',
  'return mean value for multiple elements multilevel nested array.',
  'will compare numerical string and return the string (if answer).',
  'will ignore no numerical array elements.',
  'skip all non numeric elements from start.',
  'return undefined if no valid numeric in entire array.',
];

inputs['mean'] = [
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

answers['mean'] = [
  null,
  undefined,
  undefined,
  1,
  2,
  5,
  14 / 3,
  5.8,
  5.5,
  4,
  4.6,
  undefined,
];

tests['meanBy'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return mean value for single element array.',
  'return mean value for two elements array.',
  'return mean value for multiple elements array.',
  'return mean value for multiple elements nested array.',
  'return mean value for multiple elements multilevel nested array.',
  'evaluate using shorthand iteratee.',
  'evaluate using function iteratee.',
  'evaluate using shorthand iteratee in nested arrays',
  'evaluate using function iteratee in nested arrays',
];

inputs['meanBy'] = [
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

answers['meanBy'] = [
  null,
  undefined,
  undefined,
  1,
  2,
  5,
  16 / 3,
  2.8,
  60,
  60,
  60,
  60,
];

tests['meanDeep'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return mean value for single element array.',
  'return mean value for two elements array.',
  'return mean value for multiple elements array.',
  'return mean value for multiple elements nested array.',
  'return mean value for multiple elements multilevel nested array.',
];

inputs['meanDeep'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[2, 3, [5, 7, [9, 0], 4], 6, 8, 1]],
];

answers['meanDeep'] = [
  null,
  undefined,
  undefined,
  1,
  2,
  5,
  5.25,
  4.1875,
];

tests['meanDeepBy'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return mean value for single element array.',
  'return mean value for two elements array.',
  'return mean value for multiple elements array.',
  'return mean value for multiple elements nested array.',
  'return mean value for multiple elements multilevel nested array.',
  'evaluate using shorthand iteratee.',
  'evaluate using function iteratee.',
  'evaluate using shorthand iteratee in nested arrays',
  'evaluate using function iteratee in nested arrays',
];

inputs['meanDeepBy'] = [
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

answers['meanDeepBy'] = [
  null,
  undefined,
  undefined,
  1,
  2,
  5,
  5.25,
  4.1875,
  60,
  60,
  60,
  60,
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
