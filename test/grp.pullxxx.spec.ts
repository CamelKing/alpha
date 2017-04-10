import { FnAny, _testSuites } from './_testSuites';
import { FnComparator, FnPredicate } from '../src/constants';
import { expect, should } from 'chai';
import { isTheSame, pull, pullAll, pullAllBy, pullAllWith } from '../src/alpha';

should();

const suiteText: string = 'Pull items from array';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  pull,
  pullAll,
  pullAllBy,
  pullAllWith,
];

const a: any[] = [1, 2, 3, 4, 5, 1, 3, 5, 7, 9, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8];

const b: Array<object> = [
  { a: 1, b: 'Q' },
  { a: 2, b: 'Q' },
  { a: 3, b: 'Q' },
  { a: 4, b: 'Q' },
  { a: 5, b: 'Q' },
  { a: 1, b: 'Q' },
  { a: 3, b: 'Q' },
  { a: 5, b: 'Q' },
  { a: 7, b: 'Q' },
  { a: 9, b: 'Q' },
  { a: 2, b: 'Q' },
  { a: 2, b: 'Q' },
  { a: 4, b: 'Q' },
  { a: 4, b: 'Q' },
  { a: 4, b: 'Q' },
  { a: 4, b: 'Q' },
  { a: 6, b: 'Q' },
  { a: 6, b: 'Q' },
  { a: 6, b: 'Q' },
  { a: 8, b: 'Q' },
  { a: 8, b: 'Q' },
  { a: 8, b: 'Q' },
  { a: 8, b: 'Q' },
  { a: 8, b: 'Q' },
];

const fnBy: FnPredicate = (o: object) => o['a'];

const fnWith: FnComparator = (a1: any, b1: any) => {
  if (a1 > 8) return true;
  return isTheSame(a1, b1);
};

tests['pull'] = [
  'return array as is if no values passed for removal',
  'return array as is if values not found at all.',
  'pull single item from the array.',
  'pull single item multiple times from the array.',
  'pull multiple items from the array.',
  'pull multiple items multiple times from the array.',
  'handle mix of valid and non existent values to remove.',
];

tests['pullAll'] = [
  '[simple] return array as is if no values passed for removal',
  '[simple] return array as is if values not found at all.',
  '[simple] pull single item from the array.',
  '[simple] pull single item multiple times from the array.',
  '[simple] pull multiple items from the array.',
  '[simple] pull multiple items multiple times from the array.',
  '[simple] handle mix of valid and non existent values to remove.',
  '[full] return array as is if no values passed for removal',
  '[full] return array after comparison even values not found at all.',
  '[full] pull single item from the array.',
  '[full] pull single item multiple times from the array.',
  '[full] pull multiple items from the array.',
  '[full] pull multiple items multiple times from the array.',
  '[full] handle mix of valid and non existent values to remove.',
];

tests['pullAllBy'] = [
  'return array as is if no values passed for removal',
  'return array as is if values not found at all.',
  'pull single item from the array.',
  'pull single item multiple times from the array.',
  'pull multiple items from the array.',
  'pull multiple items multiple times from the array.',
  'handle mix of valid and non existent values to remove.',
];

tests['pullAllWith'] = [
  'return array as is if no values passed for removal',
  'return array after comparison even values not found at all.',
  'pull single item from the array.',
  'pull single item multiple times from the array.',
  'pull multiple items from the array.',
  'pull multiple items multiple times from the array.',
  'handle mix of valid and non existent values to remove.',
];

inputs['pull'] = [
  [a.slice(0)],
  [a.slice(0), 11],
  [a.slice(0), 7],
  [a.slice(0), 3],
  [a.slice(0), 7, 9],
  [a.slice(0), 2, 4, 6],
  [a.slice(0), 2, 4, 11],
];

