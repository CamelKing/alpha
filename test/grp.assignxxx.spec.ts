import { assign, assignIn, clone, isTheSame } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Assign property from object to another';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  assign,
  assignIn,
];

class Foo {
  private t: string;
  constructor() {
    this.t = 'I am target';
    return this;
  }

  public get text(): string {
    return this.t;
  }

  public set text(txt: string) {
    this.t = txt;
  }


}

class Bar0 {
  private g: number = 987.654;
  private h: string = 'Quick';
  private i: boolean = true;
  constructor() {
    return this;
  }
}

class Bar {
  public a: number = 1;
  private b: string = 'hello';
  public c: boolean = true;
  constructor() {
    return this;
  }

  public get text(): string {
    return this.b;
  }

  public set text(v: string) {
    this.b = v;
  }

  public ab(): string { return '1hello'; }

}

Bar.prototype['x'] = 1;
Bar.prototype['y'] = 'Brown';
Bar.prototype['z'] = false;

const fn: FnAny = () => ({ z: 'function' });
const pr: Promise<object> = Promise.resolve({ z: 'promise' });

const target1: Foo = new Foo;
const target2: Error = new Error('Target Error');
const source1: Bar = new Bar;

const source2: object = { a: 2, t: 'No more target!' };
const source3: object = { d: 2, e: 'world', f: false };
const source4: Error = new Error('Second Error');

const answer0: object = { a: 1, b: 'hello', c: true };

const answer1: object = Object(NaN);
answer1['a'] = 1;
answer1['b'] = 'hello';
answer1['c'] = true;

const answer2: object = Object(pr);
answer2['a'] = 1;
answer2['b'] = 'hello';
answer2['c'] = true;

const answer3: any = fn;
answer3['a'] = 1;
answer3['b'] = 'hello';
answer3['c'] = true;

const answer4: object = Object(123);
answer4['a'] = 1;
answer4['b'] = 'hello';
answer4['c'] = true;

const answer5: object = { t: 'I am target' };
const answer6: object = { t: 'I am target', a: 1, b: 'hello', c: true };
const answer7: object = { t: 'No more target!', a: 2 };
const answer8: object = { t: 'I am target', a: 1, b: 'hello', c: true, d: 2, e: 'world', f: false };
const answer9: object = { t: 'No more target!', a: 2, b: 'hello', c: true };
const answer10: Foo = clone(target1) as Foo;
answer10['message'] = source4.message;
answer10['stack'] = source4.stack;
const answer11: Error = clone(target2) as Error;
answer11['a'] = 2;
answer11['t'] = 'No more target!';
const answer21: object = { a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false };

const answer22: object = Object(NaN);
answer22['a'] = 1;
answer22['b'] = 'hello';
answer22['c'] = true;
answer22['x'] = 1;
answer22['y'] = 'Brown';
answer22['z'] = false;

const answer23: FnAny = fn;
answer23['x'] = 1;
answer23['y'] = 'Brown';
answer23['z'] = false;
answer23['a'] = 1;
answer23['b'] = 'hello';
answer23['c'] = true;

// const answer24: object = { a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false, number: 123 };
const answer24: object = Object(123);
answer24['a'] = 1;
answer24['b'] = 'hello';
answer24['c'] = true;
answer24['x'] = 1;
answer24['y'] = 'Brown';
answer24['z'] = false;

const answer25: object = { t: 'I am target', a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false };
const answer26: object = { t: 'I am target', a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false, d: 2, e: 'world', f: false };
const answer27: object = { t: 'No more target!', a: 2, b: 'hello', c: true, x: 1, y: 'Brown', z: false };


tests['assign'] = [
  'return source if target is null.',
  'return source if target is undefined.',
  'return source if target is NaN.',
  // 'return source if target is a promise.',
  'treat non primitives and non objects as empty object.',
  'convert \'primitives\' target to object before performing assign.',
  'return target as is if source is null.',
  'return target as is if source is undefined.',
  'return target as is if source is empty object.',
  'assign (upsert) property from source to target.',
  'source property will overwrite existing target property.',
  'assign from multiple sources.',
  'sources on the right will overwrite sources on the left.',
  'error object source X=> norm object target (shallow assign).',
  'error object source X=> error object target (shallow assign).',
  'norm object source => error object target will work.',
];

inputs['assign'] = [
  [null, source1],
  [undefined, source1],
  [NaN, source1],
  // [pr, source1],
  [fn, source1],
  [123, source1],
  [target1, null],
  [target1, undefined],
  [target1, {}],
  [target1, source1],
  [target1, source2],
  [target1, source1, source3],
  [target1, source1, source2],
  [target1, source4],
  [target2, source4],
  [target2, source2],
];

// console.log(assign(123, source1));
// console.log(answer4);
// console.log(isTheSame(answer4, assign(123, source1)));
// console.log(answer4 === assign(123, source1));

answers['assign'] = [
  answer0,
  answer0,
  answer1,
  // answer2,
  answer3,
  answer4,
  answer5,
  answer5,
  answer5,
  answer6,
  answer7,
  answer8,
  answer9,
  answer10,
  source4,
  answer11,
];

tests['assignIn'] = [
  'return source if target is null.',
  'return source if target is undefined.',
  'return source if target is NaN.',
  // 'return source if target is a promise.',
  'treat non primitives and non objects as empty object.',
  'convert \'primitives\' target to object before performing assign.',
  'return target as is if source is null.',
  'return target as is if source is undefined.',
  'return target as is if source is empty object.',
  'assign (upsert) property from source to target.',
  'source property will overwrite existing target property.',
  'assign from multiple sources.',
  'sources on the right will overwrite sources on the left.',
  'error object source => norm object target (deep assign).',
  'error object source => error object target (deep assign).',
  'norm object source => error object target will work.',
];

inputs['assignIn'] = [
  [null, source1],
  [undefined, source1],
  [NaN, source1],
  // [Promise.resolve({ z: 'promise' }), source1],
  [fn, source1],
  [123, source1],
  [target1, null],
  [target1, undefined],
  [target1, {}],
  [target1, source1],
  [target1, source2],
  [target1, source1, source3],
  [target1, source1, source2],
  [target1, source4],
  [target2, source4],
  [target2, source2],
];

answers['assignIn'] = [
  answer21,
  answer21,
  answer22,
  // answer21,
  answer23,
  answer24,
  answer5,
  answer5,
  answer5,
  answer25,
  answer7,
  answer26,
  answer27,
  answer10,
  source4,
  answer11,
];


_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
