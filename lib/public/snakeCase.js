"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function snakeCase(input) {
    if (!input)
        return '';
    const output = input.toLowerCase().split(constants_1.reWordBreak)
        .filter((word) => !!word).join('_');
    return output;
}
exports.snakeCase = snakeCase;
//# sourceMappingURL=snakeCase.js.map