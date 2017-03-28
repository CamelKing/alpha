"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compact(input) {
    const output = [];
    let inIndex = -1;
    let outIndex = 0;
    const length = input === null || input === undefined ? 0 : input.length;
    while (++inIndex < length) {
        const value = input[inIndex];
        if (value) {
            output[outIndex++] = (Array.isArray(value)) ? compact(value) : value;
        }
    }
    return output;
}
exports.compact = compact;
//# sourceMappingURL=compact.js.map