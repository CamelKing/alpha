import { capitalise } from './capitalise';
import { reWordBreak } from '../constants';

export function camelCase(input: string): string {
  if (!input) return '';
  const output: string = input.split(reWordBreak)
    .map((word: string) => capitalise(word))
    .join('');
  return output ? output[0].toLowerCase() + output.slice(1) : '';
}
