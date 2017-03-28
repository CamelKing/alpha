"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("../_constants");
function _truncateToArray(input, len, pad = '...') {
    if (!len || !input || len <= 0) {
        return ['', ''];
    }
    if (input.length <= len) {
        return [input.slice(0), ''];
    }
    if (pad === '...') {
        pad = len > _constants_1.HalfWordLen * 3 ? '...' : '…';
    }
    const padLen = pad.length > _constants_1.HalfWordLen ? _constants_1.HalfWordLen : pad.length;
    pad = pad.substr(0, padLen);
    if (len <= padLen) {
        return ['', pad.substr(0, len)];
    }
    return [input.substr(0, len - padLen), pad];
}
exports._truncateToArray = _truncateToArray;
//# sourceMappingURL=_truncatetoarray.js.map