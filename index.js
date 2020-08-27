const TransportStream = require('winston-transport');

/** Transport that does nothing. */
class WinstonSilent extends TransportStream {
  /**
   * Constructor. 
   * @param {Object} options - Options.
   * @param {String} [options.name=silent] - Name of the transport. Default is "silent".
   */
  constructor(options = {}) {
    super(options);
    this.name = options.name || 'silent';
    this.setMaxListeners(30);
  }

  /**
   * Core logging method exposed to winston.
   * @param {*} info - Log object.
   * @param {*} callback - Callback.
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info));
    if (callback) {
      callback();
    }
  }
}

module.exports = WinstonSilent;