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

import { Timer } from './timer';

const swName: string = 'casio';
const tName: string = 'g-shock';

export class Stopwatch {

  private readonly _name: string = swName;

  constructor() {
    // tslint:disable-next-line:no-use-before-declare
    return stopwatch ? stopwatch : this;
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

export const stopwatch: Stopwatch = new Stopwatch();
