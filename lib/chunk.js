"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunk(input, size) {
    size = Math.max(size, 0);
    input = input || [];
    const { length } = input;
    if (!length)
        return [];
    if (size <= 1)
        return input.slice(0);
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