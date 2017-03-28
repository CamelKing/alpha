"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _truncateToArray_1 = require("../private/_truncateToArray");
function truncate(input, len, pad) {
    return _truncateToArray_1._truncateToArray(input, len, pad).join('');
}
exports.truncate = truncate;
//# sourceMappingURL=truncate.js.map