"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _value = 'value';
const _proto = '__proto__';
function clone(source) {
    const target = Array.isArray(source) ?
        [] : Object.create(Object.getPrototypeOf(source));
    const known = [source];
    const copied = [target];
    _deepPropertyCopy(source, target, known, copied);
    return target;
}
exports.clone = clone;
function _deepPropertyCopy(source, target, known, copied) {
    const descriptorMap = {};
    const keys = Reflect.ownKeys(source);
    keys.forEach(function (key) {
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        if (_value in descriptor) {
            _deepValueCopy(descriptor, known, copied);
        }
        Object.defineProperty(descriptorMap, key, { configurable: true, enumerable: true, value: descriptor });
    });
    Object.defineProperties(target, descriptorMap);
}
function _deepValueCopy(descriptor, known, copied) {
    const value = descriptor[_value];
    let foundIndex = -1;
    let isNew = false;
    if (typeof value === 'object' && value !== null) {
        foundIndex = known.indexOf(value);
        isNew = (foundIndex === -1 && known.push(value) > 0);
    }
    if (isNew) {
        descriptor[_value] = Array.isArray(value) ?
            [] : Object.create(Object.getPrototypeOf(value));
        _deepPropertyCopy(value, descriptor[_value], known, copied);
        copied[known.indexOf(value)] = descriptor[_value];
    }
    else if (-1 < foundIndex && foundIndex in copied) {
        descriptor[_value] = copied[foundIndex];
    }
}
//# sourceMappingURL=clone.js.map