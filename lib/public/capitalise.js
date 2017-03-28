"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capitalise(input) {
    if (!input)
        return '';
    return input[0].toUpperCase()
        + (input.length > 1 ? input.slice(1).toLowerCase() : '');
}
exports.capitalise = capitalise;
//# sourceMappingURL=capitalise.js.map