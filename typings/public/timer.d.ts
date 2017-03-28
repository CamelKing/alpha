export declare class Timer {
    private _name;
    private _start;
    private _ms;
    private _s;
    constructor(name?: string);
    start(): Timer;
    stop(): Timer;
    readonly s: number;
    readonly ms: number;
    readonly name: string;
}
