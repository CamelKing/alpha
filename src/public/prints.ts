/**
 * Format a series of arguments and produce a formated string
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {...any[]} args
 * @returns {string}
 */

import * as util from 'util';

import { theTypeOf } from '../alpha';

export function prints(...args: any[]): string {

  const input: any[] = args.slice(0);

  input.forEach((item: any, i: number) => {

    switch (theTypeOf(item)) {

      case 'object':

        let sep: string = '';
        input[i] = '{ ';
        Object.keys(item).forEach((key: any) => {
          input[i] += sep + prints(key) + ': ' + prints(item[key]);
          sep = ', ';
        });
        input[i] += ' }';
        break;

      case 'function':
        input[i] = prints(item());
        break;

      case 'date':
        input[i] = item.toLocaleString();
        break;

      default:
        break;
    }

  });

  return `${util.format.apply(null, input)}`;
}
