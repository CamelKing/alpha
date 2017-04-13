import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { without } from '../src/alpha';

should();

const suiteText: string = 'Return array without the specified items';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  without,
];

const a1: any[] = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', true, false];
const a2: any = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 0];

tests['without'] = [
  'return null for null array',
  'return undefined for undefined array',
  'return [] for empty array',
  'return as is if no values to exclude',
  'without 1 item',
  'without 3 item',
  'without 1 nested array',
  'ignore non existing items in paramrters',
];

inputs['without'] = [
  [null, 1, 2, 3],
  [undefined, 1, 2, 3],
  [[], 1, 2, 3],
  [a1],
  [a1, 1],
  [a1, 1, 'a', true],
  [a2, [1, 2, 3]],
  [a1, 1, 'hello', 123, 'b', NaN, null, false, undefined],
];

answers['without'] = [
  null,
  undefined,
  [],
  a1,
  a1.slice(1),
  [2, 3, 4, 5, 'b', 'c', 'd', 'e', false],
  [[4, 5, 6], [7, 8, 9], 0],
  [2, 3, 4, 5, 'a', 'c', 'd', 'e', true],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
