import {
  camelCaseForSnakeCaseFormatter,
  toLowerCaseFormatter,
  snakeCaseForCamelCaseFormatter,
} from './formatter';
import { recursiveDataConvertFilterLayer } from './recursive-data-converter';

export const formateSnakeCaseKeysForCamelCase = (data: any) =>
  recursiveDataConvertFilterLayer(data, snakeCaseForCamelCaseFormatter);

export const formateCamelCaseKeysForSnakeCase = (data: any) =>
  recursiveDataConvertFilterLayer(data, camelCaseForSnakeCaseFormatter);

export const formateToLowerCase = (data: any) =>
  recursiveDataConvertFilterLayer(data, toLowerCaseFormatter);
