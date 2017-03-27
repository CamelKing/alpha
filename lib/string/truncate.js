"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _truncatetoarray_1 = require("../.private/string/_truncatetoarray");
function truncate(input, len, pad) {
    return _truncatetoarray_1._truncateToArray(input, len, pad).join('');
}
exports.truncate = truncate;
//# sourceMappingURL=truncate.js.map