/**
 * This is the barrel which holds the 'export' for all of
 * alpha utility functions. (excluding the private one which
 * is in _alpha.ts)
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

// @category time
export * from './time/timer';

// @category Async
export * from './async/makeawait';
export * from './async/makepromise';

// @category Array
export * from './array/chunk';
export * from './array/flatten';

// @category Collection
export * from './collection/enumkeys';

// @category String
export * from './string/capitalise';
export * from './string/centeralign';
export * from './string/hyphenate';
export * from './string/leftalign';
export * from './string/pad';
export * from './string/padleft';
export * from './string/padright';
export * from './string/prints';
export * from './string/randomtext';
export * from './string/rightalign';
export * from './string/trim';
export * from './string/trimleft';
export * from './string/trimright';
export * from './string/truncate';

// @category Number
export * from './number/randominteger';
export * from './number/round';
export * from './number/roundup';
export * from './number/rounddown';

// @category object
export * from './object/isthesame';
export * from './object/thetypeof';
export * from './object/toobject';
export * from './object/objectify';
export * from './object/stringify';
