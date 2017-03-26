import { Casio, Timer, casio } from '../../src/alpha';
import { expect, should } from 'chai';

should();

describe('casio object\n', () => {

  describe('Object instantiation', () => {

    it('should be a single instance object', () => {

      const rolex: Casio = new Casio();
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
    const t1: Timer = casio.start(tName);
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
      t1 = casio.start();
      casio[t1.name].should.deep.equal(t1);
      expect(casio[t1.name].s).to.equal(undefined);
      expect(casio[t1.name].ms).to.equal(undefined);
    });

    it('should be able to record elapsed time with blank timer name.', () => {
      casio.stop();
      casio[t1.name].should.deep.equal(t1);
      casio[t1.name].ms.should.be.gt(0);
      casio[t1.name].s.should.be.gt(0);
    });

    it('should return null if .stop() w/ invalid timer name.', () => {
      t1 = casio.start();
      casio[t1.name].should.deep.equal(t1);
      expect(casio.stop('ABCDEFG')).to.equal(null);
    });

    it('should be able to delete default timer.', () => {
      t1 = casio.start();
      casio.delete();
      expect(casio[t1.name]).to.equal(undefined);
    });


  });

  describe('casio operation with named timer.', () => {

    const tName1: string = 'timerA';

    it('should be able to record elapsed time.', () => {
      casio.start(tName1);
      casio.stop(tName1);
      casio[tName1].ms.should.be.gt(0);
      casio[tName1].s.should.be.gt(0);
    });

    it('should ignore delete timer request with wrong timer name.', () => {
      casio.delete(tName1 + '123');
      casio.hasOwnProperty(tName1).should.be.true;
    });

    it('should be able to delete timer.', () => {
      casio.delete(tName1);
      casio.hasOwnProperty(tName1).should.be.false;
    });

  });

  describe('casio operation with multiple timers.', () => {

    const tName1: string = 'timerA';
    const tName2: string = 'timerB';
    let t1: Timer;
    let t2: Timer;

    it('should start timer 1 and 2 with no problem.', () => {
      t1 = casio.start(tName1);
      t2 = casio.start(tName2);
      expect(t1).to.not.equal(null);
      expect(t2).to.not.equal(null);
      t1.name.should.not.equal(t2.name);
      expect(casio[tName1].ms).to.equal(undefined);
      expect(casio[tName1].s).to.equal(undefined);
      expect(casio[tName2].ms).to.equal(undefined);
      expect(casio[tName2].s).to.equal(undefined);
    });

    it('should stop timer 1 and 2 with no problem.', () => {
      casio.stop(tName2);
      casio.stop(tName1);
      casio[tName1].ms.should.be.gt(0);
      casio[tName1].s.should.be.gt(0);
      casio[tName2].ms.should.be.gt(0);
      casio[tName2].s.should.be.gt(0);
    });

    it('should record elapsed time correctly for both timers.', () => {
      casio[tName1].ms.should.be.gt(casio[tName2].ms);
      casio[tName1].s.should.be.gt(casio[tName2].s);
    });

    it('should be able to delete both timers with no problem.', () => {
      casio.delete(tName1);
      casio.delete(tName2);
      expect(casio[tName1]).to.equal(undefined);
      expect(casio[tName2]).to.equal(undefined);
    });


  });

});
