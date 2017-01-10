# kth-console-log
Simple console logger used for default logging in our npm packages

This module can be use as a default, node-bunyan compatible logger in projects where basic logging that should be overridable should be available.

## Requirements of overriding logger
If you use kth-console-log in your module and want to replace it with a custom logger, just make sure that the logger you are providing adheres to the following pseudo interface:
```
function trace(...args)
function debug(...args)
function info(...args)
function warn(...args)
function error(...args)
function fatal(...args)
```

## Example of usage

In the module that should have an overridable logger add:
```js
const defaultLogger = require('kth-console-log')
var log = defaultLogger
```

Then export a getter/setter for the logger along with everything else that should be exported from the module:
```js
  return {
    funcToExport: function() { ... },
    get logger() {
      return log
    },
    set logger(logger) {
      log = logger
    }
  }
```

Then log as usual in the module itself:
```js
log.info('This is some info-level logging')
```

And in the main application that depends on the module just override the exported logger with your own logging object:
```js
var myModule = require('my-module-with-overridable-logging')
var myLogger = require('my-initialized-logger')
myModule.logger = myLogger
```
