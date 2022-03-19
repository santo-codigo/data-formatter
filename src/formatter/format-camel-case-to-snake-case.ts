import { applyFunctionRecursively, isPromise } from '@/utils';

import { Data, GenericObject, Options } from './types';

const formatCamelCaseToSnakeCase = <T = any>(
  object: GenericObject | any
): T => {
  if (!object || typeof object !== 'object' || isPromise(object)) return object;

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

export const convertCamelCaseKeysToSnakeCase = <T = any>(
  data: Data,
  options?: Options
): T => {
  if (options?.recursive === false) return formatCamelCaseToSnakeCase(data);
  return applyFunctionRecursively(data, formatCamelCaseToSnakeCase);
};
