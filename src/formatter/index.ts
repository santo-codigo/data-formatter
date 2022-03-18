import {
  camelCaseForSnakeCaseFormatter,
  lowerCaseFormatter,
  snakeCaseForCamelCaseFormatter,
} from "./formatter";
import { handleData } from "./data-handler";

export const convertSnakeCaseKeysToCamelCase = <T = any>(data: any): T =>
  handleData(data, snakeCaseForCamelCaseFormatter);

export const convertCamelCaseKeysToSnakeCase = <T = any>(data: any): T =>
  handleData(data, camelCaseForSnakeCaseFormatter);

export const convertToLowerCase = <T = any>(data: any): T =>
  handleData(data, lowerCaseFormatter);
