

export interface XcopyOptions {
  source?: any | any[] | any[][];
  deep?: boolean;
}

import { theTypeOf } from './theTypeOf';

export function xcopy({ source, deep }: XcopyOptions): any {

  let target: any;

  const type: string = theTypeOf(source);

  switch (type) {

    case 'error':

      break;

    case 'object':
      target = Object.create(Object.getPrototypeOf(source));
      for (const key in source) {
        // retrieve the property descriptor (not just copy value)
        const descriptor: PropertyDescriptor
          = Object.getOwnPropertyDescriptor(source, key);

        //
      }
      return source;

    case 'array':
      // loop and make copy of every item with recursive call
      target = Array(source.length);
      source.forEach((item: any, index: number) => {
        target[index] = xcopy({ source: item, deep });
      });
      return target;

    case 'string':
      return source.slice(0);

    case 'date':
      return new Date(source.getTime());

    case 'symbol':
    case 'promise':
    case 'function':
    case 'boolean':
    case 'number':
    case 'null':
    case 'undefined':
    case 'nan':
    default:
      return source;

  }

}


const a1: any[] = [1, [2, [3, { a: 4 }]], 5];
let a2: number[] = xcopy({ source: a1, deep: false });
a2 = a2.concat([6, 7, 8, 9, 0]);
a2[0] = 11;
a2[1][0] = 12;
a2[1][1][0] = 5;
a2[1][1][1]['a'] = 6;
console.log(a1, ' => ', a2);


const s1: string = 'hello world';
let s2: string = xcopy({ source: s1, deep: false });
s2 += ' copied';
console.log(`${s1} => ${s2}`);

