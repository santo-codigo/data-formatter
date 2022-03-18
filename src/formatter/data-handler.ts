import { isPromise } from "../utils";

export const handleData = (data: any, handler: Function): any => {
  if (isPromise(data)) return data;

  if (Array.isArray(data)) {
    return data.map((item) => applyHandler(item, handler));
  }

  if (data instanceof Date) return data;

  if (typeof data === "object") return applyHandler(data, handler);

  return data;
};

export const applyHandler = (object: object, formatter: Function): object => {
  if (isPromise(object)) return object;
  if (!object) return object;

  const formattedObject = formatter(object, formatter);
  const entries = Object.entries(formattedObject);

  const formattedEntries = entries.map(([key, value]) => {
    if (Array.isArray(value)) {
      const newArray = handleData(value, formatter);
      return [key, newArray];
    }

    if (object instanceof Date) return [key, value];

    if (typeof value === "object") {
      const newObject = handleData(value, formatter);
      return [key, newObject];
    }

    return [key, value];
  });

  return Object.fromEntries(formattedEntries);
};
