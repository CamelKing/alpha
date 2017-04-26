/**
 * List all files under the directory, recursively.
 *
 * Use filter paramerer to pass in a filter function, which
 * - takes in a file name string
 *  (use path.join(__dirname, file) to construct full path if you wish)
 * - perform checking, as well as transformation of file name
 * - return the file names to be stored. '' indicate skip.
 *
 * NOTE: This is a synchronous function. It can block the main nodeJs thread.
 *
 * TODO: work on a asynchronous version of this function.
 *
 * @since 0.0.1
 * @category Files
 *
 * @refactor April 17, 2017
 *
 * @export
 * @param {string} [dir]
 * @param {FnLSFilter} [filter]
 * @returns {string[]}
 */

import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { FnLSFilter } from '../constants';

export function ls(dir?: string, filter?: FnLSFilter): string[] {

  let fileList: string[] = [];

  if (!dir) return fileList;

  // BASH ~ home directory short hand
  if (dir[0] === '~') dir = path.join(os.homedir(), dir.slice(1));

  if (fs.existsSync(dir)) {

    fs.readdirSync(dir).forEach((file: string) => {

      // use lstatSync() just in case of symlink on osx and unix
      if (fs.lstatSync(path.join(dir, file)).isDirectory()) {

        // recursive ls for sub directories within
        fileList = fileList.concat(ls(path.join(dir, file)));

      } else if (filter) {

        // apply filter if any,
        // it is expected to return the file name to add,
        // '' indicate skip this file
        const newFile: string = filter(file);
        if (newFile) fileList = fileList.concat(newFile);

      } else {

        // just add file to the list.
        // this will always be full path. If relative path
        // is desired, pls use filter.
        fileList = fileList.concat(path.join(dir, file));

      }

    });

  }

  return fileList;

}
