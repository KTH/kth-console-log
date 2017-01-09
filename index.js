/*
 * Exposes the same function names as bunyan does.
 *
 * Note that node console does not have a debug or fatal function, 
 * so we'll use .log and .error instead instead
 */

module.exports = {

  trace: (msg) => console.trace(msg),
  debug: (msg) => console.log(msg),
  info: (msg) => console.info(msg),
  warn: (msg) => console.warn(msg),
  error: (msg) => console.error(msg),
  fatal: (msg) => console.error(msg) 

}