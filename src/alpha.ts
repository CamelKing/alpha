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
export * from './public/chunk';
export * from './public/compact';
export * from './public/flatten';

// @category Files
export * from './public/ls';

// @category Collection
export * from './public/enumKeys';

// @category Number
export * from './public/randomInteger';
export * from './public/round';
export * from './public/roundUp';
export * from './public/roundDown';

// @category object
export * from './public/isTheSame';
export * from './public/theTypeOf';
export * from './public/toObject';
export * from './public/objectify';
export * from './public/stringify';
export * from './public/clone';

// @category String
export * from './public/camelCase';
export * from './public/capitalise';
export * from './public/centerAlign';
export * from './public/cobolCase';
export * from './public/hyphenate';
export * from './public/kebabCase';
export * from './public/leftAlign';
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

// @category time
export * from './public/timer';
export * from './public/stopwatch';
