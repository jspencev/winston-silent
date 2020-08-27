# winston-silent
A winston transport that goes nowhere.
## Install
```
npm install winston-silent
```
## Usage
This transport can be used in place of an empty transports array.
```
const winston = require('winston');
cont WinstonSilent = require('winston-silent');

var logger = winston.createLogger({
  ...
  transports: [new WinstonSilent()]
  ...
});
```
## Test
```
npm test
```