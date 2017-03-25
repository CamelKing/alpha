/**
 * Produce a object from a stringify string in JSON format.
 * The reversal of the stringify() function.
 *
 * Note: (1) the function will reconstruct an error object based on
 *           the existence of some keys. This is not fool proof but
 *           should be good enough for in house needs.
 *
 *
 * @since 0.0.1
 * @category Object
 *
 * @export
 * @param {string} json
 * @returns {object}
 */

export function objectify(json: string): object {
  const jO: object = JSON.parse(json);
  if (jO.hasOwnProperty('message') && jO.hasOwnProperty('stack')) {
    const eO: Error = new Error(jO['message']);
    // must use this method to copy the non enumerable property of
    // an error object
    Object.getOwnPropertyNames(jO).forEach((key: string) => {
      eO[key] = jO[key];
    });
    return eO;
  }
  return jO;
};
