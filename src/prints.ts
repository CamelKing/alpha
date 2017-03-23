import * as util from 'util';

import { theTypeOf } from './alpha';

/**
 * Format a series of arguments and produce a formated string
 *
 * @export
 * @param {...any[]} args
 * @returns {string}
 */

export function prints(...args: any[]): string {

  args.forEach((arg: any, i: number) => {

    switch (theTypeOf(arg)) {

      case 'object':

        let sep: string = '';
        args[i] = '{ ';
        Object.keys(arg).forEach((key: any) => {
          args[i] += sep + prints(key) + ': ' + prints(arg[key]);
          sep = ', ';
        });
        args[i] += ' }';
        break;

      case 'function':
        args[i] = prints(arg());
        break;

      case 'date':
        args[i] = arg.toLocaleString();
        break;

      default:
        break;
    }

  });

  return `${util.format.apply(null, args)}`;
}
