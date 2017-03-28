"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theTypeOf_1 = require("./theTypeOf");
function toObject(anyVar) {
    let plainObj = {};
    const type = theTypeOf_1.theTypeOf(anyVar);
    switch (type) {
        case 'undefined':
        case 'null':
            break;
        case 'function':
            if (anyVar.name) {
                plainObj[anyVar.name] = anyVar;
            }
            else {
                plainObj[type] = anyVar;
            }
            break;
        case 'error':
            plainObj = new Error(anyVar.message);
            Object.getOwnPropertyNames(anyVar).forEach((key) => {
                plainObj[key] = anyVar[key];
            });
            break;
        case 'object':
            Object.getOwnPropertyNames(anyVar).forEach((key) => {
                plainObj[key] = anyVar[key];
            });
            break;
        case 'array':
            plainObj[type] = Array.from(anyVar);
            break;
        case 'number':
            if (!isNaN(anyVar)) {
                plainObj[type] = anyVar;
            }
            break;
        default:
            plainObj[type] = anyVar;
            break;
    }
    return plainObj;
}
exports.toObject = toObject;
;
//# sourceMappingURL=toObject.js.map