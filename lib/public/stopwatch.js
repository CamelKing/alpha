"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timer_1 = require("./timer");
const swName = 'casio';
const tName = 'g-shock';
class Stopwatch {
    constructor() {
        this._name = swName;
        return exports.stopwatch ? exports.stopwatch : this;
    }
    start(name = tName) {
        if (!this[name]) {
            this[name] = new timer_1.Timer(name);
        }
        return this[name].start();
    }
    stop(name = tName) {
        return this[name] ? this[name].stop() : null;
    }
    delete(name = tName) {
        delete this[name];
    }
    get name() { return this._name; }
}
exports.Stopwatch = Stopwatch;
exports.stopwatch = new Stopwatch();
//# sourceMappingURL=stopwatch.js.map