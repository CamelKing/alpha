import { Timer } from './timer';
export declare class Stopwatch {
    private readonly _name;
    constructor();
    start(name?: string): Timer;
    stop(name?: string): Timer;
    delete(name?: string): void;
    readonly name: string;
}
export declare const stopwatch: Stopwatch;
