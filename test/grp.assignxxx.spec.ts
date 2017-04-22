import { assign, assignIn, clone } from '../src/alpha';
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

const target1: Foo = new Foo;
const target2: Error = new Error('Target Error');
const source1: Bar = new Bar;

const source2: object = { a: 2, t: 'No more target!' };
const source3: object = { d: 2, e: 'world', f: false };
const source4: Error = new Error('Second Error');

const answer0: object = { a: 1, b: 'hello', c: true };
const answer1: object = { a: 1, b: 'hello', c: true, z: 'function' };
const answer2: object = { a: 1, b: 'hello', c: true, number: 123 };
const answer3: object = { t: 'I am target' };
const answer4: object = { t: 'I am target', a: 1, b: 'hello', c: true };
const answer5: object = { t: 'No more target!', a: 2 };
const answer6: object = { t: 'I am target', a: 1, b: 'hello', c: true, d: 2, e: 'world', f: false };
const answer7: object = { t: 'No more target!', a: 2, b: 'hello', c: true };
const answer8: Foo = clone(target1) as Foo;
answer8['message'] = source4.message;
answer8['stack'] = source4.stack;
const answer9: Error = clone(target2) as Error;
answer9['a'] = 2;
answer9['t'] = 'No more target!';
const answer10: object = { a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false };
const answer11: object = { a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false, number: 123 };
const answer12: object = { t: 'I am target', a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false };
const answer13: object = { t: 'I am target', a: 1, b: 'hello', c: true, x: 1, y: 'Brown', z: false, d: 2, e: 'world', f: false };
const answer14: object = { t: 'No more target!', a: 2, b: 'hello', c: true, x: 1, y: 'Brown', z: false };


tests['assign'] = [
  'return source if target is null.',
  'return source if target is undefined.',
  'return source if target is NaN.',
  'return source if target is a promise.',
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
  [Promise.resolve({ z: 'promise' }), source1],
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

answers['assign'] = [
  answer0,
  answer0,
  answer0,
  answer0,
  answer0,
  answer2,
  answer3,
  answer3,
  answer3,
  answer4,
  answer5,
  answer6,
  answer7,
  answer8,
  source4,
  answer9,
];


tests['assignIn'] = [
  'return source if target is null.',
  'return source if target is undefined.',
  'return source if target is NaN.',
  'return source if target is a promise.',
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
  [Promise.resolve({ z: 'promise' }), source1],
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
  answer10,
  answer10,
  answer10,
  answer10,
  answer10,
  answer11,
  answer3,
  answer3,
  answer3,
  answer12,
  answer5,
  answer13,
  answer14,
  answer8,
  source4,
  answer9,
];


_testSuites(funcs, tests, inputs, answers, suiteText, __filename, true);
