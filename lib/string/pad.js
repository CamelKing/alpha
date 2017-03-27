"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = ' ';
const alpha_1 = require("../alpha");
var Align;
(function (Align) {
    Align[Align["left"] = 0] = "left";
    Align[Align["center"] = 1] = "center";
    Align[Align["right"] = 2] = "right";
})(Align = exports.Align || (exports.Align = {}));
;
function pad(input, len, pad, align) {
    let output = input.slice(0);
    if (len > input.length) {
        const padChar = pad || exports.Space;
        const padText = padChar[0].repeat(len - output.length);
        switch (align) {
            case Align.right:
                output = padText + input;
                break;
            case Align.center:
                const plen = padText.length;
                const left = alpha_1.round(plen / 2, 0);
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