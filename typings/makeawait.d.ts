export declare type FnPromiseFactory = () => Promise<any>;
export declare function makeAwait(fnPassedIn: any): FnPromiseFactory;
