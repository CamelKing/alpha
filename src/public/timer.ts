/**
 * Individual timer.
 *
 * use .start() to start the timer,
 * use .stop() to stop it.
 * .s = elapsed time in seconds
 * .ms = elapsed time in milleseconds
 * .name = name of the timer
 *
 * @export
 * @class Timer
 */

import { randomText } from './randomText';

type HRTime = [number, number];

export class Timer {

  private _name: string;
  private _start: HRTime;
  private _ms: number;
  private _s: number;

  constructor(name?: string) {
    this._name = name || 'timer' + randomText(5);
    this._start = null;
    this._ms = undefined;
    this._s = undefined;
    return this;
  }

  public start(): Timer {

    // prevent double start for same timer
    if (!this._start) {
      this._start = process.hrtime();
      this._ms = undefined;
      this._s = undefined;
    }
    return this;

  }

  public stop(): Timer {

    // only stops if timer already started
    if (this._start) {
      const end: HRTime = process.hrtime(this._start);
      this._ms = (end[0] * 1e9 + end[1]) / 1000000;
      this._s = this._ms / 1000;
      this._start = null;
    }
    return this;

  }

  public get s(): number { return this._s; }
  public get ms(): number { return this._ms; }
  public get name(): string { return this._name; }

}

