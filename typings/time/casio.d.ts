import { Timer } from '../../src/alpha';
export declare class Casio {
    private readonly _name;
    constructor();
    start(name?: string): Timer;
    stop(name?: string): Timer;
    delete(name?: string): void;
    readonly name: string;
}
export declare const casio: Casio;
