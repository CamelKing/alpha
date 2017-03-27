"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timer_1 = require("./timer");
const swName = 'casio';
const tName = 'g-shock';
class Casio {
    constructor() {
        this._name = swName;
        return exports.casio ? exports.casio : this;
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
exports.Casio = Casio;
exports.casio = new Casio();
//# sourceMappingURL=casio.js.map