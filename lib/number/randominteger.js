"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomInteger(n1, n2 = 0) {
    if (n1 < n2) {
        const tmp = n1;
        n1 = n2;
        n2 = tmp;
    }
    return Math.floor(Math.random() * (n1 - n2 + 1) + n2);
}
exports.randomInteger = randomInteger;
//# sourceMappingURL=randominteger.js.map