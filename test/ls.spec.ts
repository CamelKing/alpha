import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { expect, should } from 'chai';

import { ls } from '../src/alpha';

should();

describe('ls()', () => {

  describe('should...', () => {

    let list1: string[];

    it('load all file in __dirname.', () => {
      list1 = ls(__dirname);
      list1.should.have.length.gt(0);
    });

    it('return [] if no directory specified.', () => {
      list1 = ls();
      list1.should.have.lengthOf(0);
      list1.should.deep.equal([]);
    });

    it('return [] if invalid directory specified.', () => {
      list1 = ls('abcXYZ');
      list1.should.have.lengthOf(0);
      list1.should.deep.equal([]);
    });

    it('expand \'~\' to user home directory', () => {

      // go thru home directory and try to pick a non hidden
      // file/directory for testing
      // not hard coding directories for testing so this test
      // is portable within different OS
      const home: string[] = fs.readdirSync(os.homedir());
      home.should.have.length.gt(0);
      if (home.length) {
        let i: number = 0;
        while (home[i][0] === '.' && i < home.length) { i++; }
        if (i === home.length) { i--; }
        list1 = ls(path.join('~', home[i]));
        list1.should.have.length.gt(0);
      }

    });

    it('list files in sub directories as well.', () => {

      const dirName: string = path.join(__dirname, '..');
      list1 = ls(dirName);

      // loop thru these files to find if we can find a file
      // with different directory structure, which indicates
      // further level of sub directories underneath.
      let tested: boolean = false;
      for (let j: number = 0; j < list1.length; j++) {
        const file: string = list1[j];
        if (path.dirname(file) !== dirName) {
          path.dirname(file).should.contain(dirName);
          path.dirname(file).should.have.length.gt(dirName.length);
          tested = true;
          break;
        }
      }
      // tslint:disable-next-line:no-unused-expression
      tested.should.be.true;

    });

    it('make use of filter to alter the output.', () => {

      const dirName: string = path.join(__dirname, '.');
      let extname: string = '';

      list1 = ls(dirName, (file: string) => {

        if (file[0] !== '_'
          && file[0] !== '.'
          && (path.extname(file) === '.ts' || path.extname(file) === '.js')) {

          if (!extname) {
            extname = path.extname(file);
          }

          if (path.extname(file) === extname) {
            return file.slice(0);
          }

        }

        return '';

      });

      list1.forEach((file: string) => {
        file[0].should.not.equal('_');
        path.extname(file).should.equal(extname);
      });

    });

  });

});
