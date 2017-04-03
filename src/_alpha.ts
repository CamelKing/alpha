/**
 * This is the barrel which holds the 'export' for all of
 * internal and private alpha utility functions.
 *
 * There is no need for alpha users to make use of this.
 *
 */

// @constants
export * from './_constants';

// @category Math
export * from './private/_decimalAdjust';
export * from './private/_round';

// @category String
export * from './private/_firstCase';
export * from './private/_makeCase';
export * from './private/_hyphenateToArray';
export * from './private/_truncateToArray';

// @category array
export * from './private/_diff';
export * from './private/_drop';

// @category Object
export * from './private/_identity';
