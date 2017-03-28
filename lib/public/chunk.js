"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunk(array, size = 1) {
    const input = array ? array : [];
    const { length } = input;
    if (length <= 0)
        return [];
    if (size <= 0)
        return array.slice(0);
    size = Math.max(size, 1);
    const output = new Array(Math.ceil(length / size));
    let outIndex = 0;
    let inIndex = 0;
    while (inIndex < length) {
        output[outIndex++] = input.slice(inIndex, inIndex += size);
    }
    return output;
}
exports.chunk = chunk;
//# sourceMappingURL=chunk.js.map