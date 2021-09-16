"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowerCaseFormatter = exports.camelCaseForSnakeCaseFormatter = exports.snakeCaseForCamelCaseFormatter = void 0;
const utils_1 = require("../utils");
const snakeCaseForCamelCaseFormatter = (object) => {
    if (!object)
        return object;
    return Object.entries(object).reduce((accumulator, currentValue) => {
        const [key, value] = currentValue;
        const splitKey = key.split('_');
        const keyInCamelCase = splitKey
            .map((value, index) => (index > 0 ? (0, utils_1.capitalize)(value) : value))
            .join('');
        return { ...accumulator, [keyInCamelCase]: value };
    }, {});
};
exports.snakeCaseForCamelCaseFormatter = snakeCaseForCamelCaseFormatter;
const camelCaseForSnakeCaseFormatter = (object) => {
    if (!object)
        return object;
    return Object.entries(object).reduce((accumulator, currentValue) => {
        const [key, value] = currentValue;
        const keyInSnakeCase = key.replace(/^[a-z]|[A-Z]/g, (value, index) => index === 0 ? value.toLowerCase() : `_${value.toLowerCase()}`);
        return { ...accumulator, [keyInSnakeCase]: value };
    }, {});
};
exports.camelCaseForSnakeCaseFormatter = camelCaseForSnakeCaseFormatter;
const toLowerCaseFormatter = (object) => {
    if (!object)
        return object;
    return Object.entries(object).reduce((accumulator, currentValue) => {
        const [key, value] = currentValue;
        const keyToLowerCase = String(key).toLocaleLowerCase();
        return { ...accumulator, [keyToLowerCase]: value };
    }, {});
};
exports.toLowerCaseFormatter = toLowerCaseFormatter;
//# sourceMappingURL=formatter.js.map