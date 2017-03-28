"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thetypeof_1 = require("./thetypeof");
function stringify(input) {
    let str;
    const type = thetypeof_1.theTypeOf(input);
    switch (type) {
        case 'function':
            str = stringify(input());
            break;
        case 'symbol':
        case 'promise':
        case 'undefined':
        case 'null':
            str = '';
            break;
        default:
            str = JSON.stringify(input, errorReplacer);
            break;
    }
    return str.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
exports.stringify = stringify;
function errorReplacer(key, value) {
    if (value instanceof Error) {
        const error = {};
        Object.getOwnPropertyNames(value)
            .forEach(function (vkey) {
            error[vkey] = value[vkey];
        });
        return error;
    }
    else {
        return value;
    }
}
//# sourceMappingURL=stringify.js.map