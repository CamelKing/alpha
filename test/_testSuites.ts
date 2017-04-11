import * as path from 'path';

import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { isNull } from 'util';
import { isTheSame } from '../src/alpha';

should();


/**
 * Perform test on the entire suites (normally contain one
 * suites for one source file)
 *
 * @export
 * @param {FnAny[]} funcs - array of individual test suite
 *                          (one function one suite)
 * @param {object} tests - an object containing test array for every suite
 *                         in the format of tests['funcname']
 * @param {object} inputs - an object containing input array for every suite
 *                          in the format of inputs['funcname']
 * @param {object} answers - an object containing answers array for every suite
 *                           in the format of answers['funcname']
 * @param {(boolean | boolean[])} [onlyFlag=false]
 *                         - allowed control on which suite is 'only'
 *                           in execution of test to provide some level of
 *                           control during development stage, so test can be
 *                           focus on one/a few sutie(s) rather than entire
 *                           project source code.
 *                         - omit, or pass it false would mean no control
 *                         - pass in an array of booleans [true, false] would
 *                           mean to only execute certain test suite (func) in
 *                           according to its relative position in the funcs
 *                           array.
 *                           [true] = only run test for first function in funcs
 *                           [false, true] = only run for second function
 *                           [true, true] = only run for first 2
 *                           If there are more functions than the number of
 *                           booleans passed in, they are defaulted to
 *                           false = no control.
 */

export function _testSuites(funcs: FnAny[],
  tests: object,
  inputs: object,
  answers: object,
  suiteText: string,
  filename: string,
  onlyFlag: boolean | boolean[] = false): void {

  suiteText = (suiteText || 'Combined Testing') + ' - ';
  filename = path.basename(filename || __filename);

  // use this to create an array of undefined values
  // rather than empty slot (from Array(N).)
  // this would allow the subsequent .map() function to work.
  let only: boolean[] = Array.apply(null, { length: funcs.length });

  if (typeof onlyFlag === 'boolean') {
    only = only.map((v: boolean) => onlyFlag);
  } else {
    only = only.map((value: boolean, index: number) =>
      (index < onlyFlag.length) ? onlyFlag[index] : false);
  }

  describe(suiteText + filename + '\n', () => {

    funcs.forEach((func: FnAny, fIndex: number) => {

      if (!only[fIndex]) {

        describe(func.name + '() should',
          () => testFunction(func, tests[func.name],
            inputs[func.name], answers[func.name])
        );

      } else {

        describe.only('ONLY ' + func.name + '() should',
          () => testFunction(func, tests[func.name],
            inputs[func.name], answers[func.name])
        );

      }

    });

  });

}

/**
 * Perform mocha test suite on a particular function.
 *
 * @param {FnAny} func - function to be tested
 * @param {string[]} tests - array containing description for the
 *                           series of tests to be conducted. This isNaN
 *                           used in the describe(test, function) call.
 * @param {any[]} inputs - array containing parameters to be fed to the
 *                         func for the test. Inputs and tests should have
 *                         the same number of rows else this will throw.
 * @param {any[]} answers - array of answers to be tested against the output
 *                          of func with input from inputs.
 */

function testFunction(func: FnAny,
  tests: string[],
  inputs: any[],
  answers: any[]): void {

  tests.forEach((test: string, index: number) => {

    it(test, () => {

      const answer: any = answers[index];

      if (answer === null || answer === undefined) {
        isTheSame(func.apply(this, inputs[index]), answer).should.be.true;
      } else if (Number.isNaN(answer)) {
        func.apply(this, inputs[index]).should.be.Nan;
      } else {
        // func.apply(this, inputs[index]).should.deep.equal(answers[index]);
        isTheSame(func.apply(this, inputs[index]), answers[index]).should.be.true;
      }

    });

  });

}
