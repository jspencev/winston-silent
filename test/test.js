var expect = require('chai').use(require('sinon-chai')).expect;
var sinon = require('sinon');

const winston = require('winston')
const WinstonSilent = require('../index');

describe('WinstonSilent', function() {
  describe('constructor', function() {
    it('should obey option.name', function() {
      var transport = new WinstonSilent();
      expect(transport).to.have.property('name', 'silent')
      transport = new WinstonSilent({name: 'foo'});
      expect(transport).to.have.property('name', 'foo');
    });
  });
  describe('log', function() {
    it('should callback if callback', function() {
      var transport = new WinstonSilent();
      var cb = sinon.fake();
      transport.log({});
      expect(cb).to.not.be.called;
      transport.log({}, cb);
      expect(cb).to.be.calledOnce;
    });

    it('should be run properly by winston', function() {
      var trans = new WinstonSilent();
      var logger = winston.createLogger({
        transports: [new WinstonSilent()]
      });
      logger.log({
        level: 'info',
        message: 'foo'
      });
      // if there's output in stdout about "no transports", something is wrong. do not know how to test this.
    });
  });
});