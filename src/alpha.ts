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


// @category Async
export * from './async/makeawait';
export * from './async/makepromise';

// @category Array
export * from './array/chunk';
export * from './array/flatten';

// @category Files
export * from './files/ls';

// @category Collection
export * from './collection/enumkeys';

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
export * from './string/tofixwidth';
export * from './string/toparagraph';
export * from './string/trim';
export * from './string/trimleft';
export * from './string/trimright';
export * from './string/truncate';

// @category time
export * from './time/timer';
export * from './time/casio';


/*
import * as fs from 'fs';
import * as path from 'path';

type FnFilter = { (filename: string): boolean };

const requireList: string[] = finalise(ls(__dirname), isValidModules);
Object.defineProperty(exports, '__esModule', { value: true });
requireList.forEach((req: string) => {
 extract(require(req));
});

function ls(dir: string): string[] {
  let fileList: string[] = [];
  fs.readdirSync(dir).forEach((file: string) => {
    fileList = fs.statSync(path.join(dir, file)).isDirectory()
      ? fileList.concat(ls(path.join(dir, file)))
      : fileList.concat(path.join(dir, file));
  });
  return fileList;
}

function finalise(fileList: string[], filter?: FnFilter): string[] {
  const finalList: string[] = [];
  let next: number = 0;
  fileList.forEach((file: string) => {
    if (filter(file)) {
      finalList[next++] = '.' + file.substr(__dirname.length, file.length - __dirname.length - 3);
    }
  });
  return finalList;
}

function extract(moduleFile: any): void {
  for (const property in moduleFile) {
    if (!exports.hasOwnProperty(property)) {
      exports[property] = moduleFile[property];
    }
  }
}

function isValidModules(file: string): boolean {
  return (   path.extname(file) === '.js'
          && path.basename(file)[0] !== '_'
          && path.basename(file) !== 'alpha' );
}

console.log(exports);

*/

