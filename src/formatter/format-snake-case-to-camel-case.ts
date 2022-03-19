import { applyFunctionRecursively, capitalize } from '@/utils';

import { Data } from './types';

const formatSnakeCaseToCamelCase = (object: object): object => {
  if (!object) return object;

  const entries = Object.entries(object).map(([key, value]) => {
    const splitKey = key.split('_');

    const keyInCamelCase = splitKey
      .map((value, index) => (index > 0 ? capitalize(value) : value))
      .join('');

    return [keyInCamelCase, value];
  });

  return Object.fromEntries(entries);
};

export const convertSnakeCaseKeysToCamelCase = <T = any>(data: Data): T =>
  applyFunctionRecursively(data, formatSnakeCaseToCamelCase);
