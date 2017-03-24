"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("./alpha");
function makePromise(fnSync) {
    switch (alpha_1.theTypeOf(fnSync)) {
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
//# sourceMappingURL=makepromise.js.map