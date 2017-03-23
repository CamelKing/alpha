/**
 * Generate random integer within the range of [x,y]
 *
 * @since 0.0.1
 * @category Maths
 *
 * @export
 * @param {number} n1
 * @param {number} [n2=0]
 * @returns {number}
 */

export function randomInteger(n1: number, n2: number = 0): number {
  if (n1 < n2) {
    const tmp: number = n1;
    n1 = n2;
    n2 = tmp;
  }
  return Math.floor(Math.random() * (n1 - n2 + 1) + n2);
}
