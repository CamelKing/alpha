"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomInteger_1 = require("./randomInteger");
function randomText(len) {
    if (!len || len <= 0)
        len = randomInteger_1.randomInteger(5, 20);
    let str = '';
    do {
        str += Math.random().toString(36).substr(2, len);
    } while (str.length < len);
    return str.substr(0, len);
}
exports.randomText = randomText;
//# sourceMappingURL=randomText.js.map