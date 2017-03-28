"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("../alpha");
function rightAlign(input, len, padTxt) {
    return alpha_1.pad(input, len, padTxt, alpha_1.Align.right);
}
exports.rightAlign = rightAlign;
//# sourceMappingURL=rightalign.js.map