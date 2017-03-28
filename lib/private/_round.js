"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _decimaladjust_1 = require("./_decimaladjust");
const thetypeof_1 = require("../public/thetypeof");
function _round(value, exp, ops) {
    switch (thetypeof_1.theTypeOf(value)) {
        case 'function':
            return _round(value(), exp, ops);
        case 'number':
            return _decimaladjust_1._decimalAdjust(value, exp, ops);
        case 'string':
            return _decimaladjust_1._decimalAdjust(+value, exp, ops);
        default:
            return NaN;
    }
}
exports._round = _round;
//# sourceMappingURL=_round.js.map