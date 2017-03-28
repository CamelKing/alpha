"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _constants_1 = require("../_constants");
function _hyphenateToArray(input, len, hyphen) {
    hyphen = hyphen || _constants_1.Hyphen;
    if (!input || len <= 0) {
        return ['', ''];
    }
    else if (input.length <= len) {
        return [input.slice(0), ''];
    }
    const avgWordLen = (len <= (_constants_1.HalfWordLen * 4 + 1)) ? len : _constants_1.HalfWordLen * 2;
    let lineBreak = input.search(/\n/);
    if (lineBreak < 0) {
        lineBreak = input.length;
    }
    if (lineBreak <= len) {
        return [input.substr(0, lineBreak + 1), ''];
    }
    const wordBreakBefore = input.substr(0, len).search(/\s+(?!.*\s+)/);
    const wordBreakAfter = len
        + input.substr(len, lineBreak).search(/\S/);
    if (wordBreakBefore === len - 1 || wordBreakAfter > len) {
        return [input.substr(0, len), ''];
    }
    if (wordBreakBefore <= len - avgWordLen) {
        return [input.substr(0, len - hyphen.length), hyphen];
    }
    return [input.substr(0, wordBreakBefore + 1), ''];
}
exports._hyphenateToArray = _hyphenateToArray;
//# sourceMappingURL=_hyphenateToArray.js.map