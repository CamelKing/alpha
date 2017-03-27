"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const round_1 = require("../number/round");
function pad(input, len, pad, align) {
    let output = input.slice(0);
    if (len > input.length) {
        const padChar = pad || constants_1.Space;
        const padText = padChar[0].repeat(len - output.length);
        switch (align) {
            case constants_1.Align.right:
                output = padText + input;
                break;
            case constants_1.Align.center:
                const plen = padText.length;
                const left = round_1.round(plen / 2, 0);
                const right = plen - left;
                output = padChar[0].repeat(left) + output + padChar[0].repeat(right);
                break;
            default:
                output += padText;
                break;
        }
    }
    return output;
}
exports.pad = pad;
//# sourceMappingURL=pad.js.map