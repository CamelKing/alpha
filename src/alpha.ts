/**
 * This is the barrel which holds the 'export' for all of
 * alpha utility functions. (excluding the private one which
 * is in _alpha.ts)
 *
 * The importing and re-exporting of the modules is automated.
 * All .js files under the lib directory, and it's subdirectory,
 * and not staring with '_' (indicating private, and will be handled
 * by _alpha.ts.) will be imported and reexported.
 *
 * Usage:
 *
 * if installed thru npm.
 * Import { module1, module2, ...} from 'alpha'
 *
 * if not, just point to where you store alpha lib
 * Import { module1, module2, ...} from './<alpha-dir>/alpha'
 *
 */

export * from './constants';

// @category Async
export * from './common/makeAwait';
export * from './common/makePromise';

// @category Array
export * from './common/ascOrder';
export * from './common/ascOrderBy';
export * from './common/chunk';
export * from './common/compact';
export * from './common/deepCompact';
export * from './common/descOrder';
export * from './common/descOrderBy';
export * from './common/difference';
export * from './common/differenceBy';
export * from './common/differenceWith';
export * from './common/drop';
export * from './common/dropRight';
export * from './common/dropRightWhile';
export * from './common/dropWhile';
export * from './common/fill';
export * from './common/flatten';
export * from './common/flattenDeep';
export * from './common/flattenDepth';
export * from './common/head';
export * from './common/initial';
export * from './common/intersection';
export * from './common/intersectionBy';
export * from './common/intersectionWith';
export * from './common/nth';
export * from './common/pluck';
export * from './common/pull';
export * from './common/pullAll';
export * from './common/pullAllBy';
export * from './common/pullAllWith';
export * from './common/remove';
export * from './common/sortedIndexBy';
export * from './common/sortedIndexOf';
export * from './common/sortedInsertAt';
export * from './common/sortedLastIndexBy';
export * from './common/sortedLastIndexOf';
export * from './common/sortedLastInsertAt';
export * from './common/sortedUniq';
export * from './common/sortedUniqBy';
export * from './common/tail';
export * from './common/take';
export * from './common/takeRight';
export * from './common/takeRightWhile';
export * from './common/takeWhile';
export * from './common/union';
export * from './common/unionBy';
export * from './common/unionWith';
export * from './common/uniq';
export * from './common/uniqBy';
export * from './common/uniqWith';
export * from './common/without';
export * from './common/zip';
export * from './common/zipObject';
export * from './common/zipWith';
export * from './common/unzip';
export * from './common/unzipWith';

// @category Files
export * from './common/ls';

// @category Collection
export * from './common/enumKeys';

// @category Number
export * from './common/clamp';
export * from './common/inRange';
export * from './common/isNumeric';
export * from './common/max';
export * from './common/maxBy';
export * from './common/maxDeep';
export * from './common/maxDeepBy';
export * from './common/mean';
export * from './common/meanBy';
export * from './common/meanDeep';
export * from './common/meanDeepBy';
export * from './common/min';
export * from './common/minBy';
export * from './common/minDeep';
export * from './common/minDeepBy';
export * from './common/randomInteger';
export * from './common/round';
export * from './common/roundUp';
export * from './common/roundDown';
export * from './common/sum';
export * from './common/sumBy';
export * from './common/sumDeep';
export * from './common/sumDeepBy';

// @category object
export * from './common/assign';
export * from './common/assignIn';
export * from './common/clone';
export * from './common/fromPairs';
export * from './common/toPairs';
export * from './common/isTheSame';
export * from './common/objectify';
export * from './common/stringify';
export * from './common/theTypeOf';
export * from './common/toObject';

// @category String
export * from './common/camelCase';
export * from './common/centerAlign';
export * from './common/cobolCase';
export * from './common/hyphenate';
export * from './common/kebabCase';
export * from './common/leftAlign';
export * from './common/lowerFirst';
export * from './common/pad';
export * from './common/padLeft';
export * from './common/padRight';
export * from './common/pascalCase';
export * from './common/prints';
export * from './common/randomText';
export * from './common/rightAlign';
export * from './common/snakeCase';
export * from './common/upperSnakeCase';
export * from './common/toCaps';
export * from './common/toFixWidth';
export * from './common/toParagraph';
export * from './common/trim';
export * from './common/trimLeft';
export * from './common/trimRight';
export * from './common/truncate';
export * from './common/toWords';
export * from './common/upperFirst';

// @category time
export * from './common/stopwatch';
export * from './common/timer';
