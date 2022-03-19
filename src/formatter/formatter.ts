import { capitalize } from "../utils";

export const formatSnakeCaseToCamelCase = (object: object): object => {
  if (!object) return object;

  const entries = Object.entries(object).map(([key, value]) => {
    const splitKey = key.split("_");

    const keyInCamelCase = splitKey
      .map((value, index) => (index > 0 ? capitalize(value) : value))
      .join("");

    return [keyInCamelCase, value];
  });

  return Object.fromEntries(entries);
};

export const formatCamelCaseToSnakeCase = (object: object): object => {
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

export const formatToLowerCase = (object: object): object => {
  if (!object) return object;

  const entries = Object.entries(object).map(([key, value]) => {
    const keyToLowerCase = String(key).toLocaleLowerCase();
    return [keyToLowerCase, value];
  });

  return Object.fromEntries(entries);
};
