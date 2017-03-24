"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("./alpha");
function makeAwait(fnPassedIn) {
    return (() => alpha_1.makePromise(fnPassedIn));
}
exports.makeAwait = makeAwait;
//# sourceMappingURL=makeawait.js.map