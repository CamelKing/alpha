"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha_1 = require("../../src/alpha");
const swName = 'casio';
const tName = 'g-shock';
class Casio {
    constructor() {
        this._name = swName;
        return exports.casio ? exports.casio : this;
    }
    start(name = tName) {
        if (!this[name]) {
            this[name] = new alpha_1.Timer(name);
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
exports.Casio = Casio;
exports.casio = new Casio();
//# sourceMappingURL=stopwatch.js.map