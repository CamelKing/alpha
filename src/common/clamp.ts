/**
 * Clamp the numeric input value within a certain range, inclusively.
 *
 * Lower and Upper can be in any order, the function will sort it out.
 *
 * If lower is omitted, then the function will only check for upper limit.
 *
 * @since 0.1.0
 * @category Number
 *
 * @refactor 0.2.0 April 25, 2017
 *
 */

export function clamp(input: number, max: number, min?: number): number {

  if (input == null) return input;
  min = min || -Infinity;
  if (max < min)[max, min] = [min, max];
  return input > max ? max : input < min ? min : input;

}
