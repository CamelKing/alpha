import { Align, centerAlign, leftAlign, pad, padLeft, padRight, rightAlign, toFixWidth } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './_testSuites';

should();

const suiteText: string = 'Pad() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  pad,
  leftAlign,
  padRight,
  rightAlign,
  padLeft,
  centerAlign,
  toFixWidth,
];

tests['pad'] = [
  'pad a string with chosen char on the right.',
  'pad a string with chosen char on the left.',
  'produce a right padded string by default.',
  'produce a right padded string with space by default.',
  'return a copy of same string if asking a same length string.',
  'return a copy of same string if asking a -ve length string.',
  'return a copy of same string if asking a shorter string.',
  'only use the first char on pad string.',
];

tests['leftAlign'] = [
  'behave the same as pad(... Align.left).',
  'produce a right padded string with space by default.',
];

tests['leftAlign'] = tests['leftAlign'].concat(tests['pad'].slice(-4));

tests['padRight'] = tests['leftAlign'];

tests['rightAlign'] = [
  'behave the same as pad(... Align.right).',
  'produce a left padded string with space by default.',
];

tests['rightAlign'] = tests['rightAlign'].concat(tests['pad'].slice(-4));

tests['padLeft'] = tests['rightAlign'];

tests['centerAlign'] = [
  'pad a string with chosen char on left+right.',
  'pad a string with space on left+right by default.'
];

tests['centerAlign'] = tests['centerAlign'].concat(tests['pad'].slice(-4));

tests['toFixWidth'] = [
  'create a truncated fixed width string.',
  'create a short truncated fixed width string.',
  'use … for really short truncated fixed width string.',
  'create a right padded fixed width string.',
  'create a left padded fixed width string.',
  'create a center aligned fixed width string.',
];


const quick: string = 'a quick brown fox';

inputs['pad'] = [
  [quick, 30, '=', Align.left],
  [quick, 30, '=', Align.right],
  [quick, 30, '='],
  [quick, 30],
  [quick, quick.length],
  [quick, -1],
  [quick, quick.length - 1],
  [quick, 30, 'ABC'],
];

inputs['leftAlign'] = [
  [quick, 30, '=', Align.left],
  [quick, 30],
];

inputs['leftAlign'] = inputs['leftAlign'].concat(inputs['pad'].slice(-4));

inputs['padRight'] = inputs['leftAlign'];

inputs['rightAlign'] = [
  [quick, 30, '=', Align.right],
  [quick, 30],
];

inputs['rightAlign'] = inputs['rightAlign'].concat(inputs['pad'].slice(-4));

inputs['padLeft'] = inputs['rightAlign'];

inputs['centerAlign'] = [
  [quick, 30, '=', Align.center],
  [quick, 30],
];

inputs['centerAlign'] = inputs['centerAlign'].concat(inputs['pad'].slice(-4));

inputs['toFixWidth'] = [
  ['This is the new Hello World ya!', 20],
  ['This is the new Hello World ya!', 10],
  ['This is the new Hello World ya!', 9],
  ['Hello World', 20, Align.left],
  ['Hello World', 20, Align.right],
  ['Hello World', 20, Align.center],
];

answers['pad'] = [
  'a quick brown fox=============',
  '=============a quick brown fox',
  'a quick brown fox=============',
  'a quick brown fox             ',
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown foxAAAAAAAAAAAAA',
];

answers['leftAlign'] = [
  'a quick brown fox=============',
  'a quick brown fox             ',
];

answers['leftAlign'] = answers['leftAlign'].concat(answers['pad'].slice(-4));

answers['padRight'] = answers['leftAlign'];

answers['rightAlign'] = [
  '=============a quick brown fox',
  '             a quick brown fox',
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown fox',
  'AAAAAAAAAAAAAa quick brown fox',
];

answers['padLeft'] = answers['rightAlign'];

answers['centerAlign'] = [
  '=======a quick brown fox======',
  '       a quick brown fox      ',
  'a quick brown fox',
  'a quick brown fox',
  'a quick brown fox',
  'AAAAAAAa quick brown foxAAAAAA',
];

answers['centerAlign'] = answers['centerAlign'].concat(answers['pad'].slice(-4));

answers['toFixWidth'] = [
  'This is the new H...',
  'This is...',
  'This is …',
  'Hello World         ',
  '         Hello World',
  '     Hello World    ',
];


_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
