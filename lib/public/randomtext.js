"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomText(len = 5) {
    let str = '';
    do {
        str += Math.random().toString(36).substr(2, len);
    } while (str.length < len);
    return str.substr(0, len);
}
exports.randomText = randomText;
//# sourceMappingURL=randomtext.js.map