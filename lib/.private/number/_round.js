"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _alpha_1 = require("../../_alpha");
const alpha_1 = require("../../alpha");
function _round(value, exp, ops) {
    switch (alpha_1.theTypeOf(value)) {
        case 'function':
            return _round(value(), exp, ops);
        case 'number':
            return _alpha_1._decimalAdjust(value, exp, ops);
        case 'string':
            return _alpha_1._decimalAdjust(+value, exp, ops);
        default:
            return NaN;
    }
}
exports._round = _round;
//# sourceMappingURL=_round.js.map