"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function kebabCase(input) {
    if (!input)
        return '';
    const output = input.toLowerCase().split(constants_1.reWordBreak)
        .filter((word) => !!word).join('-');
    return output;
}
exports.kebabCase = kebabCase;
//# sourceMappingURL=kebabCase.1.js.map