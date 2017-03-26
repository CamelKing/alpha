"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("../alpha");
const _alpha_1 = require("../_alpha");
function toParagraph(input, colsize) {
    const firstPass = input.split('\n');
    const finalPass = [];
    firstPass.forEach((line) => {
        while (line.length > colsize) {
            const newLines = _alpha_1._hyphenateToArray(line, colsize, '-');
            finalPass.push(alpha_1.leftAlign(alpha_1.trimLeft(newLines.join('')), colsize));
            line = line.substr(newLines[0].length);
        }
        finalPass.push(alpha_1.trim(line));
    });
    return finalPass;
}
exports.toParagraph = toParagraph;
//# sourceMappingURL=toparagraph.js.map