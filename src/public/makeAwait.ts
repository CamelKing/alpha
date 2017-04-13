
/**
 * wrap a function into a promise, and return the factory for that promise.
 *
 * The objective of this routine is to convert a function to be used in
 * Async ... Await call.
 *
 * Using a promise factory for Async Await will result in the promise only
 * executed at the point of being called with await. If the timing of execution
 * is not important, one can use makePromise(), which actually execute the
 * function right away.
 *
 * Usage:
 *
 * function doManyThings() {
 * // do many things
 * return result;
 * }
 *
 * const p1 = makePromise( doManyThings );
 *
 * let result = await p1;     // promise executes here and call doManyThings()
 *
 * const p2 = makeAwait( doManyThings );
 *
 * let result = await p2();   // promise executes here and call doManyThings()
 *
 * @since 0.0.1
 * @category Async
 *
 * @export
 * @param {*} fnPassedIn
 * @returns {FnPromiseFactory}
 *
 */

import { FnPromiseFactory } from '../constants';
import { makePromise } from './makePromise';

// export type FnPromiseFactory = () => Promise<any>;

export function makeAwait(fnPassedIn: any): FnPromiseFactory {
  return (() => makePromise(fnPassedIn));
}
