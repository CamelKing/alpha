"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectify(json) {
    const jO = JSON.parse(json);
    if (jO.hasOwnProperty('message') && jO.hasOwnProperty('stack')) {
        const eO = new Error(jO['message']);
        Object.getOwnPropertyNames(jO).forEach((key) => {
            eO[key] = jO[key];
        });
        return eO;
    }
    return jO;
}
exports.objectify = objectify;
;
//# sourceMappingURL=objectify.js.map