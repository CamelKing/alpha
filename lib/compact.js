"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compact(input) {
    const output = [];
    let inIndex = -1;
    let outIndex = 0;
    const length = input === null ? 0 : input.length;
    while (++inIndex < length) {
        const value = input[inIndex];
        if (value) {
            output[outIndex++] = value;
        }
    }
    return output;
}
exports.compact = compact;
//# sourceMappingURL=compact.js.map