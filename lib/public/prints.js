"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const alpha_1 = require("../alpha");
function prints(...args) {
    const input = args.slice(0);
    input.forEach((item, i) => {
        switch (alpha_1.theTypeOf(item)) {
            case 'object':
                let sep = '';
                input[i] = '{ ';
                Object.keys(item).forEach((key) => {
                    input[i] += sep + prints(key) + ': ' + prints(item[key]);
                    sep = ', ';
                });
                input[i] += ' }';
                break;
            case 'function':
                input[i] = prints(item());
                break;
            case 'date':
                input[i] = item.toLocaleString();
                break;
            default:
                break;
        }
    });
    return `${util.format.apply(null, input)}`;
}
exports.prints = prints;
//# sourceMappingURL=prints.js.map