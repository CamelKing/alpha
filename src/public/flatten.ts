/**
 * flatten deeply nested array into a single dimension array
 *
 * Note: (1) not using recursive call because after 100k nesting
 *           levels, the function will result in out of stack
 *           error.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} nArr
 * @returns {any[]}
 */

export function flatten(array: any[]): any[] {

  // make a copy of the passed in array (so we wont change it)
  // call concat to remove one level from array
  let output: any[] = [].concat.apply([], array.slice(0));

  // loop thru from left to right and flattening along the way
  // Feb 16: changed from a recursive to loop to avoid heap
  //         stack error when facing large nested array

  let found: number = 0;

  let more: boolean = true;

  while (more) {

    const len: number = output.length;

    more = false;

    for (let i: number = found; (i < len) && !more; i++) {
      if (Array.isArray(output[i])) { more = true; found = i; }
    }

    if (more) {
      // must always call in pairs to work.
      // line 1: remove one level of nesting at the
      //         place we found a nested array, store the resulting
      //         array elemenets (potentially further nested) at nArr[Found]
      // line 2: remove the level of nesting at the place
      //         we found the array @ nArr[found[]]
      output[found] = [].concat.apply([], output[found]);
      output = [].concat.apply([], output);
    }

  }

  return (output);

}

