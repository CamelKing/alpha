"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makePromise_1 = require("./makePromise");
function makeAwait(fnPassedIn) {
    return (() => makePromise_1.makePromise(fnPassedIn));
}
exports.makeAwait = makeAwait;
//# sourceMappingURL=makeAwait.js.map