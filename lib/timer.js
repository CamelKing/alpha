"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tName = 'timer';
const swName = 'casio';
class StopWatch {
    constructor() {
        this._name = swName;
        return exports.casio ? exports.casio : this;
    }
    start(name = tName) {
        if (!this[name]) {
            this[name] = new Timer(name);
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
exports.StopWatch = StopWatch;
class Timer {
    constructor(name) {
        this._name = name || tName;
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
            this._ms = toMilleSeconds(end);
            this._s = toSeconds(this._ms);
            this._start = null;
        }
        return this;
    }
    get s() { return this._s; }
    get ms() { return this._ms; }
    get name() { return this._name; }
}
exports.Timer = Timer;
function toMilleSeconds(t) {
    return ((t[0] * 1e9 + t[1]) / 1000000);
}
function toSeconds(t) {
    return (t / 1000);
}
exports.casio = new StopWatch();
//# sourceMappingURL=timer.js.map