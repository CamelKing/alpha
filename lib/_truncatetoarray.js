"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halfWordLen = 3;
function _truncateToArray(input, len, pad = '...') {
    if (!len || !input || len <= 0) {
        return ['', ''];
    }
    if (input.length <= len) {
        return [input.slice(0), ''];
    }
    if (pad === '...') {
        pad = len > exports.halfWordLen * 3 ? '...' : '…';
    }
    const padLen = pad.length > exports.halfWordLen ? exports.halfWordLen : pad.length;
    pad = pad.substr(0, padLen);
    if (len <= padLen) {
        return ['', pad.substr(0, len)];
    }
    return [input.substr(0, len - padLen), (pad || '')];
}
//# sourceMappingURL=_truncatetoarray.js.map