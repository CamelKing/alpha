"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalise_1 = require("./capitalise");
const constants_1 = require("../constants");
function camelCase(input) {
    if (!input)
        return '';
    const output = input.split(constants_1.reWordBreak)
        .map((word) => capitalise_1.capitalise(word))
        .join('');
    return output ? output[0].toLowerCase() + output.slice(1) : '';
}
exports.camelCase = camelCase;
//# sourceMappingURL=camelCase.js.map