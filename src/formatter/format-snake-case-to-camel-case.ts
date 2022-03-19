import { applyFunctionRecursively, capitalize, isPromise } from '@/utils';

import { Data, GenericObject, Options } from './types';

const formatSnakeCaseToCamelCase = <T = any>(
  object: GenericObject | any
): T => {
  if (!object || typeof object !== 'object' || isPromise(object)) return object;

  const entries = Object.entries(object).map(([key, value]) => {
    const splitKey = key.split('_');

    const keyInCamelCase = splitKey
      .map((value, index) => (index > 0 ? capitalize(value) : value))
      .join('');

    return [keyInCamelCase, value];
  });

  return Object.fromEntries(entries);
};

export const convertSnakeCaseKeysToCamelCase = <T = any>(
  data: Data,
  options?: Options
): T => {
  if (options?.recursive === false) return formatSnakeCaseToCamelCase(data);
  return applyFunctionRecursively(data, formatSnakeCaseToCamelCase);
};
