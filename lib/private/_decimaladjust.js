"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports._decimalAdjust = _decimalAdjust;
//# sourceMappingURL=_decimaladjust.js.map