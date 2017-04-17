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
 * @refactor April 17, 2017
 *
 */

export function clamp(input: number, upper: number, lower?: number): number {

  if (input == null) return input;
  lower = lower || -Infinity;
  if (upper < lower)[upper, lower] = [lower, upper];
  return input > upper ? upper : input < lower ? lower : input;

}
