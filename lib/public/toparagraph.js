"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _hyphenatetoarray_1 = require("../private/_hyphenatetoarray");
const leftalign_1 = require("./leftalign");
const trim_1 = require("./trim");
const trimleft_1 = require("./trimleft");
function toParagraph(input, colsize) {
    const firstPass = input.split('\n');
    const finalPass = [];
    firstPass.forEach((line) => {
        while (line.length > colsize) {
            const newLines = _hyphenatetoarray_1._hyphenateToArray(line, colsize, '-');
            finalPass.push(leftalign_1.leftAlign(trimleft_1.trimLeft(newLines.join('')), colsize));
            line = line.substr(newLines[0].length);
        }
        finalPass.push(trim_1.trim(line));
    });
    return finalPass;
}
exports.toParagraph = toParagraph;
//# sourceMappingURL=toparagraph.js.map