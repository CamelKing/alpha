"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HalfWordLen = 3;
function _truncateToArray(input, len, pad = '...') {
    if (!len || !input || len <= 0) {
        return ['', ''];
    }
    if (input.length <= len) {
        return [input.slice(0), ''];
    }
    if (pad === '...') {
        pad = len > exports.HalfWordLen * 3 ? '...' : '…';
    }
    const padLen = pad.length > exports.HalfWordLen ? exports.HalfWordLen : pad.length;
    pad = pad.substr(0, padLen);
    if (len <= padLen) {
        return ['', pad.substr(0, len)];
    }
    return [input.substr(0, len - padLen), pad];
}
exports._truncateToArray = _truncateToArray;
//# sourceMappingURL=_truncatetoarray.js.map