"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(array) {
    let output = [].concat.apply([], array.slice(0));
    let found;
    do {
        const len = output.length;
        found = -1;
        for (let i = 0; (i < len) && (found === -1); i++) {
            if (Array.isArray(output[i])) {
                found = i;
            }
        }
        if (found !== -1) {
            output[found] = [].concat.apply([], output[found]);
            output = [].concat.apply([], output);
        }
    } while (found !== -1);
    return (output);
}
exports.flatten = flatten;
//# sourceMappingURL=flatten.js.map