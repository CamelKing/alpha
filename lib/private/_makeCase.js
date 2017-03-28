"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalise_1 = require("../public/capitalise");
const constants_1 = require("../constants");
function _makeCase(input, mode) {
    if (!input)
        return '';
    let baseCase;
    let connecting;
    let mixCase;
    let lowerFirst;
    switch (mode) {
        case 'PascalCase':
        case 'UpperCamelCase':
            baseCase = 'toLowerCase';
            connecting = '';
            mixCase = true;
            lowerFirst = false;
            break;
        case 'kebab-case':
        case 'lower-kebab-case':
            baseCase = 'toLowerCase';
            connecting = '-';
            mixCase = false;
            lowerFirst = true;
            break;
        case 'snake_case':
        case 'lower_snake_case':
            baseCase = 'toLowerCase';
            connecting = '_';
            mixCase = false;
            lowerFirst = true;
            break;
        case 'COBOL-CASE':
        case 'UPPER-KEBAB-CASE':
            baseCase = 'toUpperCase';
            connecting = '-';
            mixCase = false;
            lowerFirst = false;
            break;
        case 'UPPER_SNAKE_CASE':
        case 'SCREAMING_SNAKE_CASE':
            baseCase = 'toUpperCase';
            connecting = '_';
            mixCase = false;
            lowerFirst = false;
            break;
        case 'camelCase':
        case 'lowerCamelCase':
        default:
            baseCase = 'toLowerCase';
            connecting = '';
            mixCase = true;
            lowerFirst = true;
            break;
    }
    const output = input.split(constants_1.reAllWordBreaks)
        .filter((word) => !!word)
        .map((word) => mixCase ? capitalise_1.capitalise(word) : word[baseCase]())
        .join(connecting);
    if (output.length === 0)
        return '';
    return (lowerFirst ? output[0].toLowerCase() : output[0].toUpperCase()) + output.slice(1);
}
exports._makeCase = _makeCase;
//# sourceMappingURL=_makeCase.js.map