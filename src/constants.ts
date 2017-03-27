export * from './_constants';

// @Files
export type FnLSFilter = { (filename: string): string };

// @String
export enum Align { left, center, right };
export const Space: string = ' ';

// @Async
export type FnPromiseFactory = () => Promise<any>;
export type FnResolve = (value?: {} | PromiseLike<{}>) => void;
export type FnReject = (error?: any) => void;
