export declare class StopWatch {
    private readonly _name;
    constructor();
    start(name?: string): Timer;
    stop(name?: string): Timer;
    delete(name?: string): void;
    readonly name: string;
}
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
export declare let casio: StopWatch;
