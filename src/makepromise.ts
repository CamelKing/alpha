/**
 * Take an input and produce a Promise out of that.
 *
 * @since 0.0.1
 * @category async
 *
 * @export
 * @param {*} fnSync -
 *                     If it is a promise, then it will be returned as is.
 *                     There will be no further unnecessary wrapping.
 *
 *                     If it is a function, it will be converted to a Promise
 *                     which resolves by executing the function. Should the
 *                     function encounters an error, it should throw as that
 *                     will be caught within the promise.
 *
 *                     If it is any other object/primitives/whatever, it will be
 *                     passed and returned via to Promise.resolve()
 *
 * @returns {Promise<any>} a Promise that will resolve to the output of the
 *                         the passed in function / object
 *
 * Revision:
 *
 *          2017 Mac 13 - first version, by Camel K.
 *
 */

import { theTypeOf } from './alpha';

export type FnResolve = (value?: {} | PromiseLike<{}>) => void;
export type FnReject = (error?: any) => void;

export function makePromise(fnSync: any): Promise<any> {

  switch (theTypeOf(fnSync)) {

    case 'function':

      return new Promise((resolve: FnResolve, reject: FnReject) => {
        try {
          resolve(fnSync());
        } catch (err) { reject(err); }
      });

    case 'promise':

      return fnSync;

    default:

      return Promise.resolve(fnSync);

  }

}
