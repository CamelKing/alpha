import { clone, isTheSame, stopwatch } from '../src/alpha';
import { expect, should } from 'chai';

should();

describe('clone()\n', () => {

  describe('should...', () => {

    const a: object = { a: 1, b: { c: 'd' } };
    let b: object = clone(a);

    it('perform deep cloning a => b', () => {
      b['a'].should.be.equal(1);
      b['b']['c'].should.be.equal('d');
      a['b'].should.not.equal(b['b']);
    });

    a['f'] = a;
    a['g'] = a;
    b = clone(a);

    it('have no problem with recursive data structure.', () => {
      b['a'].should.be.equal(1);
      b['b']['c'].should.be.equal('d');
      a['b'].should.not.equal(b['b']);
      a['f'].should.not.equal(b['f']);
      b['f'].should.be.equal(b['g']);
      b['f']['f'].should.be.equal(b['f']);
      b['f']['g']['f'].should.be.equal(b['g']);
      b['f']['g']['f']['g']['f']['g'].should.be.equal(b);
    });

    it('preserve Array when cloning.', () => {
      // tslint:disable-next-line:no-magic-numbers
      const arrTest: any[] = [1, { array: [2, 'hello'] }];
      const objTest: object = { array: arrTest };
      const objCopy: object = clone(objTest);
      const jsonStr: string = JSON.stringify(objCopy);
      const expStr: string = '{"array":[1,{"array":[2,\"hello\"]}]}';
      jsonStr.should.be.equal(expStr);
    });

    it('cloning Array?', () => {
      // tslint:disable-next-line:no-magic-numbers
      const arrTest: any[] = [1, { array: [2, 'hello'] }];
      const objCopy: object = clone(arrTest);
      const jsonStr: string = JSON.stringify(objCopy);
      const expStr: string = '[1,{"array":[2,\"hello\"]}]';
      jsonStr.should.be.equal(expStr);
    });

    it('cloning Error object', () => {
      // tslint:disable-next-line:no-magic-numbers
      const errTest: Error = new Error('THIS IS LONDON');
      const objCopy: Error = clone(errTest) as Error;
      isTheSame(errTest, objCopy).should.be.true;
    });

    it('cloning non object will not work', () => {
      // tslint:disable-next-line:no-magic-numbers
      const test: any = 123;
      const objCopy: any = clone(test);
      isTheSame(test, objCopy).should.be.true;
    });

    it('cloning a class object', () => {
      // tslint:disable-next-line:no-magic-numbers
      const test: any = stopwatch;
      const objCopy: any = clone(test);
      isTheSame(test, objCopy).should.be.true;
    });


  });

});
