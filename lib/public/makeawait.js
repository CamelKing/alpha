"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makepromise_1 = require("./makepromise");
function makeAwait(fnPassedIn) {
    return (() => makepromise_1.makePromise(fnPassedIn));
}
exports.makeAwait = makeAwait;
//# sourceMappingURL=makeawait.js.map