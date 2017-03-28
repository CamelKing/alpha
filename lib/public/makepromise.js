"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theTypeOf_1 = require("./theTypeOf");
function makePromise(fnSync) {
    switch (theTypeOf_1.theTypeOf(fnSync)) {
        case 'function':
            return new Promise((resolve, reject) => {
                try {
                    resolve(fnSync());
                }
                catch (err) {
                    reject(err);
                }
            });
        case 'promise':
            return fnSync;
        default:
            return Promise.resolve(fnSync);
    }
}
exports.makePromise = makePromise;
//# sourceMappingURL=makePromise.js.map