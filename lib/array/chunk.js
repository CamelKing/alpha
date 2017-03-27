"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunk(array, size) {
    size = Math.max(size, 0);
    const input = array && array.slice(0) ? array : [];
    const { length } = input;
    if (!length)
        return [];
    if (size <= 1)
        return input;
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