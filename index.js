/*
 * Exposes the same function names as bunyan does.
 *
 * Note that node console does not have a debug or fatal function, 
 * so we'll use .log and .error instead instead
 */

module.exports = {

  trace: (...args) => {
    console.trace(...args)
  },
  debug: (...args) => {
    console.log(...args)
  },
  info: (...args) => {
    console.info(...args)
  },
  warn: (...args) => {
    console.warn(...args)
  },
  error: (...args) => {
    console.error(...args)
  },
  fatal: (...args) => {
    console.error(...args)
  }

}