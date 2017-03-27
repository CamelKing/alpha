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
export * from './.private/number/_round';
export * from './.private/number/_decimaladjust';

// @category String
export * from './.private/string/_truncatetoarray';
export * from './.private/string/_hyphenatetoarray';
