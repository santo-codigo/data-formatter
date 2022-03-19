import { isPromise } from ".";

export const applyFunctionRecursively = (data: any, func: Function): any => {
  const apply = (object: object): object => {
    if (!object || isPromise(object)) return object;
    if (object instanceof Date) return object;

    const changedObject = func(object);
    const entries = Object.entries(changedObject);
  
    const changedEntries = entries.map(([key, value]) => {
      if (Array.isArray(value)) {
        const newValue = applyFunctionRecursively(value, func);
        return [key, newValue];
      }
  
      if (typeof value === "object") {
        const newValue = applyFunctionRecursively(value, func);
        return [key, newValue];
      }
  
      return [key, value];
    });
  
    return Object.fromEntries(changedEntries);
  }

  if (isPromise(data)) return data;
  if (Array.isArray(data)) return data.map(apply);
  if (data instanceof Date) return data;
  if (typeof data === "object") return apply(data);
  return data;
};


