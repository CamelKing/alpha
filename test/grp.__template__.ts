import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';
import { pad } from '../src/alpha';

should();

const suiteText: string = 'XXXX() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  pad,
];

tests['pad'] = [
];

inputs['pad'] = [
];

answers['pad'] = [
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename, true);
