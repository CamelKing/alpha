/**
 * Check if the input is within [from, upto] but does not include upto. 
 *
 * From and Upto can be in any order, the function will sort it out.
 *
 * If upto is omitted, then the function check for [0, from] (excl. from)
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor April 17, 2017
 *
 */

export function inRange(input: number, from: number, upto?: number): boolean {

  if (input == null) return false;
  if (!upto) { upto = from; from = 0; }
  if (from > upto)[from, upto] = [upto, from];
  return (input >= from && input < upto);

}
