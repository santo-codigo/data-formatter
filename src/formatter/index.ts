import {
  formatCamelCaseToSnakeCase,
  formatToLowerCase,
  formatSnakeCaseToCamelCase,
} from "./formatter";
import { applyFunctionRecursively } from "../utils";
import { Data } from "./types";

export const convertSnakeCaseKeysToCamelCase = <T = any>(data: Data): T =>
  applyFunctionRecursively(data, formatSnakeCaseToCamelCase);

export const convertCamelCaseKeysToSnakeCase = <T = any>(data: Data): T =>
  applyFunctionRecursively(data, formatCamelCaseToSnakeCase);

export const convertToLowerCase = <T = any>(data: Data): T =>
  applyFunctionRecursively(data, formatToLowerCase);
