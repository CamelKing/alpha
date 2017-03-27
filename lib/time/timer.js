"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomtext_1 = require("../string/randomtext");
class Timer {
    constructor(name) {
        this._name = name || 'timer' + randomtext_1.randomText(5);
        this._start = null;
        this._ms = undefined;
        this._s = undefined;
        return this;
    }
    start() {
        if (!this._start) {
            this._start = process.hrtime();
            this._ms = undefined;
            this._s = undefined;
        }
        return this;
    }
    stop() {
        if (this._start) {
            const end = process.hrtime(this._start);
            this._ms = (end[0] * 1e9 + end[1]) / 1000000;
            this._s = this._ms / 1000;
            this._start = null;
        }
        return this;
    }
    get s() { return this._s; }
    get ms() { return this._ms; }
    get name() { return this._name; }
}
exports.Timer = Timer;
//# sourceMappingURL=timer.js.map