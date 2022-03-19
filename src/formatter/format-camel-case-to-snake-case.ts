import { applyFunctionRecursively } from '@/utils';

import { Data } from './types';

const formatCamelCaseToSnakeCase = (object: object): object => {
  if (!object) return object;

  const camelCaseRegex = /(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])/g;

  const entries = Object.entries(object).map(([key, value]) => {
    const keyInSnakeCase = key.replace(
      camelCaseRegex,
      (value) => `_${value.toLowerCase()}`
    );

    return [keyInSnakeCase, value];
  });

  return Object.fromEntries(entries);
};

export const convertCamelCaseKeysToSnakeCase = <T = any>(data: Data): T =>
  applyFunctionRecursively(data, formatCamelCaseToSnakeCase);
