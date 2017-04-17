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
export * from './public/makeAwait';
export * from './public/makePromise';

// @category Array
export * from './public/ascOrder';
export * from './public/ascOrderBy';
export * from './public/chunk';
export * from './public/compact';
export * from './public/deepCompact';
export * from './public/descOrder';
export * from './public/descOrderBy';
export * from './public/difference';
export * from './public/differenceBy';
export * from './public/differenceWith';
export * from './public/drop';
export * from './public/dropRight';
export * from './public/dropRightWhile';
export * from './public/dropWhile';
export * from './public/fill';
export * from './public/flatten';
export * from './public/flattenDeep';
export * from './public/flattenDepth';
export * from './public/head';
export * from './public/initial';
export * from './public/intersection';
export * from './public/intersectionBy';
export * from './public/intersectionWith';
export * from './public/nth';
export * from './public/pluck';
export * from './public/pull';
export * from './public/pullAll';
export * from './public/pullAllBy';
export * from './public/pullAllWith';
export * from './public/remove';
export * from './public/sortedIndexBy';
export * from './public/sortedIndexOf';
export * from './public/sortedInsertAt';
export * from './public/sortedLastIndexBy';
export * from './public/sortedLastIndexOf';
export * from './public/sortedLastInsertAt';
export * from './public/sortedUniq';
export * from './public/sortedUniqBy';
export * from './public/tail';
export * from './public/take';
export * from './public/takeRight';
export * from './public/takeRightWhile';
export * from './public/takeWhile';
export * from './public/union';
export * from './public/unionBy';
export * from './public/unionWith';
export * from './public/uniq';
export * from './public/uniqBy';
export * from './public/uniqWith';
export * from './public/without';
export * from './public/zip';
export * from './public/zipObject';
export * from './public/zipWith';
export * from './public/unzip';
export * from './public/unzipWith';

// @category Files
export * from './public/ls';

// @category Collection
export * from './public/enumKeys';

// @category Number
export * from './public/clamp';
export * from './public/inRange';
export * from './public/isNumeric';
export * from './public/randomInteger';
export * from './public/round';
export * from './public/roundUp';
export * from './public/roundDown';

// @category object
export * from './public/assign';
export * from './public/clone';
export * from './public/fromPairs';
export * from './public/toPairs';
export * from './public/isTheSame';
export * from './public/objectify';
export * from './public/stringify';
export * from './public/theTypeOf';
export * from './public/toObject';

// @category String
export * from './public/camelCase';
export * from './public/capitalise';
export * from './public/centerAlign';
export * from './public/cobolCase';
export * from './public/hyphenate';
export * from './public/kebabCase';
export * from './public/leftAlign';
export * from './public/lowerFirst';
export * from './public/pad';
export * from './public/padLeft';
export * from './public/padRight';
export * from './public/pascalCase';
export * from './public/prints';
export * from './public/randomText';
export * from './public/rightAlign';
export * from './public/snakeCase';
export * from './public/upperSnakeCase';
export * from './public/toFixWidth';
export * from './public/toParagraph';
export * from './public/trim';
export * from './public/trimLeft';
export * from './public/trimRight';
export * from './public/truncate';
export * from './public/toWords';
export * from './public/upperFirst';

// @category time
export * from './public/stopwatch';
export * from './public/timer';
