import { applyFunctionRecursively } from '@/utils';

import { Data } from './types';

const formatToLowerCase = (object: object): object => {
  if (!object) return object;

  const entries = Object.entries(object).map(([key, value]) => {
    const keyToLowerCase = String(key).toLocaleUpperCase();
    return [keyToLowerCase, value];
  });

  return Object.fromEntries(entries);
};

export const convertToUpperCase = <T = any>(data: Data): T =>
  applyFunctionRecursively(data, formatToLowerCase);
