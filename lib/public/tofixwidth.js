"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const pad_1 = require("./pad");
const truncate_1 = require("./truncate");
function toFixWidth(input, len, align) {
    return pad_1.pad(truncate_1.truncate(input, len), len, constants_1.Space, align || constants_1.Align.left);
}
exports.toFixWidth = toFixWidth;
//# sourceMappingURL=toFixWidth.js.map