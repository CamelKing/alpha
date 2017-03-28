"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _decimalAdjust_1 = require("./_decimalAdjust");
const theTypeOf_1 = require("../public/theTypeOf");
function _round(value, exp, ops) {
    switch (theTypeOf_1.theTypeOf(value)) {
        case 'function':
            return _round(value(), exp, ops);
        case 'number':
            return _decimalAdjust_1._decimalAdjust(value, exp, ops);
        case 'string':
            return _decimalAdjust_1._decimalAdjust(+value, exp, ops);
        default:
            return NaN;
    }
}
exports._round = _round;
//# sourceMappingURL=_round.js.map