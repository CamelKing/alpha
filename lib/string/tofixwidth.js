"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("../../src/alpha");
function toFixWidth(input, len, align) {
    return alpha_1.pad(alpha_1.truncate(input, len), len, alpha_1.Space, align || alpha_1.Align.left);
}
exports.toFixWidth = toFixWidth;
//# sourceMappingURL=tofixwidth.js.map