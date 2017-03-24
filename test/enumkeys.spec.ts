import { enumKeys } from '../src/alpha';

describe('enumKeys() -- only works for TYpescript enum\n', () => {

  describe('should...', () => {

    it('put all keys for a non-numbered enum into an array.', () => {
      enum enumTest {
        everything, silly, debug,
        verbose, info, warning,
        error, nothing
      }
      const keys: string[] = enumKeys(enumTest);
      keys.should.have.lengthOf(8);
      keys.indexOf('everything').should.be.gte(0);
      keys.indexOf('silly').should.be.gte(0);
      keys.indexOf('debug').should.be.gte(0);
      keys.indexOf('verbose').should.be.gte(0);
      keys.indexOf('info').should.be.gte(0);
      keys.indexOf('warning').should.be.gte(0);
      keys.indexOf('error').should.be.gte(0);
      keys.indexOf('nothing').should.be.gte(0);
    });

    it('put all keys for a numbered enum into an array.', () => {
      enum enumTest {
        everything = 0, silly = 15, debug = 25,
        verbose = 35, info = 55, warning = 75,
        error = 85, nothing = 100
      }
      const keys: string[] = enumKeys(enumTest);
      keys.should.have.lengthOf(8);
      keys.indexOf('everything').should.be.gte(0);
      keys.indexOf('silly').should.be.gte(0);
      keys.indexOf('debug').should.be.gte(0);
      keys.indexOf('verbose').should.be.gte(0);
      keys.indexOf('info').should.be.gte(0);
      keys.indexOf('warning').should.be.gte(0);
      keys.indexOf('error').should.be.gte(0);
      keys.indexOf('nothing').should.be.gte(0);
    });

  });

});
