import { reWordBreak } from '../constants';

export function snakeCase(input: string): string {
  if (!input) return '';
  const output: string = input.toLowerCase().split(reWordBreak)
    .filter((word: any) => !!word).join('_');
  return output;
}
