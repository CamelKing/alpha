/**
 * Reverse the zip process, and reconstruct the original
 * arrays as nested arrays.
 *
 * implemented as a wrapper over the unzipWith() function without the
 * iterator function.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[][]} arrays
 * @returns {any[]}
 */

import { unzipWith } from './unzipWith';
import { zip } from './zip';

export function unzip(arrays: any[]): any[] {

  // use unzipWith() to transform the array back to before zip

  return unzipWith(arrays);
}
