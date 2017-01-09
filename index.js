/*
  Exposes the same function names as bunyan does.
*/

module.exports = {

  trace: (msg) => console.trace(msg),
  debug: (msg) => console.debug(msg),
  info: (msg) => console.info(msg),
  warn: (msg) => console.warn(msg),
  error: (msg) => console.error(msg),
  fatal: (msg) => console.fatal(msg) 

}