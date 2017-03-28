"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function lowerFirst(input) {
    return input ?
        input.replace(constants_1.reFirstWord, (match) => match[0].toLowerCase() + match.slice(1)) : '';
}
exports.lowerFirst = lowerFirst;
//# sourceMappingURL=lowerFirst.js.map