export * from './_constants';
export declare type FnLSFilter = {
    (filename: string): string;
};
export declare enum Align {
    left = 0,
    center = 1,
    right = 2,
}
export declare const Space: string;
export declare type FnPromiseFactory = () => Promise<any>;
export declare type FnResolve = (value?: {} | PromiseLike<{}>) => void;
export declare type FnReject = (error?: any) => void;
export declare const reWordBreak: RegExp;
