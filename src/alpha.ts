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
export * from './public/makeawait';
export * from './public/makepromise';

// @category Array
export * from './public/chunk';
export * from './public/compact';
export * from './public/flatten';

// @category Files
export * from './public/ls';

// @category Collection
export * from './public/enumkeys';

// @category Number
export * from './public/randominteger';
export * from './public/round';
export * from './public/roundup';
export * from './public/rounddown';

// @category object
export * from './public/isthesame';
export * from './public/thetypeof';
export * from './public/toobject';
export * from './public/objectify';
export * from './public/stringify';
export * from './public/clone';

// @category String
export * from './public/camelCase';
export * from './public/capitalise';
export * from './public/centeralign';
export * from './public/hyphenate';
export * from './public/kebabCase';
export * from './public/leftalign';
export * from './public/pad';
export * from './public/padleft';
export * from './public/padright';
export * from './public/prints';
export * from './public/randomtext';
export * from './public/rightalign';
export * from './public/tofixwidth';
export * from './public/toparagraph';
export * from './public/trim';
export * from './public/trimleft';
export * from './public/trimright';
export * from './public/truncate';

// @category time
export * from './public/timer';
export * from './public/stopwatch';
