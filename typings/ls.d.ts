export declare type FnLSFilter = {
    (filename: string): boolean;
};
export declare function ls(dir: string, filter?: FnLSFilter): string[];
