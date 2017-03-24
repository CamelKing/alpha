export declare type FnResolve = (value?: {} | PromiseLike<{}>) => void;
export declare type FnReject = (error?: any) => void;
export declare function makePromise(fnSync: any): Promise<any>;
