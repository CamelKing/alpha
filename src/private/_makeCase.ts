/**
 *
 * private function to support the various xxxxCase() functions.
 * - camelCase()
 * - kebabCase()
 * - snakeCase()
 * - cobolCase()
 * - pascalCase()
 *
 * @since 0.0.1
 * @category String
 *
 * @export
 * @param {string} input
 * @param {string} mode
 * @returns {string}
 *
 */

import { capitalise } from '../public/capitalise';
import { reAllWordBreakers } from '../constants';
import { toWords } from '../public/toWords';

export function _makeCase(input: string, mode: string): string {

  if (!input) return '';

  let baseCase: string;
  let connecting: string;
  let mixCase: boolean;
  let lowerFirst: boolean;

  switch (mode) {

    case 'PascalCase':
    case 'UpperCamelCase':
      baseCase = 'toLowerCase';
      connecting = '';
      mixCase = true;
      lowerFirst = false;
      break;

    case 'kebab-case':
    case 'lower-kebab-case':
      baseCase = 'toLowerCase';
      connecting = '-';
      mixCase = false;
      lowerFirst = true;
      break;

    case 'snake_case':
    case 'lower_snake_case':
      baseCase = 'toLowerCase';
      connecting = '_';
      mixCase = false;
      lowerFirst = true;
      break;

    case 'COBOL-CASE':
    case 'UPPER-KEBAB-CASE':
      baseCase = 'toUpperCase';
      connecting = '-';
      mixCase = false;
      lowerFirst = false;
      break;

    case 'UPPER_SNAKE_CASE':
    case 'SCREAMING_SNAKE_CASE':
      baseCase = 'toUpperCase';
      connecting = '_';
      mixCase = false;
      lowerFirst = false;
      break;

    case 'camelCase':
    case 'lowerCamelCase':
    default:
      baseCase = 'toLowerCase';
      connecting = '';
      mixCase = true;
      lowerFirst = true;
      break;

  }

  // const output: string = input.split(reAllWordBreaks)
  //   .filter((word: any) => !!word)
  //   .map((word: string) => mixCase ? capitalise(word) : word[baseCase]())
  //   .join(connecting);

  const output: string = toWords(input)
    .map((word: string) => mixCase ? capitalise(word) : word[baseCase]())
    .join(connecting);

  if (output.length === 0) return '';

  return (lowerFirst ? output[0].toLowerCase() : output[0].toUpperCase()) + output.slice(1);

}
