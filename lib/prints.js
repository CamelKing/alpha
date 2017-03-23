"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const alpha_1 = require("./alpha");
function prints(...args) {
    args.forEach((arg, i) => {
        switch (alpha_1.theTypeOf(arg)) {
            case 'object':
                let sep = '';
                args[i] = '{ ';
                Object.keys(arg).forEach((key) => {
                    args[i] += sep + prints(key) + ': ' + prints(arg[key]);
                    sep = ', ';
                });
                args[i] += ' }';
                break;
            case 'function':
                args[i] = prints(arg());
                break;
            case 'date':
                args[i] = arg.toLocaleString();
                break;
            default:
                break;
        }
    });
    return `${util.format.apply(null, args)}`;
}
exports.prints = prints;
//# sourceMappingURL=prints.js.map