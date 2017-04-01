import { FnAny, _testSuites } from './_testSuites';
import { expect, should } from 'chai';

import { toWords } from '../src/alpha';

should();

const suiteText: string = 'Break down strings into array of words.';

const tests: object = {};
const inputs: object = {};
const answers: object = {};

const funcs: FnAny[] = [
  toWords,
];

tests['toWords'] = [
  'break down a 101 words English Lorem ipsum paragraph.',
  'break down a 81 words French Lorem ipsum paragraph.',
  'break down a 29 phrases Chinese Lorem ipsum paragraph.',
  'return [] with empty string passed in.',
  'return [] with null string passed in.',
  'return [] with undefined string passed in.',
  'return [] with a string fill of word breakers passed in.',
];

// tslint:disable-next-line:max-line-length
const englishParagraph: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa eu lacus laoreet finibus at tempor erat. Nulla nec venenatis risus, eu vestibulum neque. Mauris ac faucibus ex. Praesent sit amet felis at metus porttitor iaculis. Quisque placerat faucibus massa. Pellentesque cursus sem felis, eu blandit sem eleifend non. Donec aliquam lorem vel feugiat bibendum. Aenean tincidunt interdum eros et pellentesque. Nam laoreet imperdiet sem, ut faucibus orci. Donec ac convallis turpis. Praesent dolor leo, pharetra non dui nec, scelerisque elementum dolor. Vestibulum velit leo, vulputate vel urna at, maximus accumsan urna. Donec sagittis viverra tincidunt. Sed quis egestas nunc.';

// tslint:disable-next-line:max-line-length
const englishWords: string[] = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Proin', 'sed', 'massa', 'eu', 'lacus', 'laoreet', 'finibus', 'at', 'tempor', 'erat', 'Nulla', 'nec', 'venenatis', 'risus', 'eu', 'vestibulum', 'neque', 'Mauris', 'ac', 'faucibus', 'ex', 'Praesent', 'sit', 'amet', 'felis', 'at', 'metus', 'porttitor', 'iaculis', 'Quisque', 'placerat', 'faucibus', 'massa', 'Pellentesque', 'cursus', 'sem', 'felis', 'eu', 'blandit', 'sem', 'eleifend', 'non', 'Donec', 'aliquam', 'lorem', 'vel', 'feugiat', 'bibendum', 'Aenean', 'tincidunt', 'interdum', 'eros', 'et', 'pellentesque', 'Nam', 'laoreet', 'imperdiet', 'sem', 'ut', 'faucibus', 'orci', 'Donec', 'ac', 'convallis', 'turpis', 'Praesent', 'dolor', 'leo', 'pharetra', 'non', 'dui', 'nec', 'scelerisque', 'elementum', 'dolor', 'Vestibulum', 'velit', 'leo', 'vulputate', 'vel', 'urna', 'at', 'maximus', 'accumsan', 'urna', 'Donec', 'sagittis', 'viverra', 'tincidunt', 'Sed', 'quis', 'egestas', 'nunc'];

// tslint:disable-next-line:max-line-length
const frenchParagraph: string = 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d\'attente.L\'avantage de le mettre en latin est que l\'opérateur sait au premier coup d\'oeil que la page contenant ces lignes n\'est pas valide, et surtout l\'attention du client n\'est pas dérangée par le contenu, il demeure concentré seulement sur l\'aspect graphique.';

// tslint:disable-next-line:max-line-length
const frenchWords: string[] = ['Généralement', 'on', 'utilise', 'un', 'texte', 'en', 'faux', 'latin', 'le', 'texte', 'ne', 'veut', 'rien', 'dire', 'il', 'a', 'été', 'modifié', 'le', 'Lorem', 'ipsum', 'ou', 'Lipsum', 'qui', 'permet', 'donc', 'de', 'faire', 'office', 'de', 'texte', 'd', 'attente', 'L', 'avantage', 'de', 'le', 'mettre', 'en', 'latin', 'est', 'que', 'l', 'opérateur', 'sait', 'au', 'premier', 'coup', 'd', 'oeil', 'que', 'la', 'page', 'contenant', 'ces', 'lignes', 'n', 'est', 'pas', 'valide', 'et', 'surtout', 'l', 'attention', 'du', 'client', 'n', 'est', 'pas', 'dérangée', 'par', 'le', 'contenu', 'il', 'demeure', 'concentré', 'seulement', 'sur', 'l', 'aspect', 'graphique'];

// tslint:disable-next-line:max-line-length
const chineseParagraph: string = '小下變卻。藝同消關不力況玩只論風還委保三不動機小加手國不始後之懷特位為心我點不合，打更形牛面車要道縣人是，然重上市小字一你都什黃選量，進交我多港間相新就站問難子把它在法，市謝謝水？引管到成華線超我色令開全進？能實戲。離南時候。眾公期清因國乎實年而票急在象也前民院我非至。小死了口命時園要智色在高著後。小國行，母適有在司關無……子了特房著便；不難生不不整老比詩岸理動孩友什回，又聲有快了孩！故的八候野！明定廣，學接四，眼業文車他心案種熱奇感組她集中還民康字外過重直出社部金一日決什歷智找因長那，用音該大的管口我光城這士。位國能裡存：跑天裡非廣小有西血做師了地飛離盡而小那，簡切支子大歷關什，慢外電處一場得了我；車差有體三書心升如個到，道家你。來議示題：取種員。';

// tslint:disable-next-line:max-line-length
const chinesePhrases: string[] = ['小下變卻', '藝同消關不力況玩只論風還委保三不動機小加手國不始後之懷特位為心我點不合', '打更形牛面車要道縣人是', '然重上市小字一你都什黃選量', '進交我多港間相新就站問難子把它在法', '市謝謝水', '引管到成華線超我色令開全進', '能實戲', '離南時候', '眾公期清因國乎實年而票急在象也前民院我非至', '小死了口命時園要智色在高著後', '小國行', '母適有在司關無', '子了特房著便', '不難生不不整老比詩岸理動孩友什回', '又聲有快了孩', '故的八候野', '明定廣', '學接四', '眼業文車他心案種熱奇感組她集中還民康字外過重直出社部金一日決什歷智找因長那', '用音該大的管口我光城這士', '位國能裡存', '跑天裡非廣小有西血做師了地飛離盡而小那', '簡切支子大歷關什', '慢外電處一場得了我', '車差有體三書心升如個到', '道家你', '來議示題', '取種員'];

inputs['toWords'] = [
  [englishParagraph],
  [frenchParagraph],
  [chineseParagraph],
  [''],
  [null],
  [undefined],
  [',./\';[]=-+_}{\":?\`~!@#$%^&*()><'],
];

answers['toWords'] = [
  englishWords,
  frenchWords,
  chinesePhrases,
  [],
  [],
  [],
  [],
];

_testSuites(funcs, tests, inputs, answers, suiteText, __filename);
