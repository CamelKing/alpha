import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';

import { ascOrder } from '../src/alpha';

should();

const suiteText: string = 'Searching thru sorted Array.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  ascOrder,
];

const a: number[] = [1, 3, 4, 5, 6, 7, 9, 2, 4, 6, 8, 10];


tests['ascOrder'] = [
];

inputs['ascOrder'] = [
];

answers['ascOrder'] = [
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename, true);
