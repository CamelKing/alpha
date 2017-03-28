"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const pad_1 = require("./pad");
function centerAlign(input, len, padTxt) {
    return pad_1.pad(input, len, padTxt, constants_1.Align.center);
}
exports.centerAlign = centerAlign;
//# sourceMappingURL=centerAlign.js.map