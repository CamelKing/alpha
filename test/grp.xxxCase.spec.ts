import { FnAny, _testSuites } from './_testSuites';
import { camelCase, cobolCase, kebabCase, lowerFirst, pascalCase, snakeCase, upperFirst, upperSnakeCase } from '../src/alpha';
import { expect, should } from 'chai';

should();

const suiteText: string = '_makeCase() & derivative functions';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  camelCase,
  cobolCase,
  kebabCase,
  pascalCase,
  snakeCase,
  upperSnakeCase,
  lowerFirst,
  upperFirst,
];

tests['camelCase'] = [
  'convert \‘__foo__bar__\’ correctly.',
  'convert \‘--FOO==BAR++\’ correctly.',
  'convert \‘()Foo[]bar{}\’ correctly.',
  'convert \‘..FoO,,baR;;\’ correctly.',
  'convert \‘::foO""BaR\'\'\’ correctly.',
  'convert french statement correctly.',
  'convert chinese statement correctly.',
  'remove all word breakers correctly',
  'return \'\' for an empty string.',
  'return \'\' for null',
  'return \'\' for undefined',
];

tests['cobolCase'] = tests['camelCase'];
tests['kebabCase'] = tests['camelCase'];
tests['pascalCase'] = tests['camelCase'];
tests['snakeCase'] = tests['camelCase'];
tests['upperSnakeCase'] = tests['camelCase'];
tests['lowerFirst'] = tests['camelCase'];
tests['upperFirst'] = tests['camelCase'];

inputs['camelCase'] = [
  ['__foo__bar__'],
  ['--FOO==BAR++'],
  ['()Foo[]bar{}'],
  ['..FoO,,baR;;'],
  ['::foO""BaR\'\''],
  ['est-ce que vous pouvez l\'écrire?'],
  ['你好嗎？ 我很好，哈！'],
  [',./;[]=-+_}{“”‘’\":?\`~!@#$%^&*()><'],
  [''],
  [null],
  [undefined],
];

inputs['cobolCase'] = inputs['camelCase'];
inputs['kebabCase'] = inputs['camelCase'];
inputs['pascalCase'] = inputs['camelCase'];
inputs['snakeCase'] = inputs['camelCase'];
inputs['upperSnakeCase'] = inputs['camelCase'];
inputs['lowerFirst'] = inputs['camelCase'];
inputs['upperFirst'] = inputs['camelCase'];

answers['camelCase'] = [
  'fooBar',
  'fooBar',
  'fooBar',
  'fooBar',
  'fooBar',
  'estCeQueVousPouvezLÉcrire',
  '你好嗎我很好哈',
  '',
  '',
  '',
  '',
];

answers['cobolCase'] = [
  'FOO-BAR',
  'FOO-BAR',
  'FOO-BAR',
  'FOO-BAR',
  'FOO-BAR',
  'EST-CE-QUE-VOUS-POUVEZ-L-ÉCRIRE',
  '你好嗎-我很好-哈',
  '',
  '',
  '',
  '',
];

answers['kebabCase'] = [
  'foo-bar',
  'foo-bar',
  'foo-bar',
  'foo-bar',
  'foo-bar',
  'est-ce-que-vous-pouvez-l-écrire',
  '你好嗎-我很好-哈',
  '',
  '',
  '',
  '',
];

answers['pascalCase'] = [
  'FooBar',
  'FooBar',
  'FooBar',
  'FooBar',
  'FooBar',
  'EstCeQueVousPouvezLÉcrire',
  '你好嗎我很好哈',
  '',
  '',
  '',
  '',
];

answers['snakeCase'] = [
  'foo_bar',
  'foo_bar',
  'foo_bar',
  'foo_bar',
  'foo_bar',
  'est_ce_que_vous_pouvez_l_écrire',
  '你好嗎_我很好_哈',
  '',
  '',
  '',
  '',
];

answers['upperSnakeCase'] = [
  'FOO_BAR',
  'FOO_BAR',
  'FOO_BAR',
  'FOO_BAR',
  'FOO_BAR',
  'EST_CE_QUE_VOUS_POUVEZ_L_ÉCRIRE',
  '你好嗎_我很好_哈',
  '',
  '',
  '',
  '',
];

answers['lowerFirst'] = [
  '__foo__bar__',
  '--fOO==BAR++',
  '()foo[]bar{}',
  '..foO,,baR;;',
  '::foO""BaR\'\'',
  'est-ce que vous pouvez l\'écrire?',
  '你好嗎？ 我很好，哈！',
  ',./;[]=-+_}{“”‘’\":?\`~!@#$%^&*()><',
  '',
  '',
  '',
];

answers['upperFirst'] = [
  '__Foo__bar__',
  '--FOO==BAR++',
  '()Foo[]bar{}',
  '..FoO,,baR;;',
  '::FoO""BaR\'\'',
  'Est-ce que vous pouvez l\'écrire?',
  '你好嗎？ 我很好，哈！',
  ',./;[]=-+_}{“”‘’\":?\`~!@#$%^&*()><',
  '',
  '',
  '',
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
