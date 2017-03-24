
/**
 * wrap a function into a promise, and return the factory for that promise.
 *
 * The objective of this routine is to convert a function to be used in
 * Async ... Await call.
 *
 * @export
 * @param {*} fnPassedIn
 * @returns {FnPromiseFactory}
 */

import { makePromise } from './alpha';

export type FnPromiseFactory = () => Promise<any>;

export function makeAwait(fnPassedIn: any): FnPromiseFactory {
  return (() => makePromise(fnPassedIn));
}
