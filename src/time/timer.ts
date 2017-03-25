type HRTime = [number, number];

const tName: string = 'timer';
const swName: string = 'casio';

/**
 * container for timer
 *
 * exported as a single instance variable: casio
 *
 * use .start(timer name) to start timer, and
 * use .stop(timer name) to stop it.
 *
 * calling timer which does not exist will be ignored.
 *
 * usage:
 *
 *  casio.start('loopA');
 *  casio.stop('loopA');
 *  casio.s = seconds elapsed
 *  casio.ms = mille seconds elapsed
 *  case.name = 'loopA'
 *
 *  multiple timer can be active at same time.
 *
 * once timer is stopped, it can be recycled by calling .start() again.
 *
 * @export
 * @class StopWatch
 */

export class StopWatch {

  private readonly _name: string = swName;

  constructor() {
    // tslint:disable-next-line:no-use-before-declare
    return casio ? casio : this;
  }

  public start(name: string = tName): Timer {
    if (!this[name]) {
      this[name] = new Timer(name);
    }
    return this[name].start();
  }

  public stop(name: string = tName): Timer {
    return this[name] ? this[name].stop() : null;
  }

  public delete(name: string = tName): void {
    // no need to check if timer exists as delete wont throw
    delete this[name];
  }

  public get name(): string { return this._name; }

}

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
export class Timer {

  private _name: string;
  private _start: HRTime;
  private _ms: number;
  private _s: number;

  constructor(name?: string) {
    this._name = name || tName;
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
      this._ms = toMilleSeconds(end);
      this._s = toSeconds(this._ms);
      this._start = null;
    }
    return this;

  }

  public get s(): number { return this._s; }
  public get ms(): number { return this._ms; }
  public get name(): string { return this._name; }

}

function toMilleSeconds(t: HRTime): number {
  return ((t[0] * 1e9 + t[1]) / 1000000);
}

function toSeconds(t: number): number {
  return (t / 1000);
}

export const casio: StopWatch = new StopWatch();

