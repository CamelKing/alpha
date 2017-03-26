export declare type FnLSFilter = {
    (filename: string): string;
};
export declare function ls(dir: string, filter?: FnLSFilter): string[];