inputs['pullAll'] = [
  [a.slice(0), []],
  [a.slice(0), [11]],
  [a.slice(0), [7]],
  [a.slice(0), [3]],
  [a.slice(0), [7, 9]],
  [a.slice(0), [2, 4, 6]],
  [a.slice(0), [2, 4, 11]],

  [b.slice(0), [], fnBy, fnWith],
  [b.slice(0), [{ a: 11, b: 'Q' }], fnBy, fnWith],
  [b.slice(0), [{ a: 7, b: 'Q' }], fnBy, fnWith],
  [b.slice(0), [{ a: 3, b: 'Q' }], fnBy, fnWith],
  [b.slice(0), [{ a: 7, b: 'Q' }, { a: 9, b: 'Q' }], fnBy, fnWith],
  [b.slice(0), [{ a: 2, b: 'Q' }, { a: 4, b: 'Q' }, { a: 6, b: 'Q' }], fnBy, fnWith],
  [b.slice(0), [{ a: 2, b: 'Q' }, { a: 4, b: 'Q' }, { a: 11, b: 'Q' }], fnBy, fnWith],
];

inputs['pullAllBy'] = [
  [b.slice(0), [], fnBy],
  [b.slice(0), [{ a: 11, b: 'Q' }], fnBy],
  [b.slice(0), [{ a: 7, b: 'Q' }], fnBy],
  [b.slice(0), [{ a: 3, b: 'Q' }], fnBy],
  [b.slice(0), [{ a: 7, b: 'Q' }, { a: 9, b: 'Q' }], fnBy],
  [b.slice(0), [{ a: 2, b: 'Q' }, { a: 4, b: 'Q' }, { a: 6, b: 'Q' }], fnBy],
  [b.slice(0), [{ a: 2, b: 'Q' }, { a: 4, b: 'Q' }, { a: 11, b: 'Q' }], fnBy],
];

inputs['pullAllWith'] = [
  [a.slice(0), [], fnWith],
  [a.slice(0), [11], fnWith],
  [a.slice(0), [7], fnWith],
  [a.slice(0), [3], fnWith],
  [a.slice(0), [7, 9], fnWith],
  [a.slice(0), [2, 4, 6], fnWith],
  [a.slice(0), [2, 4, 11], fnWith],
];

answers['pull'] = [
  a,
  a,
  [1, 2, 3, 4, 5, 1, 3, 5, 9, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 4, 5, 1, 5, 7, 9, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 3, 4, 5, 1, 3, 5, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 3, 5, 1, 3, 5, 7, 9, 8, 8, 8, 8, 8],
  [1, 3, 5, 1, 3, 5, 7, 9, 6, 6, 6, 8, 8, 8, 8, 8],
];

answers['pullAll'] = [
  a,
  a,
  [1, 2, 3, 4, 5, 1, 3, 5, 9, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 4, 5, 1, 5, 7, 9, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 3, 4, 5, 1, 3, 5, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 3, 5, 1, 3, 5, 7, 9, 8, 8, 8, 8, 8],
  [1, 3, 5, 1, 3, 5, 7, 9, 6, 6, 6, 8, 8, 8, 8, 8],

  b,
  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],
  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

  [
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],
  [
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],



];

answers['pullAllBy'] = [
  b,
  b,
  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 9, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 9, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

  [
    { a: 1, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 2, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 4, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

  [
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 9, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],
  [
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 1, b: 'Q' },
    { a: 3, b: 'Q' },
    { a: 5, b: 'Q' },
    { a: 7, b: 'Q' },
    { a: 9, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 6, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
    { a: 8, b: 'Q' },
  ],

];

answers['pullAllWith'] = [

  a,
  [1, 2, 3, 4, 5, 1, 3, 5, 7, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 3, 4, 5, 1, 3, 5, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 4, 5, 1, 5, 7, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 2, 3, 4, 5, 1, 3, 5, 2, 2, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8],
  [1, 3, 5, 1, 3, 5, 7, 8, 8, 8, 8, 8],
  [1, 3, 5, 1, 3, 5, 7, 6, 6, 6, 8, 8, 8, 8, 8],

];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
