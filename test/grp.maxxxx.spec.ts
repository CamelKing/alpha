import { FnAny, FnIteratee } from '../src/constants';
import { expect, should } from 'chai';
import { max, maxBy, maxDeep, maxDeepBy } from '../src/alpha';

import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Perform calculation over an array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  maxDeep,
  maxDeepBy,
  max,
  maxBy,
];

const fn: FnIteratee = (o: object) => o ? o['age'] : undefined;

const arr1: Array<object> = [{ name: 'quick', age: 70 }, { name: 'brown', age: 50 }, [{ name: 'fox', age: 90 }, { name: 'jumps', age: 30 }], { name: 'over', age: 40 }, { name: 'lazy', age: 80 }, { name: 'dog', age: 60 }];

const arr2: Array<object> = [{ name: 'quick', age: 70 }, { name: 'brown', age: 50 }, [{ name: 'fox', age: 90 }, { name: 'jumps', age: 30 }], { name: 'over', age: 40 }, { name: 'lazy', age: 80 }, { name: 'dog', age: 60 }];


tests['max'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return max value for single element array.',
  'return max value for two elements array.',
  'return max value for multiple elements array.',
  'return max value for multiple elements nested array.',
  'return max value for multiple elements multilevel nested array.',
  'will compare numerical string and return the string (if answer).',
  'will ignore no numerical array elements.',
  'skip all non numeric elements from start.',
  'return undefined if no valid numeric in entire array.',
];

inputs['max'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[1, 3, [5, 7, [9, 2], 4], 6, 8, 0]],
  [[1, 2, 3, 4, 5, 6, 7, 8, '9', 0]],
  [[1, true, 3, false, 5, 'hello', 7, 8, {}, 0]],
  [['KL', true, 3, false, 5, 'hello', 7, 8, {}, 0]],
  [['KL', true, '~3', false, '5KK', 'hello', null, undefined, {}, '===']],
];

answers['max'] = [
  null,
  undefined,
  undefined,
  1,
  3,
  9,
  8,
  8,
  '9',
  8,
  8,
  undefined,
];

tests['maxBy'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return max value for single element array.',
  'return max value for two elements array.',
  'return max value for multiple elements array.',
  'return max value for multiple elements nested array.',
  'return max value for multiple elements multilevel nested array.',
  'evaluate using shorthand iteratee.',
  'evaluate using function iteratee.',
  'evaluate using shorthand iteratee in nested arrays',
  'evaluate using function iteratee in nested arrays',
];

inputs['maxBy'] = [
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


answers['maxBy'] = [
  null,
  undefined,
  undefined,
  1,
  3,
  9,
  8,
  6,
  { name: 'lazy', age: 80 },
  { name: 'lazy', age: 80 },
  { name: 'lazy', age: 80 },
  { name: 'lazy', age: 80 },
];

tests['maxDeep'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return max value for single element array.',
  'return max value for two elements array.',
  'return max value for multiple elements array.',
  'return max value for multiple elements nested array.',
  'return max value for multiple elements multilevel nested array.',
];

inputs['maxDeep'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[1, 3, [5, 7, [9, 2], 4], 6, 8, 0]],
];

answers['maxDeep'] = [
  null,
  undefined,
  undefined,
  1,
  3,
  9,
  9,
  9,
];

tests['maxDeepBy'] = [
  'return undefined for null array.',
  'return undefined for null array.',
  'return undefined for empty array.',
  'return max value for single element array.',
  'return max value for two elements array.',
  'return max value for multiple elements array.',
  'return max value for multiple elements nested array.',
  'return max value for multiple elements multilevel nested array.',
  'evaluate using shorthand iteratee.',
  'evaluate using function iteratee.',
  'evaluate using shorthand iteratee in nested arrays',
  'evaluate using function iteratee in nested arrays',
];

inputs['maxDeepBy'] = [
  [null],
  [undefined],
  [[]],
  [[1]],
  [[1, 3]],
  [[1, 3, 5, 7, 9]],
  [[8, 3, 5, [1, 9]]],
  [[1, 3, [5, 7, [9, 2], 4], 6, 8, 0]],
  [arr1, 'age'],
  [arr1, fn],
  [arr2, 'age'],
  [arr2, fn],
];

answers['maxDeepBy'] = [
  null,
  undefined,
  undefined,
  1,
  3,
  9,
  9,
  9,
  { name: 'fox', age: 90 },
  { name: 'fox', age: 90 },
  { name: 'fox', age: 90 },
  { name: 'fox', age: 90 },
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);