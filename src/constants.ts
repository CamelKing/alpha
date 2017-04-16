// @Files
export type FnLSFilter = { (filename: string): string };

// @String
export enum Align { left, center, right };
export const Space: string = ' ';
export const Apostrophe: string = '\u0027';
export const Hyphen: string = '-';
export const HalfWordLen: number = 3;

// @Number
export type RoundOperand = 'round' | 'ceil' | 'floor';
export type CaseOperand = 'toLowerCase' | 'toUpperCase';

// @Async
export type FnPromiseFactory = () => Promise<any>;
export type FnResolve = (value?: {} | PromiseLike<{}>) => void;
export type FnReject = (error?: any) => void;

// @Object
export type Pair = [string, any];
export type Pairs = Pair[];
export type Primitives = object | string | number | boolean | any[];

// @Array
export const NotFound: number = -1;
export enum SortOrder { lower = -1, same = 0, higher = 1 };
export enum Direction { fromLeft = 1, fromRight = -1 }
export type FnComparator = (a: any, b: any) => boolean;
export type FnSorter = (a: any, b: any) => SortOrder;
export type FnCheck = (predicate: any) => boolean;
// export type FnPredicate = (v: any) => any;
export type FnIteratee = (v: any) => any;
export type FnFinder = (item: any, index: number, array: any[]) => boolean;
export type FnMatcher = (item: any) => boolean;
export type FnTester = FnMatcher;
export type AnyIteratee = FnIteratee | number | string;

export interface ArrayOption {
  predicate?: any;
  iteratee?: AnyIteratee;
  compare?: FnComparator;
  match?: FnMatcher;
  find?: FnFinder;
  sort?: FnSorter;
  last?: boolean;
  insert?: boolean;
  count?: number;
  direction?: Direction;
};

// @Functions
export type FnAny = (...args: any[]) => any;


// --- special purpose

// @RegExp

/*

  any kind of punctuation character (including international e.g. Chinese and Spanish punctuation)

  author: http://www.regular-expressions.info/unicode.html

  source: https://github.com/slevithan/xregexp/blob/41f4cd3fc0a8540c3c71969a0f81d1f00e9056a9/src/addons/unicode/unicode-categories.js#L142

  note: XRegExp unicode output taken from http://jsbin.com/uFiNeDOn/3/edit?js,console (see chrome console.log), then converted back to JS escaped unicode here http://rishida.net/tools/conversion/, then tested on http://regexpal.com/

  suggested by: http://stackoverflow.com/a/7578937

  added: extra characters like "$", "\uFFE5" [yen symbol], "^", "+", "=" which are not consider punctuation in the XRegExp regex (they are currency or mathmatical characters)

  added: \u3000-\u303F Chinese Punctuation for good measure

  Camel King, 31 March 2017 - broken down, sorted and doocumented the entire unicode string to make it easier to maintain.

*/

