import { FnComparator, FnIteratee } from '../src/constants';
import { ascOrderBy, isTheSame, sortedUniq, sortedUniqBy, uniq, uniqBy, uniqWith } from '../src/alpha';
import { expect, should } from 'chai';

import { FnAny } from '../src/constants';
import { _testSuites } from './__testSuites';

should();

const suiteText: string = 'Extract unique elements into a new array';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  uniq,
  uniqBy,
  uniqWith,
  sortedUniq,
  sortedUniqBy,
];

const a: number[] = [1, 3, 5, 7, 9, 2, 4, 6, 8, 1, 2, 3, 6, 7, 8, 4];
const b: string[] = ['hello', 'world', 'hello', 'quick', 'brown', 'quick'];
const c: any[] = a.concat(b as any[]);
const fn: FnIteratee = (o: object) => +o['age'];
const fnCompare: FnComparator = isTheSame;
const d: Array<object> = [
  { age: 20, name: 'Quick' },
  { age: 99, name: 'Brown' },
  { age: 40, name: 'Fox' },
  { age: 80, name: 'Jumps' },
  { age: 60, name: 'Over' },
  { age: 60, name: 'A' },
  { age: 80, name: 'Lazy' },
  { age: 40, name: 'Dog' },
  { age: 99, name: 'The' },
  { age: 20, name: '.' },
];
// d.sort(ascOrderBy(fn));
// use '99' as array.sort() is an unstable sort, can result in
// undesirable re-ordering of elements.
const e: Array<object> = d.concat([{ age: '99', name: 'BUG' }]);
// e.sort(ascOrderBy(fn));
const sa: number[] = a.slice(0).sort();
const sb: string[] = b.slice(0).sort();
const sc: any[] = c.slice(0).sort();
const sd: Array<object> = d.slice(0).sort(ascOrderBy(fn));
const se: Array<object> = e.slice(0).sort(ascOrderBy(fn));

tests['uniq'] = [
  'return [] for empty array',
  'return null for null array',
  'return undefined for undefined array',
  'number[]: return as is for single element array',
  'number[]: produce new array with unique members of input.',
  'number[]: word well with sorted array.',
  'string[]: return as is for single element array',
  'string[]: produce new array with unique members of input.',
  'str/num[]: produce new array with unique members of mixed type input.',
];

tests['uniqBy'] = [
  'return [] for empty array',
  'return null for null array',
  'return undefined for undefined array',
  'object []: return as is for single element array',
  'object []: produce new array with unique members of input.',
  'object []: produce new array with unique members of mixed type input.',
];

tests['uniqWith'] = [
  'return [] for empty array',
  'return null for null array',
  'return undefined for undefined array',
  'object []: return as is for single element array',
  'object []: produce new array with unique members of input.',
  'object []: produce new array with unique members of mixed type input.',
];

tests['sortedUniq'] = [
  'return [] for empty array',
  'return null for null array',
  'return undefined for undefined array',
  'number[]: return as is for single element array',
  'number[]: produce new array with unique members of input.',
  'string[]: return as is for single element array',
  'string[]: produce new array with unique members of input.',
  'str/num[]: produce new array with unique members of mixed type input.',
];

tests['sortedUniqBy'] = [
  'return [] for empty array',
  'return null for null array',
  'return undefined for undefined array',
  'object []: return as is for single element array',
  'object []: produce new array with unique members of input.',
  'object []: produce new array with unique members of mixed type input.',
];

inputs['uniq'] = [
  [[]],
  [null],
  [undefined],
  [[1]],
  [a],
  [a.slice(0).sort()],
  [['hello']],
  [b],
  [c],
];

inputs['uniqBy'] = [
  [[], fn],
  [null, fn],
  [undefined, fn],
  [[{ age: 20, name: 'Quick' }], fn],
  [d, fn],
  [e, fn],
];

inputs['uniqWith'] = [
  [[], fnCompare],
  [null, fnCompare],
  [undefined, fnCompare],
  [[{ age: 20, name: 'Quick' }], fnCompare],
  [d, fnCompare],
  [e, fnCompare],
];

inputs['sortedUniq'] = [
  [[]],
  [null],
  [undefined],
  [[1]],
  [sa],
  [['hello']],
  [sb],
  [sc],
];

inputs['sortedUniqBy'] = [
  [[], fn],
  [null, fn],
  [undefined, fn],
  [[{ age: 20, name: 'Quick' }], fn],
  [sd, fn],
  [se, fn],
];

answers['uniq'] = [
  [],
  null,
  undefined,
  [1],
  [1, 3, 5, 7, 9, 2, 4, 6, 8],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['hello'],
  ['hello', 'world', 'quick', 'brown'],
  [1, 3, 5, 7, 9, 2, 4, 6, 8, 'hello', 'world', 'quick', 'brown'],
];

answers['uniqBy'] = [
  [],
  null,
  undefined,
  [{ age: 20, name: 'Quick' }],
  [
    { age: 20, name: 'Quick' },
    { age: 99, name: 'Brown' },
    { age: 40, name: 'Fox' },
    { age: 80, name: 'Jumps' },
    { age: 60, name: 'Over' },
  ],
  [
    { age: 20, name: 'Quick' },
    { age: 99, name: 'Brown' },
    { age: 40, name: 'Fox' },
    { age: 80, name: 'Jumps' },
    { age: 60, name: 'Over' },
  ],
];

answers['uniqWith'] = [
  [],
  null,
  undefined,
  [{ age: 20, name: 'Quick' }],
  d,
  e,
];

answers['sortedUniq'] = [
  [],
  null,
  undefined,
  [1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['hello'],
  ['brown', 'hello', 'quick', 'world'],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 'brown', 'hello', 'quick', 'world'],
];

// the last answer where 'Lazy' replaces 'Jumps' was due to
// array.sort() being an unstable sort.
answers['sortedUniqBy'] = [
  [],
  null,
  undefined,
  [{ age: 20, name: 'Quick' }],
  [
    { age: 20, name: 'Quick' },
    { age: 40, name: 'Fox' },
    { age: 60, name: 'Over' },
    { age: 80, name: 'Jumps' },
    { age: 99, name: 'Brown' },
  ],
  [
    { age: 20, name: 'Quick' },
    { age: 40, name: 'Fox' },
    { age: 60, name: 'Over' },
    { age: 80, name: 'Lazy' },
    { age: 99, name: 'Brown' },
  ],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
