import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';
import { round, roundDown, roundUp } from '../src/alpha';

should();

const suiteText: string = 'XXXX() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  // round,
  // roundUp,
  // roundDown,
];

tests['pad'] = [
];

tests['padLeft'] = tests['pad'];
tests['padRight'] = tests['pad'];

inputs['pad'] = [
];
inputs['padLeft'] = inputs['pad'];
inputs['padRight'] = inputs['pad'];

answers['pad'] = [
];

answers['padLeft'] = [
];

answers['padRight'] = [
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