/*

  \\u0021 - \\u002F - latin common special char !"#$%&'()*+,-./
  \\u003A - \\u0040 - latin common special char :;<=>?@
  \\u005B - \\u0060 - latin common special char [\]^_`
  \\u007B - \\u007E - latin common special char {|}~
  \\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF - Latin-1 supplement
  \\u037E\\u0387 - Greek and Coptic
  \\u055A-\\u055F \\u0589\\u058A - Armenian
  \\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4 - Hebrew
  \\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4 - bic
  \\u0700-\\u070D - Syriac
  \\u07F7-\\u07F9 - NKO
  \\u0830-\\u083E - Samaritan
  \\u085E - Mandaic
  \\u0964\\u0965\\u0970 - Devanagari
  \\u0AF0 - GUjarati
  \\u0DF4 - Shinhala
  \\u0E4F\\u0E5A\\u0E5B - Thai
  \\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA - etan
  \\u104A-\\u104F - Myanmar
  \\u10FB - Hangul - Jamo
  \\u1360-\\u1368 - Ethiopic
  \\u1400\\u166D\\u166E - Unified Canadian Aboriginal Syllabics
  \\u169B\\u169C - Ogham
  \\u16EB-\\u16ED - Runic
  \\u1735\\u1736 - Hanunoo
  \\u17D4-\\u17D6\\u17D8-\\u17DA - Khmer
  \\u1800-\\u180A - Mongolian
  \\u1944\\u1945 - Limbu
  \\u1A1E\\u1A1F - Buginese
  \\u1AA0-\\u1AA6\\u1AA8-\\u1AAD - Tai Tham
  \\u1B5A-\\u1B60 - Balinese
  \\u1BFC-\\u1BFF - Batak
  \\u1C3B-\\u1C3F - Lepcha
  \\u1C7E\\u1C7F - Ol Chiki
  \\u1CC0-\\u1CC7 - Sundanese supplement
  \\u1CD3 - Vedic
  \\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E - General ctuation
  \\u207D\\u207E\\u208D\\u208E - superscripts and subscripts
  \\u2329\\u232A - Miscellaneous Technical
  \\u2768-\\u2775 - Dingbats
  \\u27C5\\u27C6\\u27E6-\\u27EF - Miscellaneous Mathematical Symbols-A
  \\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD - Miscellaneous Mathematical bols-B
  \\u2CF9-\\u2CFC\\u2CFE\\u2CFF - Coptic
  \\u2D70 - Tifinagh
  \\u2E00-\\u2E2E\\u2E30-\\u2E3B - Supplemental Punctuation
  \\u3000-\\u303F - CJK Symbols  Punctuation
  \\u30A0\\u30FB - Katakana
  \\uA4FE\\uA4FF - Lisu
  \\uA60D-\\uA60F - Vai
  \\uA673\\uA67E - Cyrillic Extended-B
  \\uA6F2-\\uA6F7 - Bamum
  \\uA874-\\uA877 - Phags-pa
  \\uA8CE\\uA8CF - Saurashtra
  \\uA8F8-\\uA8FA - Devanagari Extended
  \\uA92E\\uA92F - Kayah Li
  \\uA95F - Rejang
  \\uA9C1-\\uA9CD\\uA9DE\\uA9DF - Javanese
  \\uAA5C-\\uAA5F - Cham
  \\uAADE\\uAADF - Tai Viet
  \\uAAF0\\uAAF1 - Meetei Mayek Extensions
  \\uABEB - Meetei Mayek
  \\uFD3E\\uFD3F - Arabic Presentation Forms-A
  \\uFE10-\\uFE19 - Vertical Forms
  \\uFE30-\\uFE4F - CJK Compatibility Forms
  \\uFE50-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B - Small Form iants
  \\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65 - Halfwidth and Fullwidth Forms

*/

const resWorkBreakersUnicode: string = `
\\u0021-\\u002F
\\u003A-\\u0040
\\u005B-\\u0060
\\u007B-\\u007E
\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF
\\u037E\\u0387
\\u055A-\\u055F\\u0589\\u058A
\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4
\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4
\\u0700-\\u070D
\\u07F7-\\u07F9
\\u0830-\\u083E
\\u085E
\\u0964\\u0965\\u0970
\\u0AF0
\\u0DF4
\\u0E4F\\u0E5A\\u0E5B
\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA
\\u104A-\\u104F
\\u10FB
\\u1360-\\u1368
\\u1400\\u166D\\u166E
\\u169B\\u169C
\\u16EB-\\u16ED
\\u1735\\u1736
\\u17D4-\\u17D6\\u17D8-\\u17DA
\\u1800-\\u180A
\\u1944\\u1945
\\u1A1E\\u1A1F
\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD
\\u1B5A-\\u1B60
\\u1BFC-\\u1BFF
\\u1C3B-\\u1C3F
\\u1C7E\\u1C7F
\\u1CC0-\\u1CC7
\\u1CD3
\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E
\\u207D\\u207E\\u208D\\u208E
\\u2329\\u232A
\\u2768-\\u2775
\\u27C5\\u27C6\\u27E6-\\u27EF
\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD
\\u2CF9-\\u2CFC\\u2CFE\\u2CFF
\\u2D70
\\u2E00-\\u2E2E\\u2E30-\\u2E3B
\\u3000-\\u303F
\\u30A0\\u30FB
\\uA4FE\\uA4FF
\\uA60D-\\uA60F
\\uA673\\uA67E
\\uA6F2-\\uA6F7
\\uA874-\\uA877
\\uA8CE\\uA8CF
\\uA8F8-\\uA8FA
\\uA92E\\uA92F
\\uA95F
\\uA9C1-\\uA9CD\\uA9DE\\uA9DF
\\uAA5C-\\uAA5F
\\uAADE\\uAADF
\\uAAF0\\uAAF1
\\uABEB
\\uFD3E\\uFD3F
\\uFE10-\\uFE19
\\uFE30-\\uFE4F
\\uFE50-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B
\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65
`;

const resWordBreak: string = '[\\s' + resWorkBreakersUnicode + ']+';

// regexp string to look for single quotes, used for conversion to apostrophe
export const reLeftSingleQuote: RegExp = /\u2018{1,1}/g;

// inserting the 'exclude' marker to make a regexp that looks for words instead.
const resWord: string = resWordBreak.slice(0, 1) + '^' + resWordBreak.slice(1);

export const reFirstWord: RegExp = new RegExp(resWord);
// export const reAllWords: RegExp = new RegExp(resWord, 'g');
export const reAllWordBreakers: RegExp = new RegExp(resWordBreak, 'g');
