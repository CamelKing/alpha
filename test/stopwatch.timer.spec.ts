import { Stopwatch, Timer, stopwatch } from '../src/alpha';
import { expect, should } from 'chai';

should();

describe('stopwatch Object\n', () => {

  describe('Object instantiation', () => {

    it('should be a single instance object', () => {

      const rolex: Stopwatch = new Stopwatch();
      rolex.name.should.equal('casio');

    });

  });

  describe('Timer operation with default name.', () => {
    const t0: Timer = new Timer();
    expect(t0.name).to.not.equal(undefined);
    t0.name.should.not.equal('');
  });

  describe('Timer operation with named timer.', () => {

    const tName: string = 'loopA';
    const t1: Timer = stopwatch.start(tName);
    const t0: Timer = new Timer(tName);

    it('should ignore a .stop() before starting timer.', () => {
      t0.stop().should.deep.equal(t0);
      expect(t0.s).to.equal(undefined);
      expect(t0.ms).to.equal(undefined);
    });

    it('should be able to start a timer using casio casio.', () => {
      t1.should.not.equal(null);
      t1.name.should.equal(tName);
    });

    it('should have no problem starting timer.', () => {
      t1.start().should.deep.equal(t1);
      expect(t1.s).to.equal(undefined);
      expect(t1.ms).to.equal(undefined);
    });

    it('should ignore a second start request.', () => {
      t1.start().should.deep.equal(t1);
      expect(t1.s).to.equal(undefined);
      expect(t1.ms).to.equal(undefined);
    });

    it('should have no problem stopping timer.', () => {
      t1.stop().should.deep.equal(t1);
      t1.s.should.not.equal(undefined);
      t1.ms.should.not.equal(undefined);
    });

    it('should have recorded elapsed time.', () => {
      t1.ms.should.be.gt(0);
      t1.s.should.be.gt(0);
    });


  });

  describe('casio operation with default timer name', () => {

    let t1: Timer;

    it('should be able to start timer blank timer name.', () => {
      t1 = stopwatch.start();
      stopwatch[t1.name].should.deep.equal(t1);
      expect(stopwatch[t1.name].s).to.equal(undefined);
      expect(stopwatch[t1.name].ms).to.equal(undefined);
    });

    it('should be able to record elapsed time with blank timer name.', () => {
      stopwatch.stop();
      stopwatch[t1.name].should.deep.equal(t1);
      stopwatch[t1.name].ms.should.be.gt(0);
      stopwatch[t1.name].s.should.be.gt(0);
    });

    it('should return null if .stop() w/ invalid timer name.', () => {
      t1 = stopwatch.start();
      stopwatch[t1.name].should.deep.equal(t1);
      expect(stopwatch.stop('ABCDEFG')).to.equal(null);
    });

    it('should be able to delete default timer.', () => {
      t1 = stopwatch.start();
      stopwatch.delete();
      expect(stopwatch[t1.name]).to.equal(undefined);
    });


  });

  describe('casio operation with named timer.', () => {

    const tName1: string = 'timerA';

    it('should be able to record elapsed time.', () => {
      stopwatch.start(tName1);
      stopwatch.stop(tName1);
      stopwatch[tName1].ms.should.be.gt(0);
      stopwatch[tName1].s.should.be.gt(0);
    });

    it('should ignore delete timer request with wrong timer name.', () => {
      stopwatch.delete(tName1 + '123');
      stopwatch.hasOwnProperty(tName1).should.be.true;
    });

    it('should be able to delete timer.', () => {
      stopwatch.delete(tName1);
      stopwatch.hasOwnProperty(tName1).should.be.false;
    });

  });

  describe('casio operation with multiple timers.', () => {

    const tName1: string = 'timerA';
    const tName2: string = 'timerB';
    let t1: Timer;
    let t2: Timer;

    it('should start timer 1 and 2 with no problem.', () => {
      t1 = stopwatch.start(tName1);
      t2 = stopwatch.start(tName2);
      expect(t1).to.not.equal(null);
      expect(t2).to.not.equal(null);
      t1.name.should.not.equal(t2.name);
      expect(stopwatch[tName1].ms).to.equal(undefined);
      expect(stopwatch[tName1].s).to.equal(undefined);
      expect(stopwatch[tName2].ms).to.equal(undefined);
      expect(stopwatch[tName2].s).to.equal(undefined);
    });

    it('should stop timer 1 and 2 with no problem.', () => {
      stopwatch.stop(tName2);
      stopwatch.stop(tName1);
      stopwatch[tName1].ms.should.be.gt(0);
      stopwatch[tName1].s.should.be.gt(0);
      stopwatch[tName2].ms.should.be.gt(0);
      stopwatch[tName2].s.should.be.gt(0);
    });

    it('should record elapsed time correctly for both timers.', () => {
      stopwatch[tName1].ms.should.be.gt(stopwatch[tName2].ms);
      stopwatch[tName1].s.should.be.gt(stopwatch[tName2].s);
    });

    it('should be able to delete both timers with no problem.', () => {
      stopwatch.delete(tName1);
      stopwatch.delete(tName2);
      expect(stopwatch[tName1]).to.equal(undefined);
      expect(stopwatch[tName2]).to.equal(undefined);
    });


  });

});
