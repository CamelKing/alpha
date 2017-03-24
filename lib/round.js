"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("./alpha");
function round(value, exp) {
    return _round(value, exp);
}
exports.round = round;
function roundDown(value, exp) {
    return _round(value, exp, 'floor');
}
exports.roundDown = roundDown;
function roundUp(value, exp) {
    return _round(value, exp, 'ceil');
}
exports.roundUp = roundUp;
const defaultRoundOperand = 'round';
function _round(value, exp, ops) {
    switch (alpha_1.theTypeOf(value)) {
        case 'function':
            return _round(value(), exp, ops);
        case 'number':
            return _decimalAdjust(value, exp, ops);
        case 'string':
            return _decimalAdjust(+value, exp, ops);
        default:
            return NaN;
    }
}
function _decimalAdjust(value, exp, ops) {
    if (!['round', 'ceil', 'floor'].includes(ops)) {
        ops = 'round';
    }
    exp = exp || 0;
    if (isNaN(value) || (exp % 1 !== 0)) {
        return NaN;
    }
    if (exp === 0) {
        return Math[ops](value);
    }
    const negative = (value < 0 ? -1 : 1);
    value *= negative;
    const valueStr = value.toExponential().split('e');
    const base = +valueStr[0];
    let exponent = +valueStr[1];
    exponent -= exp;
    const expForm = +(base + 'e' + exponent);
    const rounded = Math[ops](expForm) * negative;
    return +(rounded + 'e' + exp);
}
//# sourceMappingURL=round.js.map