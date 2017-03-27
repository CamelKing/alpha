"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("../alpha");
function isTheSame(a, b) {
    let same = true;
    const ta = alpha_1.theTypeOf(a);
    const tb = alpha_1.theTypeOf(b);
    if (ta !== tb) {
        return false;
    }
    switch (ta) {
        case 'array':
            const lenA = a.length;
            if (lenA !== b.length) {
                return false;
            }
            for (let i = 0; i < lenA; i++) {
                if (!isTheSame(a[i], b[i])) {
                    return false;
                }
            }
            break;
        case 'error':
        case 'object':
            const keyA = Object.getOwnPropertyNames(a);
            const keyB = Object.getOwnPropertyNames(b);
            const lenKeyA = keyA.length;
            if (lenKeyA !== keyB.length) {
                return false;
            }
            for (let i = 0; i < lenKeyA; i++) {
                const key = keyA[i];
                if (keyB.indexOf(key) < 0) {
                    return false;
                }
                if (!isTheSame(a[key], b[key])) {
                    return false;
                }
            }
            break;
        case 'date':
            same = (a.getTime() === b.getTime());
            break;
        case 'function':
            same = isTheSame(a(), b());
            break;
        case 'symbol':
        case 'number':
        case 'string':
        case 'boolean':
        case 'null':
            same = (a === b);
            break;
        case 'undefined':
            same = true;
            break;
        case 'promise':
        case 'nan':
        default:
            same = false;
            break;
    }
    return same;
}
exports.isTheSame = isTheSame;
//# sourceMappingURL=isthesame.js.map