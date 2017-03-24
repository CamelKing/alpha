"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _value = 'value';
const _proto = '__proto__';
class XCopy {
    constructor() {
        this.known = [];
        this.blown = [];
        this.foundIndex = -1;
        return this;
    }
    deep(source) {
        const me = this;
        const target = me.makeNew(source);
        me.known = [source];
        me.blown = [target];
        me.deepPropertyCopy(source, target);
        me.cleanUp();
        return target;
    }
    shallow(source) {
        const me = this;
        const target = me.makeNew(source);
        me.shallowPropertyCopy(source, target);
        return target;
    }
    shallowPropertyCopy(source, target) {
        const me = this;
        const descriptors = {};
        const keys = Reflect.ownKeys(source);
        keys.forEach(function (key) {
            const descriptor = Object.getOwnPropertyDescriptor(source, key);
            me.upsertDescriptorKey(descriptors, key, descriptor);
        });
        Object.defineProperties(target, descriptors);
    }
    cleanUp() {
        this.known = [];
        this.blown = [];
        this.foundIndex = -1;
    }
    upsertDescriptorKey(descriptors, key, value) {
        if (key in descriptors) {
            Object.defineProperty(descriptors, key, { configurable: true, enumerable: true, value });
        }
        else {
            descriptors[key] = value;
        }
    }
    makeNew(source, descriptors) {
        const newObj = Array.isArray(source) ?
            [] : Object.create(Object.getPrototypeOf(source));
        return descriptors ?
            Object.defineProperties(newObj, descriptors) : newObj;
    }
    deepPropertyCopy(source, target) {
        const me = this;
        const descriptors = {};
        const keys = Reflect.ownKeys(source);
        keys.forEach(function (key) {
            const descriptor = Object.getOwnPropertyDescriptor(source, key);
            if (_value in descriptor) {
                me.deepValueCopy(descriptor);
            }
            me.upsertDescriptorKey(descriptors, key, descriptor);
        });
        Object.defineProperties(target, descriptors);
    }
    deepValueCopy(descriptor) {
        const me = this;
        const value = descriptor[_value];
        if (me.notRecursiveObject(value)) {
            descriptor[_value] = me.makeNew(value);
            me.deepPropertyCopy(value, descriptor[_value]);
            me.blown[me.known.indexOf(value)] = descriptor[_value];
        }
        else if (-1 < me.foundIndex && me.foundIndex in me.blown) {
            descriptor[_value] = me.blown[me.foundIndex];
        }
    }
    notRecursiveObject(value) {
        const me = this;
        if (me.isValidObject(value)) {
            me.foundIndex = me.known.indexOf(value);
            if (me.foundIndex === -1) {
                return (me.known.push(value) > 0);
            }
        }
        return false;
    }
    isValidObject(value) {
        return (typeof value === 'object' && value !== null);
    }
}
const copy = new XCopy;
exports.deepCopy = copy.deep;
exports.shallowCopy = copy.shallow;
//# sourceMappingURL=copy.js.map