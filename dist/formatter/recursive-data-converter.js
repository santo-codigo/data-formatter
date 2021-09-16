"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveDataConvertFilterLayer = void 0;
const recursiveDataConvertFilterLayer = (data, formatter) => {
    if (Array.isArray(data))
        return data.map((item) => {
            if (item instanceof Date) {
                return item;
            }
            if (typeof item === 'object')
                return recursiveDataConvertApplyLayer(item, formatter);
            return item;
        });
    if (data instanceof Date) {
        return data;
    }
    if (typeof data === 'object')
        return recursiveDataConvertApplyLayer(data, formatter);
    return data;
};
exports.recursiveDataConvertFilterLayer = recursiveDataConvertFilterLayer;
const recursiveDataConvertApplyLayer = (object, formatter) => {
    if (!object)
        return object;
    const objectWithNewKeys = formatter(object);
    const objectEntries = Object.entries(objectWithNewKeys);
    return objectEntries.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue;
        if (Array.isArray(value)) {
            const newValue = (0, exports.recursiveDataConvertFilterLayer)(value, formatter);
            return { ...accumulator, [key]: newValue };
        }
        if (object instanceof Date) {
            return { ...accumulator, [key]: value };
        }
        if (typeof value === 'object') {
            return {
                ...accumulator,
                [key]: (0, exports.recursiveDataConvertFilterLayer)(value, formatter),
            };
        }
        return { ...accumulator, [key]: value };
    }, {});
};
//# sourceMappingURL=recursive-data-converter.js.map