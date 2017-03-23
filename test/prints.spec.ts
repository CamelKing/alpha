import { prints } from '../src/alpha';

describe('prints() should print...', () => {

  let str: string;
  let input: any;

  it('an undefined as "undefined".', () => {
    input = undefined;
    str = prints(input);
    str.should.equal('undefined');
  });

  it('a null as "null".', () => {
    input = null;
    str = prints(input);
    str.should.equal('null');
  });

  it('an empty string as empty string.', () => {
    input = '';
    str = prints(input);
    str.should.equal(input);
  });

  it('a string as a string.', () => {
    input = 'hello world';
    str = prints(input);
    str.should.equal(input);
  });

  it('a number as a string.', () => {
    input = 123456789;
    str = prints(input);
    str.should.equal('' + input);
  });

  it('a -ve number as a string.', () => {
    input = -123456789;
    str = prints(input);
    str.should.equal('' + input);
  });

  it('a floating point number as a string.', () => {
    input = -123456.789;
    str = prints(input);
    str.should.equal('' + input);
  });

  it('a NaN a string.', () => {
    input = NaN;
    str = prints(input);
    str.should.equal('NaN');
  });

  it('a TRUE boolean as "true".', () => {
    input = true;
    str = prints(input);
    str.should.equal('' + input);
  });

  it('a FALSE boolean as "true".', () => {
    input = false;
    str = prints(input);
    str.should.equal('' + input);
  });

  it('a date object as string.', () => {
    input = new Date();
    str = prints(input);
    str.should.equal(input.toLocaleString());
  });

  it('an array as formatted string.', () => {
    input = ['hello world', 123456, true];
    str = prints(input);
    str.should.equal('[ \'hello world\', 123456, true ]');
  });

  it('a nested array as formatted string.', () => {
    input = ['hello world', [123456, true]];
    str = prints(input);
    str.should.equal('[ \'hello world\', [ 123456, true ] ]');
  });

  it('an object as formatted string.', () => {
    input = { a: 1, b: 2, c: 3 };
    str = prints(input);
    str.should.equal('{ a: 1, b: 2, c: 3 }');
  });

  it('an object different from JSON.stringify().', () => {
    input = { a: 1, b: 2, c: 3 };
    str = prints(input);
    str.should.not.equal(JSON.stringify(input));
  });

  it('a Symbol object as formatted string.', () => {
    const result: string = 'hello';
    input = Symbol(result);
    str = prints(input);
    str.should.equal('Symbol(' + result + ')');
  });

  it('a function returning an object as formatted string.', () => {
    const today = new Date();
    input = () => ({ a: 1, b: 2, c: today });
    str = prints(input);
    str.should.equal('{ a: 1, b: 2, c: '
      + today.toLocaleString() + ' }');
  });

  it('a Promise as formatted string.', () => {
    const result: string = 'hello';
    input = Promise.resolve(result);
    str = prints(input);
    str.should.equal('Promise { \'' + result + '\' }');
  });


});

