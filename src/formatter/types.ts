export type GenericObject = { [key: string]: any };

export type Data = GenericObject | GenericObject[] | Array<any> | object;
export type Options = { recursive: boolean };
