"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formateToLowerCase = exports.formateCamelCaseKeysForSnakeCase = exports.formateSnakeCaseKeysForCamelCase = void 0;
const formatter_1 = require("./formatter");
const recursive_data_converter_1 = require("./recursive-data-converter");
const formateSnakeCaseKeysForCamelCase = (data) => (0, recursive_data_converter_1.recursiveDataConvertFilterLayer)(data, formatter_1.snakeCaseForCamelCaseFormatter);
exports.formateSnakeCaseKeysForCamelCase = formateSnakeCaseKeysForCamelCase;
const formateCamelCaseKeysForSnakeCase = (data) => (0, recursive_data_converter_1.recursiveDataConvertFilterLayer)(data, formatter_1.camelCaseForSnakeCaseFormatter);
exports.formateCamelCaseKeysForSnakeCase = formateCamelCaseKeysForSnakeCase;
const formateToLowerCase = (data) => (0, recursive_data_converter_1.recursiveDataConvertFilterLayer)(data, formatter_1.toLowerCaseFormatter);
exports.formateToLowerCase = formateToLowerCase;
//# sourceMappingURL=index.js.map