import { applyFunctionRecursively, isPromise } from '@/utils';

import { Data, GenericObject, Options } from './types';

const formatToUpperCase = <T = any>(object: GenericObject | any): T => {
  if (!object || typeof object !== 'object' || isPromise(object)) return object;

  const entries = Object.entries(object).map(([key, value]) => {
    const keyToLowerCase = String(key).toLocaleUpperCase();
    return [keyToLowerCase, value];
  });

  return Object.fromEntries(entries);
};

export const convertToUpperCase = <T = any>(
  data: Data,
  options?: Options
): T => {
  if (options?.recursive === false) return formatToUpperCase(data);
  return applyFunctionRecursively(data, formatToUpperCase);
};
