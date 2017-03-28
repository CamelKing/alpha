"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _hyphenateToArray_1 = require("../private/_hyphenateToArray");
const leftAlign_1 = require("./leftAlign");
const trim_1 = require("./trim");
const trimLeft_1 = require("./trimLeft");
function toParagraph(input, colsize) {
    const firstPass = input.split('\n');
    const finalPass = [];
    firstPass.forEach((line) => {
        while (line.length > colsize) {
            const newLines = _hyphenateToArray_1._hyphenateToArray(line, colsize, '-');
            finalPass.push(leftAlign_1.leftAlign(trimLeft_1.trimLeft(newLines.join('')), colsize));
            line = line.substr(newLines[0].length);
        }
        finalPass.push(trim_1.trim(line));
    });
    return finalPass;
}
exports.toParagraph = toParagraph;
//# sourceMappingURL=toParagraph.js.map