import { capitalize } from '../utils';

export const snakeCaseForCamelCaseFormatter = (object: object): object => {
  if (!object) return object;
  return Object.entries(object).reduce((accumulator, currentValue) => {
    const [key, value] = currentValue;

    const splitKey = key.split('_');

    const keyInCamelCase = splitKey
      .map((value, index) => (index > 0 ? capitalize(value) : value))
      .join('');

    return { ...accumulator, [keyInCamelCase]: value };
  }, {});
};

export const camelCaseForSnakeCaseFormatter = (object: object): object => {
  if (!object) return object;
  return Object.entries(object).reduce((accumulator, currentValue) => {
    const [key, value] = currentValue;

    const keyInSnakeCase = key.replace(/^[a-z]|[A-Z]/g, (value, index) =>
      index === 0 ? value.toLowerCase() : `_${value.toLowerCase()}`,
    );

    return { ...accumulator, [keyInSnakeCase]: value };
  }, {});
};

export const toLowerCaseFormatter = (object: object): object => {
  if (!object) return object;
  return Object.entries(object).reduce((accumulator, currentValue) => {
    const [key, value] = currentValue;

    const keyToLowerCase = String(key).toLocaleLowerCase();

    return { ...accumulator, [keyToLowerCase]: value };
  }, {});
};
